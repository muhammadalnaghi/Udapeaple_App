import { JwtPayload } from './jwt-payload.interface';
import { User } from './user.interface';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: JwtPayload): User;
}
export {};
