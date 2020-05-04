import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.scss']
})
export class BienvenidaComponent implements OnInit {

  constructor() { }

  textoMotivacion = "";
  textoAccion = "";
  organizador:boolean;

  textoViajero = [
    {
      'motivacion': '¡Hola viajero! ¿Estás cansado del mismo rollo de siempre? Organizar un viaje durante meses para que acabe saliendo mal, o peor, que ni siquiera acabe llevándose a cabo. Las agencias de viajes son costosas y las ofertas no suelen adaptarse a lo buscado. Pues estás de suerte, porque has llegado a la página que satisface todas tus necesidades. Busca ofertas de agencias, únete y vete de viaje con gente como tú. ¿A qué esperas? ¡Y no olvides rellenar tu perfil! será la forma de conocerte para los demás viajeros. ¿A qué esperas? Dale al botón y comienza a vivir aventuras inolvidables con gente diferente y al mejor precio.',
      'accion': 'Busca tu primera aventura'

    }
  ]


  textoOrganizador = [
    {
      'motivacion': '¡Hola organizador! Atraer a la gente cada vez es más complicado. Internet ha puesto al alcance de cualquiera organizar un viaje, y los jóvenes no quieren destinar una parte del dinero a las comisiones de las agencias. Con Tripmefy tendrás la oportunidad de acercar tu negocio a un público joven, subiendo ofertas de baja demanda, permitiras unirse a millones de usuarios que querrán llevar a cabo ese viaje. Los pagos se realizan de forma totalmente segura através de paypal, además, podrás aceptar o rechazar a los solicitantes basándote en su perfil, comentarios y puntuaciones. Consigue visibilidad entre el público joven, vende más y lleva tu negocio al siguiente nivel. ¿A qué esperas? Haz click en crear y sube tu primera oferta ',
      'accion': 'Sube tu primera oferta'
    }
  ]


  ngOnInit(): void {

    /**Obtener variable global tipo y meterla en usuario (falta) */

    /**ESTO SIRVE PARA PRUEBAS DE TIPO DE USUARIO */

    // localStorage.setItem('usuario', 'viajero');
    //localStorage.setItem('usuario', 'organizador');

    /*SI SE INTENTA ACCEDER A ESTA PAGINA SIN HABER INICIADO SESION RETORNAREMOS
    A LA PAGINA PRINCIPAL */
    if (localStorage.getItem('usuario')==null){
      localStorage.clear();
      console.log("Any user is logged");
      var pagInicio = window.location.origin + '/page1'; 
      window.location.assign(pagInicio);
    }



    let usuario = localStorage.getItem('tipo');

    /**Este switch evalua la variable usuario y decide qué texto mostrar */
    switch(usuario){
      case 'viajero':
        this.textoMotivacion = this.textoViajero[0]["motivacion"];
        this.textoAccion = this.textoViajero[0]["accion"];
        this.organizador = false;
        break;
      case 'organizador':
      this.textoMotivacion = this.textoOrganizador[0]["motivacion"];
      this.textoAccion = this.textoOrganizador[0]["accion"];
      this.organizador = true;
        break;
      default:
      this.textoMotivacion = this.textoViajero[0]["motivacion"];
      this.textoAccion = this.textoViajero[0]["accion"];
        break;

    }

  }

}
