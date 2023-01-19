import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
  UnauthorizedException,
  UseFilters,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './interfaces/cat.interface';
import { CatsInterface } from './interfaces/cats.interface';
import { CatsService } from './cats.service';
import { HttpExceptionFilter } from 'src/http-exception/http-exception.filter';

@Controller('cats')
@UseFilters(new HttpExceptionFilter())
export class CatsController implements CatsInterface {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  @Header('Cache-Control', 'none')
  @HttpCode(204)
  async create(@Body() createCatDto: CreateCatDto): Promise<void> {
    return this.catsService.create(createCatDto);
  }

  @Get('/list')
  async findAll(): Promise<Cat[]> {
    try {
      return await this.catsService.findAll();
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
}
