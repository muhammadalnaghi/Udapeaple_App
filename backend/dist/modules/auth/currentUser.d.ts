import { Request } from 'express';
import { User } from './user.interface';
export declare class CurrentUser {
    private readonly request;
    constructor(request: Request);
    getUser(): User;
}
