import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FooterService } from 'src/app/services/footer.service';
import { NavbarService } from 'src/app/services/navbar.service';
import { QuestionbankService } from 'src/app/services/questionbank.service';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.scss']
})
export class CreateQuizComponent implements OnInit {


  questionService: QuestionbankService;
  http: any;


  quizname: string = "";
  category: string = "";
  timer: number = 0;



  constructor(questionService: QuestionbankService, private router: Router,
    public nav: NavbarService, public footer: FooterService,private toastr:ToastrService) {
    this.questionService = questionService;

  }

  ngOnInit(): void {
    this.nav.hide();
    this.footer.hide();
  }

  onClick() {
if(this.category===''||this.quizname===''||this.timer===0){
  this.toastr.error("Fields canot be empety","",{
    timeOut:2000
  })
}else{
  this.questionService.createObject(this.quizname, this.category, this.timer)

  this.router.navigate(['AdminHome/AddQuestion']);
}
    

  }

}







