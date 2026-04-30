import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { prisma } from '../../lib/prisma.js';
import { env } from '../../config/env.js';
const registerUser = async (payload) => {
    const isUserExist = await prisma.user.findUnique({
        where: { email: payload.email }
    });
    if (isUserExist) {
        throw new Error('User already exists with this email!');
    }
    const hashedPassword = await bcrypt.hash(payload.password, Number(env.bcrypt_salt_rounds));
    const newUser = await prisma.user.create({
        data: {
            name: payload.name,
            email: payload.email,
            password: hashedPassword,
            role: payload.role || 'STUDENT',
            // needPasswordChange: true,
        },
    });
    const token = jwt.sign({ userId: newUser.id, role: newUser.role }, env.jwt_secret, { expiresIn: '7d' });
    return {
        token,
        user: {
            id: newUser.id,
            email: newUser.email,
            role: newUser.role,
            needPasswordChange: newUser.needPasswordChange,
        },
    };
};
const loginUser = async (payload) => {
    const user = await prisma.user.findUnique({
        where: { email: payload.email },
    });
    if (!user) {
        throw new Error('User does not exist!');
    }
    const isPasswordMatch = await bcrypt.compare(payload.password, user.password);
    if (!isPasswordMatch) {
        throw new Error('Password does not match!');
    }
    const token = jwt.sign({ userId: user.id, role: user.role }, env.jwt_secret || 'fallback_secret_for_testing', { expiresIn: '7d' });
    return {
        token,
        user: {
            id: user.id,
            email: user.email,
            role: user.role,
            needPasswordChange: user.needPasswordChange,
        },
    };
};
const getAllUsers = async () => {
    const users = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            createdAt: true,
        },
        orderBy: {
            createdAt: 'desc'
        }
    });
    return users;
};
export const AuthService = {
    registerUser,
    loginUser,
    getAllUsers
};
//# sourceMappingURL=auth.service.js.map