import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FooterService } from 'src/app/services/footer.service';
import { NavbarService } from 'src/app/services/navbar.service';
import { QuizeditService } from 'src/app/services/quizedit.service';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.scss']
})
export class UpdateQuestionComponent implements OnInit {

  question: string = "";
  optionA: string = "";
  optionB: string = "";
  optionC: string = "";
  optionD: string = "";
  answer: string = "";
  marks: number = 0;
  quizname: string = "";
  category: string = "";
  timer: number = 0;


  constructor(private router: Router, private quizEditService: QuizeditService
  ) { }


  ngOnInit(): void {
    this.getQuestion();
    // this.nav.hide();
    // this.footer.hide();
  }
  setValues(response: any) {
    this.question = response['question'];
    this.optionA = response['option']['optionA'];
    this.optionB = response['option']['optionB'];
    this.optionC = response['option']['optionc'];
    this.optionD = response['option']['optionD'];
    this.answer = response['ans'];
    this.marks = response['marks'];
    this.quizname = response['quizname'];
    this.category = response['category'];
    this.timer = response['timer'];
  }

  getQuestion() {
    const request = this.quizEditService.getQuestionById();
    request.subscribe((response: any) => {
      if (response == null) {
        console.log(response['error'])

      }
      else {


        console.log(" response is here")
        console.log(response)

        this.setValues(response);

      }
    })
  }

  updateThisQuestion() {

    const request = this.quizEditService.updateQuestion(
      this.quizname,
      this.question,
      this.optionA,
      this.optionB,
      this.optionC,
      this.optionD,
      this.answer,
      this.marks,
      this.category,
      this.timer

    )
    request.subscribe((response: any) => {
      if (response == null) {
        console.log(response['error'])

      }
      else {


        console.log(" response is here")
        console.log(response)

        this.router.navigate(['AdminHome/EditQuiz'])

      }
    })

  }



}
