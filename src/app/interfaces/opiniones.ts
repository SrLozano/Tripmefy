export interface IPuntuacion {

    id:string;
    puntuador:string;
    puntuado:string;
    puntuacion:string;
   
}

export interface IComentario{

    id:string;
    comentador:string;
    comentado:string;
    comentario:string;

}

export class Puntuacion implements IPuntuacion{

    id:string;
    puntuador:string;
    puntuado:string;
    puntuacion:string;
    

    constructor(o?:IPuntuacion)
    {
        //this.id='';
        if(o !== undefined) Object.assign(this,o);
    }
}

export class Comentario implements IComentario{

    id:string;
    comentador:string;
    comentado:string;
    comentario:string;

    constructor(o?:IComentario)
    {
        //this.id='';
        if(o !== undefined) Object.assign(this,o);
    }
}
