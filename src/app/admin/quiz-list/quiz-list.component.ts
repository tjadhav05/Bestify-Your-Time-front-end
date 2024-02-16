import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { iQuestionbank } from 'src/app/models/questionbank';
import { FooterService } from 'src/app/services/footer.service';
import { NavbarService } from 'src/app/services/navbar.service';
import { QuestionlogService } from 'src/app/services/questionlog.service';
import { QuizeditService } from 'src/app/services/quizedit.service';
import { ShowquizService } from 'src/app/services/showquiz.service';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent implements OnInit {


  httpClient: HttpClient;
  toggle = true;
  quizname: string = "";
  quizlist: iQuestionbank[] = [];
  constructor(httpClient: HttpClient,
    private showQuizList: ShowquizService,
    private quizEditService: QuizeditService, private questionserveice: QuestionlogService,
    private router: Router,
    public nav: NavbarService,
    public footer: FooterService,
    private toastr: ToastrService) {
    this.httpClient = httpClient;
  }
  ngOnInit(): void {
    this.getQuizes();
    this.nav.hide();
    this.footer.hide();
  }

  show() {
    this.toggle = !this.toggle
  }
  setQuizname(quizname: string) {
    this.quizEditService.setQuizname(quizname);
    this.router.navigate(['AdminHome/EditQuiz']);
  }

  getQuizes() {

    const request = this.showQuizList.getQuizList()

    request.subscribe((response: any) => {

      if (response == null) {
        console.log(response['error'])

      }
      else {
        console.log(" response is here")
        console.log(response)
        this.quizlist = response

        for (let i = 0; i < this.quizlist.length; i++) {

          this.questionserveice.setQuizesName(this.quizlist[i].quizname)
          this.questionserveice.getimgUrls().subscribe(data => {
            this.quizlist[i].imgurl = data[0].imgurl


          })
        }
      }

    })
  }

  //search quiz name
  Search() {
    if (this.quizname == "") {
      this.ngOnInit();
    } else {
      this.quizlist = this.quizlist.filter(res => {
        return res.quizname.toLocaleLowerCase().match(this.quizname.toLocaleLowerCase());
      })
    }
  }

  deleteQuiz(quizname: string) {

    const request = this.quizEditService.deleteQuiz(quizname)

    request.subscribe((response: any) => {

      if (response == null) {
        console.log(response['error'])

      }
      else {

        console.log(response)
        this.getQuizes();
        this.toastr.success("Quiz Deleted", "", {
          timeOut: 2000
        })

      }

    })
  }


}
