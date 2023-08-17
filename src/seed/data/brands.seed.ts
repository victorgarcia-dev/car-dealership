
import { Brand } from 'src/brands/entities/brand.entity';
import { v4 as uuidv4 } from 'uuid';

export const BRANDS_SEED:Brand[] =[
    {
        id: uuidv4(),
        name: 'toyota',
        createdAT: new Date().getTime()
    },
    {
        id: uuidv4(),
        name: 'tesla',
        createdAT: new Date().getTime()
    },
    {
        id: uuidv4(),
        name: 'honda',
        createdAT: new Date().getTime()
    }
    
] 