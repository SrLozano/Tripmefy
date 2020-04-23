import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
@Input() public titulo:string;
  constructor(private authSvc : AuthService) {
    this.titulo = "";
   }

  ngOnInit(): void {
  }

  onLogout():void{
    this.authSvc.logOut();
  }

}