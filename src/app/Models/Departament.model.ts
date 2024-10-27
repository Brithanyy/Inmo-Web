import { Base_Property } from "./Base_Property.model";

export interface Departament extends Base_Property {
    tipo_propiedad: 'Departament';
    cantidad_ambientes: number;
    cantidad_dormitorios: number;
    cantidad_baños: number;
    piso: number;
    balcon?: boolean;
    jardin?: boolean;
    piscina?: boolean;
    cochera?: boolean;
    espensas?: boolean;
}