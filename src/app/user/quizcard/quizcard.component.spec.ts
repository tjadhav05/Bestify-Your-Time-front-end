import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuizcardComponent } from './quizcard.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {QuestionlogService} from '../../services/questionlog.service'
import { ApicallService } from 'src/app/services/apicall.service';
import { FavouriteService } from 'src/app/services/favourite.service';
import { ToastrService ,ToastrModule} from 'ngx-toastr';
describe('QuizcardComponent', () => {
  let component: QuizcardComponent;
  let fixture: ComponentFixture<QuizcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule ,HttpClientTestingModule,ToastrModule.forRoot()],
      declarations: [ QuizcardComponent ],
      providers: [QuestionlogService,ApicallService,FavouriteService,ToastrService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
