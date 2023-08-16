import { Body, 
        Controller, 
        Delete, 
        Get, 
        Param, 
        ParseUUIDPipe, 
        Patch, 
        Post, 
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dtos/index';


@Controller('cars')
export class CarsController {

    constructor(
        private readonly carsService: CarsService
    ){}


    @Get()
    getAllCars(){
        return this.carsService.findAllCars();
    }

    @Get(':id')
    async getCarById(
        @Param('id', new ParseUUIDPipe({version:'4'})) id:string
    ){
      return this.carsService.findByIdCar(id);
    }

    @Post()
    createCar(@Body() createCarDto:CreateCarDto){ 
        return this.carsService.create(createCarDto);
    }
    
    @Patch(':id')
    updateCar(
        @Body() updateCarDto:UpdateCarDto,
        @Param('id', ParseUUIDPipe) id:string
        ){

        return this.carsService.updateId(id,updateCarDto);         
    }
    
    @Delete(':id')
    deleteCar(
        @Param('id', ParseUUIDPipe) id:string
    ){
        return this.carsService.delete(id);   
    }
}
