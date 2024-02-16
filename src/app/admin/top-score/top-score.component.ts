import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { iQuestionbank } from 'src/app/models/questionbank';
import { FooterService } from 'src/app/services/footer.service';
import { NavbarService } from 'src/app/services/navbar.service';
import { QuestionlogService } from 'src/app/services/questionlog.service';
import { TopscorerService } from 'src/app/services/topscorer.service';

@Component({
  selector: 'app-top-score',
  templateUrl: './top-score.component.html',
  styleUrls: ['./top-score.component.scss']
})
export class TopScoreComponent implements OnInit {

  categorylist: iQuestionbank[] = [];

  constructor(private topScorerService: TopscorerService, private router: Router,
    private questionserveice: QuestionlogService,
    public nav: NavbarService,
    public footer: FooterService) { }

  ngOnInit(): void {
    this.getQuiz();
    this.nav.hide();
    this.footer.hide();
  }



  getQuiz() {

    const request = this.topScorerService.getQuizByCat()
    request.subscribe((response: any) => {
      if (response == null) {
        console.log(response['error'])

      }
      else {


        console.log(" response is here")
        console.log(response)

        this.categorylist = response
        for (let i = 0; i < this.categorylist.length; i++) {

          this.questionserveice.setQuizesName(this.categorylist[i].quizname)
          this.questionserveice.getimgUrls().subscribe(data => {
            this.categorylist[i].imgurl = data[0].imgurl
           

          })
        }

      }
    })
  }

  showTop(quizname: string) {
    this.topScorerService.setQuizname(quizname);
    console.log("in show top function")
    this.router.navigate(['AdminHome/TopScorerList']);
  }

}
