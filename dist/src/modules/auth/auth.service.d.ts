import type { ILoginUserResponse, IRegisterUser } from './auth.interface.js';
export declare const AuthService: {
    registerUser: (payload: IRegisterUser) => Promise<ILoginUserResponse>;
    loginUser: (payload: any) => Promise<ILoginUserResponse>;
};
//# sourceMappingURL=auth.service.d.ts.map