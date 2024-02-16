import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizeditService {
  quizname: string = "";
  questid: number = 0;
  url = 'http://localhost:8080/api/question'
  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
        token: sessionStorage['token']
    })
  }

  setQuizname(qname: string) {
    this.quizname = qname;

  }
  setQuestionId(qid: number) {
    this.questid = qid;

  }

  deleteFromQuestionBank(questionId: number) {
    console.log(questionId)
    return this.httpClient.delete(this.url + "/questionid/" + questionId,this.httpOptions);
  }

  getAllQuestionsFromQuiz() {
    return this.httpClient.get(this.url + "/quizname/" + this.quizname,this.httpOptions)

  }

  getQuestionById() {
    return this.httpClient.get(this.url + "/questionid/" + this.questid,this.httpOptions)
  }
  deleteQuiz(quizname:string){
    const body={'quizname':quizname}
    return this.httpClient.post(this.url+"/quizname", body,this.httpOptions)
  }

  updateQuestion(quizname: string,question: string,
    optionA: string,
    optionB: string,
    optionC: string,
    optionD: string,
    answer: string,
    marks: number,
    category: string,
    timer: number) {
    const body = {
      "questId": this.questid,
      "quizname": quizname,
      "question": question,
      "category": category,
      "ans": answer,
      "marks": marks,
      "timer": timer,
      "optionA": optionA,
      "optionB": optionB,
      "optionC": optionC,
      "optionD": optionD
    }
    return this.httpClient.put(this.url + "/updatedata", body,this.httpOptions)
  }
}

