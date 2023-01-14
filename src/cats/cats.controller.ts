import { Body, Controller, Get, Header, HttpCode, Post } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './interfaces/cat.interface';
import { CatsInterface } from './interfaces/cats.interface';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController implements CatsInterface {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  @Header('Cache-Control', 'none')
  @HttpCode(204)
  async create(@Body() createCatDto: CreateCatDto): Promise<void> {
    return this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
