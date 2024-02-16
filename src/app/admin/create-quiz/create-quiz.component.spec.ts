import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CreateQuizComponent } from './create-quiz.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FooterService } from 'src/app/services/footer.service';
import { NavbarService } from 'src/app/services/navbar.service';
import { QuestionbankService } from 'src/app/services/questionbank.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
describe('CreateQuizComponent', () => {
  let component: CreateQuizComponent;
  let fixture: ComponentFixture<CreateQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule,ToastrModule.forRoot()],
      declarations: [CreateQuizComponent],
      providers: [FooterService, NavbarService, QuestionbankService,ToastrService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
