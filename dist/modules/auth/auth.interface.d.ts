export interface ILoginUserResponse {
    token: string;
    user: {
        id: string;
        email: string;
        role: 'ADMIN' | 'TEACHER' | 'STUDENT';
        needPasswordChange: boolean;
    };
}
export interface IJWTPayload {
    userId: string;
    role: 'ADMIN' | 'TEACHER' | 'STUDENT';
    iat?: number;
    exp?: number;
}
export interface IRegisterUser {
    name: string;
    email: string;
    password?: string;
    role?: 'ADMIN' | 'TEACHER' | 'STUDENT';
}
//# sourceMappingURL=auth.interface.d.ts.map