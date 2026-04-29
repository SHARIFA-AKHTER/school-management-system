import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { env } from '../../config/env.js';
import prisma from '../../config/db.js';
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
            ...payload,
            password: hashedPassword,
            needPasswordChange: true,
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
    const token = jwt.sign({ userId: user.id, role: user.role }, env.jwt_secret, { expiresIn: '7d' });
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
export const AuthService = {
    registerUser,
    loginUser,
};
//# sourceMappingURL=auth.service.js.map