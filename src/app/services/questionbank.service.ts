import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { iQuestionbank } from '../models/questionbank';

@Injectable({
  providedIn: 'root'
})
export class QuestionbankService {


  questionbankurl = 'http://localhost:8080/api/question'
  quizname: string = "";
  category: string = "";
  quiztime: number = 0;
  qbank: iQuestionbank;

 
  httpClient: HttpClient;

  constructor(httpClient: HttpClient) {

    this.httpClient = httpClient;
    this.qbank = this.EmptyObj();
  }

  httpOptions ={
    headers : new HttpHeaders({
    token : sessionStorage['token']
    })
  }


  EmptyObj() {
    return {
      quizname: "", category: "", timer: 0, question: "", ans: "", marks: 0, optionA: "", optionB: "", optionC: "", optionD: "",imgurl:""
    }
  }

 

  createObject(quizname: string, category: string, timer: number) {
    this.qbank.quizname = quizname;
    this.qbank.category = category;
    this.qbank.timer = timer;
    console.log(this.qbank);
  }



  addQuestion(question: string, optionA: string, optionB: string, optionC: string, optionD: string, answer: string, marks: number) {
    this.qbank.question = question;
    this.qbank.optionA = optionA;
    this.qbank.optionB = optionB;
    this.qbank.optionC = optionC;
    this.qbank.optionD = optionD;
    this.qbank.marks = marks;
    this.qbank.ans = answer;
    const body = this.qbank;
    return this.httpClient.post(this.questionbankurl, body,this.httpOptions)
  }
}
