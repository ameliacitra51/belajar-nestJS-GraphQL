import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthResolver {
    private readonly authService;
    constructor(authService: AuthService);
    register(data: RegisterDto): Promise<{
        id: string;
        name: string;
        email: string;
        role: import("../common/enum/role.enum").Role;
        accessToken: string;
    }>;
    login(data: LoginDto): Promise<{
        accessToken: string;
        user: import("./dto/login-user").LoginUser;
    }>;
}
