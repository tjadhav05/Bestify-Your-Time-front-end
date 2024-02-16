import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterService } from '../services/footer.service';
import { NavbarService } from '../services/navbar.service';
import { LogoutService } from '../services/logout.service';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    PageNotFoundComponent,
  ],
  providers:[
    FooterService,
    NavbarService,
    LogoutService
  ]
})
export class UtilModule { }
