import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TopscorerService } from './topscorer.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('TopscorerService', () => {
  let service: TopscorerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule ,RouterTestingModule,HttpClientTestingModule]
    });
    service = TestBed.inject(TopscorerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
