import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowquizService {

  httpClient:HttpClient
  url='http://localhost:8080/api/question'


  constructor(httpClient:HttpClient) {
    this.httpClient=httpClient;
   }

   httpOptions = {
    headers: new HttpHeaders({
        token: sessionStorage['token']
    })
  }


  getQuizList(){
    return this.httpClient.get(this.url+'/groupby/quizname',this.httpOptions)
 
  }

}
