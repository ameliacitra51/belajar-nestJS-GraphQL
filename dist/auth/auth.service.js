"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const user_entity_1 = require("../users/entities/user.entity");
const role_enum_1 = require("../common/enum/role.enum");
let AuthService = class AuthService {
    userRepo;
    jwtService;
    constructor(userRepo, jwtService) {
        this.userRepo = userRepo;
        this.jwtService = jwtService;
    }
    async register(data) {
        const userExist = await this.userRepo.findOneBy({ email: data.email });
        if (userExist) {
            throw new common_1.BadRequestException('Email sudah terdaftar');
        }
        const hashedPassword = await bcrypt.hash(data.password, 10);
        const role = Object.values(role_enum_1.Role).includes(data.role)
            ? data.role
            : role_enum_1.Role.STUDENT;
        const newUser = this.userRepo.create({
            ...data,
            password: hashedPassword,
            role,
        });
        console.log('datanya', data);
        await this.userRepo.save(newUser);
        const payload = {
            sub: newUser.id,
            email: newUser.email,
            role: newUser.role,
        };
        const token = this.jwtService.sign(payload);
        const loginUser = {
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
    async validateUser(email, pass) {
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
    async login(data) {
        const user = await this.validateUser(data.email, data.password);
        if (!user) {
            throw new common_1.UnauthorizedException('Email atau password salah');
        }
        const payload = { sub: user.id, email: user.email, role: user.role };
        return {
            accessToken: this.jwtService.sign(payload),
            user,
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map