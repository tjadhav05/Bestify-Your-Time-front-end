import { Component, OnInit ,OnDestroy} from '@angular/core';
import { ApicallService } from 'src/app/services/apicall.service';
import { answer, questions } from 'src/app/models/question';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit,OnDestroy {

  isShowQuestions: boolean = false;
  userscore: number = 0;
  totalQuestion: number = 0;
  useranswer: answer[] = [];
  questions !: questions[];
  username: string = sessionStorage['email'];
  quizname: string = "";
  isDescriptive: boolean = false;
  correctQuestCount:number=0;
  
  
  constructor(private apiCall: ApicallService,private toastr:ToastrService) {
    this.userscore = this.apiCall.getScore()
    this.totalQuestion = this.apiCall.getTotalQuestion()
    this.quizname = this.apiCall.getQuizname();
    this.useranswer = JSON.parse(localStorage.getItem("userAnswer") || "[]");
    this.questions = JSON.parse(localStorage.getItem("Qustion") || "[]");
  this.correctQuestCount=this.apiCall.getCorrectQuestionCounter();
  }
  
  ngOnDestroy() {
    localStorage.removeItem("userAnswer")
    localStorage.removeItem("Qustion")
  }

  ngOnInit(): void{
    this.toastr.success("Your Score has been sent to your registered mail",'',{
      timeOut:3000
    });
  }

  //on click of show quiz show result 
  showQuestions() {
    console.log("button clicked!!")
    console.log(this.isShowQuestions)
    this.isShowQuestions = true;
    console.log("answers" + JSON.stringify(this.useranswer))
    for (var j = 0; j < this.questions.length; j++) {
      if (this.useranswer.map(x => x.questid === this.questions[j].questid)) {
        var temp = this.useranswer.findIndex(x => x.questid === this.questions[j].questid)
        if (temp > -1) {
          this.questions[j].timer = this.useranswer[temp].selectedoption
          this.questions[j].category = '0'
          if ((this.questions[j].option.optionA === null) || (this.questions[j].option.optionA === "")) {
            this.isDescriptive = true;
            this.questions[j].questionid = this.useranswer[temp].selectedoption;
          }
          if (this.questions[j].ans.toLowerCase() === this.useranswer[temp].option.toLowerCase()) {
            this.questions[j].category = '1'
          }
        }
      }
    }
  }
}
