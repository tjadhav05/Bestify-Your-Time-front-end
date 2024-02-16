import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { QuizeditService } from './quizedit.service';

describe('QuizeditService', () => {
  let service: QuizeditService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule,RouterTestingModule,
        HttpClientTestingModule],
      providers : [QuizeditService]
    });
    service = TestBed.inject(QuizeditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
