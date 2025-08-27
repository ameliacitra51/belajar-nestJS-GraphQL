import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
import { Role } from 'src/common/enum/role.enum';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { LoginUser } from './dto/login-user';
export declare class AuthService {
    private userRepo;
    private jwtService;
    constructor(userRepo: Repository<User>, jwtService: JwtService);
    register(data: RegisterDto): Promise<{
        id: string;
        name: string;
        email: string;
        role: Role;
        accessToken: string;
    }>;
    validateUser(email: string, pass: string): Promise<LoginUser | null>;
    login(data: LoginDto): Promise<{
        accessToken: string;
        user: LoginUser;
    }>;
}
