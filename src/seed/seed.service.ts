import { Injectable } from '@nestjs/common';
import { CarsService } from 'src/cars/cars.service';
import { CARS_SEED } from './data/cars.seed';
import { BrandsService } from 'src/brands/brands.service';
import { BRANDS_SEED } from './data/brands.seed';

@Injectable()
export class SeedService {

  constructor(private readonly carsService: CarsService, private readonly brandsService: BrandsService){}
  
  populateDb() {
    this.carsService.fillCarsWithSeedDate(CARS_SEED);
    this.brandsService.fillBrandsWithSeedDate(BRANDS_SEED);
    return 'hola mundo'
  }

  
}
