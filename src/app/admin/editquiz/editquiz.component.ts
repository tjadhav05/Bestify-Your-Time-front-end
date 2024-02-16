import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FooterService } from 'src/app/services/footer.service';
import { NavbarService } from 'src/app/services/navbar.service';
import { QuestionbankService } from 'src/app/services/questionbank.service';
import { QuizeditService } from 'src/app/services/quizedit.service';

@Component({
  selector: 'app-editquiz',
  templateUrl: './editquiz.component.html',
  styleUrls: ['./editquiz.component.scss']
})
export class EditquizComponent implements OnInit {


  questionByQuizList = []
  quizname: string = "";
  category: string = "";
  timer: number = 0;
  constructor(private quizEditService: QuizeditService, private questionbank: QuestionbankService,
    private quizeditService: QuizeditService, private router: Router,
    public nav: NavbarService, public footer: FooterService) { }

  ngOnInit(): void {
    this.loadAllQuestion();
    this.nav.hide();
    this.footer.hide();
  }

  updateQue(questid: number) {
    this.quizeditService.setQuestionId(questid);
    this.router.navigate(['AdminHome/UpdateQuestion'])
  }
  addQuestionOption() {

    this.questionbank.createObject(this.quizname, this.category, this.timer);
    //redirect
    this.router.navigate(['AdminHome/AddQuestion'])

  }
  deleteFromQuestionList(questionId: number) {
    console.log("questioonid " + questionId)
    const request = this.quizEditService.deleteFromQuestionBank(questionId);
    request.subscribe((response: any) => {
      if (response == null) {
        console.log(response['error'])

      }
      else {


        console.log(" response is here")
        console.log(response)

        this.loadAllQuestion();
      }
    })
  }




  //data fetching functions
  loadAllQuestion() {
    const request = this.quizEditService.getAllQuestionsFromQuiz();

    request.subscribe((response: any) => {
      if (response == null) {
        console.log(response['error'])

      }
      else {


        console.log(" response is here")
        console.log(response);
        this.quizname = response[0].quizname;
        this.category = response[0].category;
        this.timer = response[0].timer;
        console.log(this.quizname)
        console.log(this.category)
        console.log(this.timer)
        this.questionByQuizList = response;
      }
    })
  }

}
