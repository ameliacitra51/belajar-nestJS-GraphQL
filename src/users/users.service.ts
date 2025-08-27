import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepo: Repository<User>,
  ) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    const user = this.usersRepo.create(createUserInput);
    return this.usersRepo.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.usersRepo.find();
  }

  async findOne(id: string): Promise<User | null> {
    return this.usersRepo.findOne({ where: { id } });
  }

  async update(
    id: string,
    updateUserInput: UpdateUserInput,
  ): Promise<User | null> {
    await this.usersRepo.update(id, updateUserInput);
    return this.findOne(id);
  }

  async remove(id: string): Promise<User> {
    const user = await this.usersRepo.findOne({ where: { id } });
    if (!user) {
      throw new Error(`User dengan ID ${id} tidak ditemukan`);
    }
    await this.usersRepo.delete(id);
    return user;
  }
}
