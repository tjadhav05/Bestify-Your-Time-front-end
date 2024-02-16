import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ShowFavouriteComponent } from './show-favourite.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApicallService } from 'src/app/services/apicall.service';
import { FavouriteService } from 'src/app/services/favourite.service';
import { QuestionlogService } from 'src/app/services/questionlog.service';
import { ToastrService,ToastrModule } from 'ngx-toastr';
describe('ShowFavouriteComponent', () => {
  let component: ShowFavouriteComponent;
  let fixture: ComponentFixture<ShowFavouriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule,HttpClientTestingModule,ToastrModule.forRoot()],
      declarations: [ ShowFavouriteComponent ],
      providers: [ApicallService,FavouriteService,QuestionlogService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFavouriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create show favourite', () => {
    expect(component).toBeTruthy();
  });
});
