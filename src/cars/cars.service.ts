import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dtos/index';


@Injectable()
export class CarsService {
    private cars: Car[] = [
        /*{
            id: uuidv4(),
            brand: 'toyota',
            model: 'Corrolla'
        },
        {
            id: uuidv4(),
            brand: 'Hondo',
            model: 'Civic'
        },
        {
            id: uuidv4(),
            brand: 'Jeep',
            model: 'Cherokee'
        },*/
    ];

    findAllCars() {
        return this.cars;
    }

    findByIdCar( id:string ){
       const car = this.cars.find(card => card.id === id);

       //valido si no existe el objeto
       if(!car){
        throw new NotFoundException(`no se encontro nada con este id:${id}`);
       } 
       return  car;
    }

    create( createCarDto:CreateCarDto ){
        const car:Car = {
            id: uuidv4(),
            brand: createCarDto.brand,
            model: createCarDto.model
        }

        this.cars.push(car);
        return createCarDto;
    }

    updateId( id:string, updateCarDto:UpdateCarDto ){

        let carDb = this.findByIdCar(id);

        this.cars = this.cars.map(car => {

           if(car.id === id){
            carDb = {
                ...carDb,
                ...updateCarDto,
                id
            }
            return carDb;
           }

           return car;
        }) 

        return carDb;

    }

    delete(id: string){
       let carDb = this.findByIdCar(id);
       const newCars= this.cars.filter(card => card.id !== id);
       this.cars = newCars;
    } 
    
    fillCarsWithSeedDate(cars : Car[]){
        this.cars = cars;
      }
}
