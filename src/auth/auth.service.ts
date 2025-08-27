import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
import { Role } from 'src/common/enum/role.enum';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { LoginUser } from './dto/login-user';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async register(data: RegisterDto) {
    const userExist = await this.userRepo.findOneBy({ email: data.email });
    if (userExist) {
      throw new BadRequestException('Email sudah terdaftar');
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const role = Object.values(Role).includes(data.role as Role)
      ? (data.role as Role)
      : Role.STUDENT;

    const newUser = this.userRepo.create({
      ...data,
      password: hashedPassword,
      role, // sudah dalam bentuk enum Role
    });

    console.log('datanya', data);

    await this.userRepo.save(newUser);

    const payload = {
      sub: newUser.id,
      email: newUser.email,
      role: newUser.role,
    };
    const token = this.jwtService.sign(payload);

    const loginUser: LoginUser = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
    };

    return {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
      accessToken: token,
    };
  }

  async validateUser(email: string, pass: string): Promise<LoginUser | null> {
    const user = await this.userRepo.findOneBy({ email });
    if (user && (await bcrypt.compare(pass, user.password))) {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      };
    }
    return null;
  }

  async login(data: LoginDto) {
    const user = await this.validateUser(data.email, data.password);
    if (!user) {
      throw new UnauthorizedException('Email atau password salah');
    }

    const payload = { sub: user.id, email: user.email, role: user.role };
    return {
      accessToken: this.jwtService.sign(payload),
      user,
    };
  }
}
