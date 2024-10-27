import { Base_Property } from "./Base_Property.model";

export interface Land extends Base_Property {
    tipo_propiedad: 'Terreno';
    usoPermitido?: string[]; // Residencial, Industrial, etc.
    nivelacion?: boolean;
    servicio_luz?: boolean;
    servicio_gas?: boolean;
    servicio_agua?: boolean;
    servicio_cloaca?: boolean;
    servicio_internet?: boolean;
    esta_loteado?: boolean;
}