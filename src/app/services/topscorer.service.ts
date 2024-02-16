import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopscorerService {

  quizname: string = "";

  url = 'http://localhost:8080/api/question'
  scoreUrl = 'http://localhost:8080/api/score//allTopScores/getall'

  constructor(private httpClient: HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({
      token: sessionStorage['token']
    })
  }

  setQuizname(qname: string) {
    this.quizname = qname;
  }


  getTopScoreQuiz() {
    const body = { 'quizname': this.quizname }
    return this.httpClient.post(this.scoreUrl, body, this.httpOptions)
  }





  getQuizByCat() {
    return this.httpClient.get(this.url + '/groupby/quizname',this.httpOptions)
  }


}
