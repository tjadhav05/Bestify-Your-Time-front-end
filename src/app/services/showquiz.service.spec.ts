import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ShowquizService } from './showquiz.service';

describe('ShowquizService', () => {
  let service: ShowquizService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule ,RouterTestingModule]
    });
    service = TestBed.inject(ShowquizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
