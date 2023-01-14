import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  // SQL database
  private readonly cats: Cat[] = [];

  async create(cat: Cat): Promise<void> {
    this.cats.push(cat);
  }

  async findAll(): Promise<Cat[]> {
    return this.cats;
  }
}
