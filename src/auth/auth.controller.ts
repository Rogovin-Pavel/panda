import { Body, Controller, Post } from '@nestjs/common';
import { CreateUser } from './dto/create-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUser): Promise<CreateUser> {
    const result = await this.authService.createUser(createUserDto);
    return result;
  }
}
