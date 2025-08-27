import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthResponse } from './dto/auth-respone.dto';
import { LoginResponse } from './dto/login-response.dto';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthResponse, { name: 'register' })
  async register(@Args('data') data: RegisterDto) {
    const user = await this.authService.register(data);
    return user;
  }

  @Mutation(() => LoginResponse, { name: 'login' })
  async login(@Args('data') data: LoginDto) {
    return this.authService.login(data);
  }
}
