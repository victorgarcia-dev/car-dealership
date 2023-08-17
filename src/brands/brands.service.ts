import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BrandsService {

  private brands: Brand[] = [
    /*{
      id:uuidv4(),
      name: 'Toyota',
      createdAT: new Date().getTime()
    }*/
  ]

  create(createBrandDto: CreateBrandDto) {
    const brand : Brand = {
      id: uuidv4(),
      name: createBrandDto.name.toLocaleLowerCase(),
      createdAT: new Date().getTime()
    }

    this.brands.push(brand);
    
    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand =  this.brands.find(brand => brand.id === id);

    if(!brand){
       throw new NotFoundException(`no se encontro ninguna marca con ese ${id}`)
    }

    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
     let brandDb = this.findOne(id);
     this.brands = this.brands.map(brand => {
      if(brand.id === id){
        brand.updatedAt = new Date().getTime();
        brandDb = {...brand,...updateBrandDto};
        return brandDb;
      }
      return brand;
     })
     return brandDb;
  }

  remove(id: string) {
    this.brands.filter(brand => brand.id !== id)
  }

  fillBrandsWithSeedDate(brands : Brand[]){
    this.brands = brands;
  }
}
