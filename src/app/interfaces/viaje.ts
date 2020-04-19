
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

export interface IViaje {
    /**
    id:string;
    ciudad:string;
    continente:string;
    descripcion:string;
    duracion:string;
    email:string;
    fin:string;
    img:string;
    inicio:string;
    limitePago:string;
    limiteUnion:string;
    maximo:string;
    pais:string;
    precio:string;
    servicios:string;
    tlf:string;
    unidas:string;
    viajeros:string;

    **/
   id:string;
   ciudad:string;

    continente:string;
    descripcion?:string;
    duracion?:string;
    email:string;
    fin?:string;
    img?:string;

    tlf?:string;


    inicio?:string;
    limitePago?:string;
    limiteUnion?:string;
    maximo?:string;

    servicios?:string;
    precio?:string;

    pais?:string;
    viajeros?:string;
};


export class Viaje implements IViaje
{
  id:string;
  ciudad:string;

   continente:string;
   descripcion?:string;
   duracion?:string;
   email:string;
   fin?:string;
   img?:string;

   tlf?:string;


   inicio?:string;
   limitePago?:string;
   limiteUnion?:string;
   maximo?:string;

   servicios?:string;
   precio?:string;
   viajeros?:string;
   pais?:string;








    constructor(o?:IViaje)
    {
        //this.id='';
        if(o !== undefined) Object.assign(this,o);
    }
};
