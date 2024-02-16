import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import {  answer } from 'src/app/models/question'

@Injectable({
  providedIn: 'root'
})

export class ApicallService {
  answes!: answer[];
  score:number=0;
  questioncounter:number=0;
  totalQuestion:number=0
  constructor(private httpClient:HttpClient ,
     private router:Router) { }

     private baseUrl:String = "http://localhost:8080/api";
     private url:string="http://localhost:8080/api/score"
     brainteaser:any;

     quizname:string="";
     setQuizname(qname:string){
      this.quizname=qname;
      console.log("in ts service"+this.quizname);
     }

     httpOptions ={
      headers : new HttpHeaders({
      token : sessionStorage['token']
      })
    }
  
     getQuizname(){
       return this.quizname;
     }

     getQuestions() {
      const URI = this.baseUrl+"/question/questions/"+this.quizname;
      return this.httpClient.get<any>(URI,this.httpOptions)
      }

    setScore(score:number,answerArr: answer[],total:number,questioncounter:number){
      this.score=score
      console.log("score:"+this.score)
      this.answes=answerArr
      this.totalQuestion=total
      this.questioncounter=questioncounter;
    }
    setUserScore(username:string,quizname:string){
      console.log("score method:"+this.score)
      const body={"username":username,"quizname":quizname,"score":this.score}
      return this.httpClient.post(this.url,body,this.httpOptions);
    }

    getScore(){
      return this.score;
    }
    getQuiz(){
      return this.answes;
    }
    getTotalQuestion(){
      return this.totalQuestion
    }
    getAnswers()
    {
      return this.answes
    }
    getCorrectQuestionCounter(){
      return this.questioncounter;
    }
}
