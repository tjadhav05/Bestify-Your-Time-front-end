import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TopScoreComponent } from './top-score.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FooterService } from 'src/app/services/footer.service';
import { NavbarService } from 'src/app/services/navbar.service';
import { QuestionlogService } from 'src/app/services/questionlog.service';
import { TopscorerService } from 'src/app/services/topscorer.service';
import { HttpClientModule } from '@angular/common/http';
describe('TopScoreComponent', () => {
  let component: TopScoreComponent;
  let fixture: ComponentFixture<TopScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [TopScoreComponent],
      providers: [FooterService, NavbarService, QuestionlogService, TopscorerService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
