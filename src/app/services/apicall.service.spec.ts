import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ApicallService } from './apicall.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('ApicallService', () => {
  let service: ApicallService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule ,RouterTestingModule,HttpClientTestingModule ]
    });
    service = TestBed.inject(ApicallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
