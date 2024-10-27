import { House } from './House.model';
import { Departament } from './Departament.model';
import { Commerce } from './Commerce.model';
import { Land } from './Land.model';

export type Property = House | Departament | Commerce | Land; //?Unión de tipos. Indica que una Propiedad puede ser Terreno, Local, Casa o Departamento