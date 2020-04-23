import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

export interface IViaje {
    ciudad:string;
    continente:string;
    descripcion?:string;
    duracion?:string;
    email:string;
    fin?:string;
    id:string;
    img?:string;
    inicio?:string;
    limitePago?:string;
    limiteUnion?:string;
    maximo?:string;
    pais:string;
    precio?:string;
    servicios?:string;
    tlf?:string;
    unidas?:string;
    viajeros?:string; 
};


export class Viaje implements IViaje
{
    ciudad:string;
    continente:string;
    descripcion?:string;
    duracion?:string;
    email:string;
    fin?:string;
    id:string;
    img?:string;
    inicio?:string;
    limitePago?:string;
    limiteUnion?:string;
    maximo?:string;
    pais:string;
    precio?:string;
    servicios?:string;
    tlf?:string;
    unidas?:string;
    viajeros?:string;



    constructor(o?:IViaje)
    {
        //this.id='';
        if(o !== undefined) Object.assign(this,o);
    }
};


export interface ISlides {

    id:string;
    idViaje:string;
    url:string;
}

export class Slides implements ISlides{

    id:string;
    idViaje:string;
    url:string;
    

    constructor(o?:ISlides)
    {
        //this.id='';
        if(o !== undefined) Object.assign(this,o);
    }
}