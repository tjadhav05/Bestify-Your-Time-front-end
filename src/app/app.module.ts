import { QuestionlogService } from './services/questionlog.service';
import { UserModule } from './user/user.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexModule } from './index/index.module';
import { UtilModule } from './util/util.module';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { AuthModule } from './auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { GameZoneModule } from './game-zone/game-zone.module';
import { AuthGuard } from './auth.guard';
import { NavbarService } from './services/navbar.service';
import { FooterService } from './services/footer.service';
import { LogoutService } from './services/logout.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UtilModule,
    IndexModule,
    FormsModule,
    HttpClientModule,
    AuthModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), // ToastrModule added
    AdminModule,
    UserModule,
    GameZoneModule
  ],
  providers: [QuestionlogService,AuthGuard,NavbarService,FooterService,LogoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
