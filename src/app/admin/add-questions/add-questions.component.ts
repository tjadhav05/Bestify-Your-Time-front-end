import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { iQuestionbank } from 'src/app/models/questionbank';
import { QuestionbankService } from 'src/app/services/questionbank.service';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.scss']
})
export class AddQuestionsComponent implements OnInit {


  constructor(private questionbankService: QuestionbankService, private toastr: ToastrService, private router: Router) { }


  question: string = "";
  optionA: string = "";
  optionB: string = "";
  optionC: string = "";
  optionD: string = "";
  answer: string = "";
  marks: number = 0;


  ngOnInit(): void {
  }



  onAddQuestion() {
    const request = this.questionbankService.addQuestion(this.question, this.optionA, this.optionB, this.optionC, this.optionD, this.answer, this.marks)

    request.subscribe(response => {

      console.log("response from question bank from addquestion");


      if (response == null) {
        console.log(response['error'])

      }
      else {


        this.toastr.success("Question Added", '', {
          timeOut: 2000
        })
        this.createBlankForm();

      }


    })

  }

  createBlankForm() {
    this.question = "";
    this.optionA = "";
    this.optionB = "";
    this.optionC = "";
    this.optionD = "";
    this.answer = "";
    this.marks = 0;
  }
  onDone() {


    this.router.navigate(["/AdminHome/QuizList"])

  }
}