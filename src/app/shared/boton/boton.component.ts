import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.scss']
})
export class BotonComponent implements OnInit {

  constructor() { }

  @Input() public texto:string = "tu texto";

  ngOnInit(): void {
  }

}
