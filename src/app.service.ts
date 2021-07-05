import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './dto/user.dto';
import { UserUpdate } from './dto/userUpdate.dto';
import { UserEntity } from './entity/user.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async getAll(): Promise<UserEntity[]> {
    return this.usersRepository.find();
  }

  async getById(id: string): Promise<UserEntity> {
    return this.usersRepository.findOne(id);
  }

  async getByUsername(userName: string): Promise<UserEntity> {
    const username = await this.usersRepository.findOne(userName);
    return username;
  }

  async create(userDto: User): Promise<UserEntity> {
    const newUser = this.usersRepository.create(userDto);
    return this.usersRepository.save(newUser);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async update(id: string, userUpdate: UserUpdate): Promise<void> {
    await this.usersRepository.update(id, userUpdate);
  }
}
