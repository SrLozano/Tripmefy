export interface IViaje {
    id:string;
    pais: string;
    ciudad: string;
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
    unidas?:string;
    viajeros?:string;
    precio?:string;
}

export class Viaje implements IViaje
{
    id:string;
    pais: string;
    ciudad: string;
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
    unidas?:string;
    viajeros?:string;
    precio?:string;
     
    constructor(o?:IViaje)
    {
        //this.id='';
        if(o !== undefined) Object.assign(this,o);
    }   
}
