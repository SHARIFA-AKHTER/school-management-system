import type { NextFunction, Request, Response } from 'express';
import { ZodObject } from 'zod';
export declare const validateRequest: (schema: ZodObject) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=validate.middleware.d.ts.map