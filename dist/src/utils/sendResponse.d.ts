import type { Response } from 'express';
type IResponse<T> = {
    statusCode: number;
    success: boolean;
    message?: string | null;
    data?: T | null;
};
declare const sendResponse: <T>(res: Response, data: IResponse<T>) => void;
export default sendResponse;
//# sourceMappingURL=sendResponse.d.ts.map