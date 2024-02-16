import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpClient:HttpClient;

   url='http://localhost:8080/api/user'

  constructor(httpClient:HttpClient) { 
    this.httpClient=httpClient;
  }

  
  
  httpOptions = {
    headers: new HttpHeaders({
        token: sessionStorage['token']
    })
  }

  getUser(){
    
    return this.httpClient.get(this.url,this.httpOptions)
  }


  deleteUser(userId:number){


    return this.httpClient.delete(this.url+'/userId/'+userId,this.httpOptions)
  }

}
