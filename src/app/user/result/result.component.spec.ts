import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ResultComponent } from './result.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApicallService } from 'src/app/services/apicall.service';
import { ToastrService ,ToastrModule} from 'ngx-toastr';
describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule,HttpClientTestingModule,ToastrModule.forRoot()],
      declarations: [ ResultComponent],
      providers : [ApicallService,ToastrService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
