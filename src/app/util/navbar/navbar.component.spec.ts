import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from './navbar.component';
import { LogoutService } from 'src/app/services/logout.service';
import { NavbarService } from 'src/app/services/navbar.service';
describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ NavbarComponent ],
      providers: [LogoutService,NavbarService]
    })
    .compileComponents();
  });

});