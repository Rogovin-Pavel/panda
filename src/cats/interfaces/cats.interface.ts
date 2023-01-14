import { CreateCatDto } from '../dto/create-cat.dto';
import { Cat } from './cat.interface';

export interface CatsInterface {
  create: (reateCatDto: CreateCatDto) => Promise<void>;
  findAll: () => Promise<Cat[]>;
}
