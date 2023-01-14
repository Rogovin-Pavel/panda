import { Injectable } from '@nestjs/common';
import { CreateUser } from './create-user.dto';

@Injectable()
export class AuthService {
  async createUser(user: CreateUser): Promise<CreateUser> {
    return {
      ...user,
      message: 'User is registered',
    };
  }
}
