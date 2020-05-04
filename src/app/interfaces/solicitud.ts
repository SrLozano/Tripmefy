export interface ISolicitud{
    idUsuario:string;
    idViaje:string;
    idOrganizador:string;
    id:string;
    estado:string;
}

export class Solicitud implements ISolicitud
{
    idUsuario:string;
    idViaje:string;
    idOrganizador:string;
    id:string;
    estado:string;


    constructor(o?:ISolicitud)
    {
        if(o !== undefined) Object.assign(this,o);
    }
};