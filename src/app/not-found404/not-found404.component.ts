import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-not-found404',
  templateUrl: './not-found404.component.html',
  styleUrls: ['./not-found404.component.scss']
})
export class NotFound404Component implements OnInit {
  @Input() public titulo:string = "Parece que no hay nada por aquí";
  
  constructor() { }

  ngOnInit(): void {
  }

}
