import { ILoginUserResponse, IRegisterUser } from './auth.interface.js';
export declare const AuthService: {
    registerUser: (payload: IRegisterUser) => Promise<ILoginUserResponse>;
    loginUser: (payload: any) => Promise<ILoginUserResponse>;
    getAllUsers: () => Promise<{
        id: string;
        email: string;
        name: string;
        role: import("@prisma/client").$Enums.Role;
        createdAt: Date;
    }[]>;
};
//# sourceMappingURL=auth.service.d.ts.map