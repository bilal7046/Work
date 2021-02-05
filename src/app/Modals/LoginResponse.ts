import { User } from './User';

export class LoginResponse {
    status: string;
    error: string;
    token: string;
    user: User;
}
