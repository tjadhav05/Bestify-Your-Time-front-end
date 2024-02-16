import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { QuestionbankService } from './questionbank.service';

describe('QuestionbankService', () => {
  let service: QuestionbankService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule,RouterTestingModule,HttpClientTestingModule]
    });
    service = TestBed.inject(QuestionbankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
