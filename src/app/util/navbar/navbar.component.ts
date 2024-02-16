import { Component, OnInit } from '@angular/core';
import { LogoutService } from 'src/app/services/logout.service';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {



  constructor(public nav:NavbarService, public log : LogoutService ) {
    this.log.isLogin()
  }

  ngOnInit(): void {
   
  }

  logout(){
    this.log.Logout();
  }
}
