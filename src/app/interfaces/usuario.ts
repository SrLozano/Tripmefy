export interface IUsuario {

    id:string;
    email?:string;
    ubicacion?:string;
    descripcion?:string;
    tipo?:string;
    nombre?:string;
    apellidos?:string;
    password?:string;
    estrellas?:string;
    image?:string;
    //los comentarios se buscarán con el id del comentado

}

export class Usuario implements IUsuario{

    id:string;
    email?:string;
    ubicacion?:string;
    descripcion?:string;
    tipo?:string;
    nombre?:string;
    apellidos?:string;
    password?:string;
    estrellas?:string;
    image?:string;
    //los comentarios se buscarán con el id del comentado


    constructor(o?:IUsuario)
    {
        //this.id='';
        if(o !== undefined) Object.assign(this,o);
    }
}
