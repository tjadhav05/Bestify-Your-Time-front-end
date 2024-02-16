import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFav } from '../models/favourite';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  favUrl = 'http://localhost:8080/api/fav'

  constructor(private httpClient: HttpClient) { }

  httpOptions ={
    headers : new HttpHeaders({
    token : sessionStorage['token']
    })
  }

  setFavQuiz(username: string, quizname: string) {
    const body = { "username": username, "quizname": quizname }
    return this.httpClient.post(this.favUrl, body,this.httpOptions)
  }

  deleteFavQuiz(username: string, quizname: string){
  

  return this.httpClient.delete(this.favUrl+"/"+username+"/"+quizname,this.httpOptions)
  }

  getFavourite(username:string){
    const httpOptions ={
      headers : new HttpHeaders({
      token : sessionStorage['token']
      })
    }
    return this.httpClient.get(this.favUrl+"/username/"+username, this.httpOptions)
  }
  
}
