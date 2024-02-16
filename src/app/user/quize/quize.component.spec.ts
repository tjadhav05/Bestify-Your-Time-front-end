import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApicallService } from 'src/app/services/apicall.service';
import { RouterTestingModule } from '@angular/router/testing';
import { FormatTimePipe, QuizeComponent} from './quize.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';

describe('QuizeComponent', () => {
  let component: QuizeComponent;
  let fixture: ComponentFixture<QuizeComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizeComponent ,FormatTimePipe],
      imports:[RouterTestingModule,HttpClientTestingModule,ToastrModule.forRoot()],
     
      providers:[ApicallService,ToastrService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
 
});
