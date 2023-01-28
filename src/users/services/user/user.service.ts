import { Injectable } from '@nestjs/common';
import { Repository, FindOneOptions, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { UserEntity } from 'src/users/entities/user.entity';

import { CreateUserInput } from 'src/users/inputs/create-user.input';
import { UpdateUserInput } from 'src/users/inputs/update-user.input';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(createUserInput: CreateUserInput): Promise<UserEntity> {
    return await this.userRepository.save({ ...createUserInput });
  }

  async getUser(id: number): Promise<UserEntity> {
    return await this.userRepository.findOne({
      where: { id: id },
    });
  }

  async getAllUsers(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  async deleteUser(id: number): Promise<number> {
    await this.userRepository.delete({ id });
    return id;
  }

  async updateUser(updateUserInput: UpdateUserInput): Promise<UserEntity> {
    const id = updateUserInput.id;
    await this.userRepository.update({ id }, { ...updateUserInput });
    return await this.getUser(id);
  }
}
