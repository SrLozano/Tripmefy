import { Component, OnInit, ViewChild, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.scss']
})
export class MensajeComponent implements OnInit {
  @Output() cerrado: EventEmitter<any> = new EventEmitter<any>();
  @Input() public mensaje;
  @Input() public imagen = '';

  constructor() { }

  cerrar():boolean{
    var cerrado = true; //devolvemos un true para cerrar el popup
    this.cerrado.emit(cerrado);
    return cerrado;
  }

  ngOnInit(): void {
  }

}
