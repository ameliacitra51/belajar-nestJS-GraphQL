import { Role } from 'src/common/enum/role.enum';
export declare class CreateUserInput {
    name: string;
    email: string;
    password: string;
    role?: Role;
}
