import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApicallService } from 'src/app/services/apicall.service';
import { questions, option, answer } from 'src/app/models/question'
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { timer, Subscription } from "rxjs";
import { takeUntil, takeWhile } from 'rxjs/operators';
import { Pipe, PipeTransform } from "@angular/core";
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-quize',
  templateUrl: './quize.component.html',
  styleUrls: ['./quize.component.scss']
})


export class QuizeComponent implements OnInit, OnDestroy {
  questions !: questions[]; //array to store incoming data from api
  option!: option[]; //option array
  question!: questions; //to sepeare out single question from incoming api
  currentQuestionindex: number = 0; //currntly displayed question index from array
  totalQuestions!: number; //total length of question from api 
  showFirstButton: boolean = true; //button control
  showPrevButton: boolean = true; //button control
  isDescriptive: boolean = false; //for one word control
  answers!: answer; // to store clicked answers of current question
  answerArr: answer[] = []; //to store answers of all questions
  ResultArr: answer[] = []; // to send it to result page copy of answerArray
  answerForCheck: any; // to get the selected optin number as 1,2,3,4
  useranswer: any;// to store the useranswes from local storage
  //timer
  countDown!: Subscription;
  counter : number=0;
  tick = 1000;
  count!: Subscription;
  destroy = new Subject(); 
  quizname!:string; // to store quiz name
  username: string = sessionStorage['username']; //get the username from storage
  correctQuestCount:number=0;
  constructor(private apicall: ApicallService,private router:Router,private toastr:ToastrService) { 
      this.quizname=this.apicall.getQuizname();
  }

  form = new FormGroup({
    optiona: new FormControl()
  });

  ngOnInit() {
    this.getQuestions(); 
    this.getStordQuize();
    this.startTimer();
  }
  ngOnDestroy(): void {
    this.count.unsubscribe();
  }
 startTimer(){
     this.count=timer(0, this.tick).pipe(takeUntil(this.destroy)).subscribe( val => {val=--this.counter
    if (this.counter === 5){
      console.log("5 sec")
    }
    if (this.counter === 0) {
      console.log("timer 0"+this.counter)
      this.destroy.next();
      this.destroy.complete();
      this.checkTime()
    }
  });
 }
 checkTime(){
  console.log("timer"+this.counter)
   this.onSubmit();
 }
  getQuestions() {
    this.apicall.getQuestions().subscribe(
      data => {
        this.questions = data;
        this.totalQuestions = this.questions.length;
        this.question = this.questions[this.currentQuestionindex];
        console.log(this.question.option.optionA)
        var arr=this.question.timer.split(":");

        this.counter=(+arr[1])*60;
        console.log(this.counter)
        if((this.question.option.optionA===null)||(this.question.option.optionA===""))
        {
          this.isDescriptive=true;
        }
        this.checkForAnswer()
      },
      error => 
      {
        this.router.navigate(['Quizs']);
      }
      
    );
  }


  checkForAnswer() {
    for (var j = 0; j < this.answerArr.length; j++) {
     
      if (this.question.questid === this.answerArr[j].questid)  {
        if(this.isDescriptive == true){
          this.useranswer=this.answerArr[j].selectedoption
        }
        if (this.question.option.optionA == this.answerArr[j].option) {
          this.useranswer = this.answerArr[j].selectedoption
        }
          if (this.question.option.optionB === this.answerArr[j].option) {
            this.useranswer = this.answerArr[j].selectedoption
          }
            if (this.question.option.optionc === this.answerArr[j].option) {
              this.useranswer = this.answerArr[j].selectedoption
            }
            if(this.question.option.optionD === this.answerArr[j].option) {
              this.useranswer = this.answerArr[j].selectedoption
            }
        
      }
      else{
        this.form.controls['optiona'].reset
      }
    }
    return;
  }
//on click of next show next question
  onNext() {
    this.form.controls['optiona'].reset();
    this.showPrevButton = false;
   this.useranswer="";
    this.currentQuestionindex = this.currentQuestionindex + 1;
    if (this.currentQuestionindex < this.totalQuestions) {
      this.question = this.questions[this.currentQuestionindex];
     this.checkForAnswer()
    }
    if (this.currentQuestionindex == this.totalQuestions - 1) {
      this.showFirstButton = false;
    }

  }
//on click of previous show previous question
  onPrev() {
    this.showFirstButton = true;
    this.useranswer="";
    this.currentQuestionindex = this.currentQuestionindex - 1;
    if (this.currentQuestionindex >= 0) {
      this.question = this.questions[this.currentQuestionindex];
      this.checkForAnswer()
    }
    if (this.currentQuestionindex == 0) {
      this.showPrevButton = true;
    }
  }
  get f() {
    return this.form.controls;
  }
  //save each option clicked of every question
  onSave() {
    console.log("value" + this.form.get('optiona')?.value + "Question id" + this.question.questid);
    if (this.isDescriptive == true) {
      var ele = { "questid": this.question.questid, "option": this.form.get('optiona')?.value, "selectedoption": this.form.get('optiona')?.value }
    }
    else {
      if (this.question.option.optionA === this.form.get('optiona')?.value) {
        this.answerForCheck = "1"
      }
      else {
        if (this.question.option.optionB === this.form.get('optiona')?.value) {
          this.answerForCheck = "2"
          console.log("answed answe" + this.answerForCheck)
        }
        else {
          if (this.question.option.optionc === this.form.get('optiona')?.value) {
            this.answerForCheck = "3"
          }
          else {
            this.answerForCheck = "4"
          }
        }
      }
      var ele = { "questid": this.question.questid, "option": this.form.get('optiona')?.value, "selectedoption": this.answerForCheck }
    }
    this.answers = ele
    var foundIndex = this.answerArr.findIndex(x => x.questid == this.answers.questid);
    if (foundIndex != -1) {
      this.answerArr.splice(foundIndex, 1, this.answers)
    }
    else {
      this.answerArr.push(this.answers)
     // this.ResultArr.push(this.answers)
    }
  }
  // on clicking of save button store answer in local storage
  onSaveQuize(){
    localStorage.setItem("answers",JSON.stringify(this.answerArr));
    this.router.navigate(['Quizs']);
    this.toastr.success("Your Quiz Saved Successfully","",{
      timeOut:2000
    })
  }
  //fuction to get the local storage
  getStordQuize()
  {
    this.answerArr=JSON.parse(localStorage.getItem("answers") || "[]");
  }
  onSubmit() {
    var correctanswer = 0
    for (var j = 0; j < this.answerArr.length; j++) {
      if (this.questions.map(x => x.questid === this.answerArr[j].questid)) {
        var temp = this.questions.findIndex(x => x.questid === this.answerArr[j].questid)
        
        
      if(temp >= 0){
      this.ResultArr.push(this.answerArr[j]);
        if (this.questions[temp].ans.toLowerCase() === this.answerArr[j].option.toLowerCase()) {
          
          this.correctQuestCount++;
          correctanswer += this.questions[temp].marks;

        }
      }
      }
    }
    console.log("correctans"+correctanswer)
    
     for (var j = 0; j < this.totalQuestions; j++) {
      if (this.answerArr.map(x => x.questid === this.questions[j].questid)) {
        var temp = this.answerArr.findIndex(x => x.questid === this.questions[j].questid)
        console.log(temp)
        if(temp >=0){
        this.answerArr.splice(temp,1)
        }
      }
    }
    // store modified answer array after submission
    localStorage.setItem("answers",JSON.stringify(this.answerArr));
    localStorage.setItem("userAnswer",JSON.stringify(this.ResultArr));
    //to send questins to result page
    localStorage.setItem("Qustion",JSON.stringify(this.questions)); 
    this.apicall.setScore(correctanswer,this.ResultArr,this.totalQuestions,this.correctQuestCount);
    this.addScore();
    this.router.navigate(['Result'])
  }

  addScore(){
   
    const request=this.apicall.setUserScore(this.username,this.quizname);
    request.subscribe((response: any) => {
      if (response == null) {
        console.log(response['error'])
      }
      else {
        console.log("success")
        console.log(response)
      }
    })
    }
}

@Pipe({
  name: "formatTime"
})
export class FormatTimePipe implements PipeTransform {
  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return ('00' + minutes).slice(-2) + ':' + ('00' + Math.floor(value - minutes * 60)).slice(-2);
  }
}