import { Component, Input,OnInit , Output, EventEmitter} from "@angular/core";
import { trigger, transition, style, animate } from "@angular/animations";
import { ActivatedRoute }  from '@angular/router';
import { Router } from '@angular/router'; //Para redirigir a una página

@Component({
  selector: "carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate('300ms', style({ opacity: 0 }))
      ])
    ])
  ]
})

export class CarouselComponent {
  @Input() slides;
  @Input() links;

  currentSlide = 0;
  /**misLinks se emplea para pasar por parametro los links correspodientes a las imágenes, en el mismo orden.
   * Debe tener la siguiente estructura:
   * [
   *  [parte1, id1],
   *  [parte2, id2],
   *      ...
   *  [parte3, id3]
   * ]
   */
  primero = "";
  segundo = "";

  constructor(private _activatedRoute: ActivatedRoute,
    private route: Router) {
    
  }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    //console.log("previous clicked, new current slide is: ", this.currentSlide);


  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    //console.log("next clicked, new current slide is: ", this.currentSlide);

  }

  onClick(){

    if(this.links == undefined || this.links.length <= 0){
      //si no tenemos links devolvemos un cero y ya, no hacemos nada
      return 0;
    }else{
       //si tenemos links hacemos lo siguiente

       var origin = window.location.origin + '/'; //obtenemos la parte de la izquierda de la url

      //var datos = window.location.pathname;
      //var routerLink = datos.split('/');

      var primero = '/' + this.links[this.currentSlide][0] + '/'; //primero corresponde a la primera posicion del slide donde estemos
      var segundo = this.links[this.currentSlide][1]
      //var segundo = 'yhySIyMyRGwIqtwEeuZV';
      this.primero = primero;
      this.segundo = segundo;


      var destino = primero + segundo;
      
      this.route.navigate([destino]);
    }

  }



  ngOnInit(): void {

  }
}
