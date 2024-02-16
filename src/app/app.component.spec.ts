import { HttpClientModule } from '@angular/common/http';
import { TestBed, async } from '@angular/core/testing'; // 1
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { AuthModule } from './auth/auth.module';
import { GameZoneModule } from './game-zone/game-zone.module';
import { IndexModule } from './index/index.module';
import { FooterService } from './services/footer.service';
import { LogoutService } from './services/logout.service';
import { NavbarService } from './services/navbar.service';
import { QuestionlogService } from './services/questionlog.service';
import { UserModule } from './user/user.module';
import { UtilModule } from './util/util.module';
 
describe('AppComponent', () => { // 2
    beforeEach(async () => {
        await TestBed.configureTestingModule({
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
              providers: [QuestionlogService,AuthGuard,NavbarService,FooterService,LogoutService]
        })
        .compileComponents();
      });
 
  it('should create the app', () => { // 4
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'bestify-your-time'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('bestify-your-time');
  });

});
