import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
@Input() public titulo:string;
  constructor() {
    this.titulo = "";
   }

  ngOnInit(): void {
  }

}
