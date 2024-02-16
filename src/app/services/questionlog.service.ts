import { Observable } from 'rxjs';
import { iQuestionBank } from './../models/questionlog';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()

export class QuestionlogService {
    c: string = "";
    _url: string = "http://localhost:8080/api/question/groupquiz/category";
    highScoreUrl = "http://localhost:8080/api/score/highscore";
    imgurl: string = "http://localhost:8080/api/image"
    quiz: string = "";

    constructor(private http: HttpClient) {

    }

    httpOptions = {
        headers: new HttpHeaders({
            token: sessionStorage['token']
        })
    }


    setCategory = (cat: string) => {
        console.log(cat);
        this.c = cat;
        console.log("Line 21 " + this.c);
    }

    //categorys={ "category":this.c }
    getCategories = () => {
        //console.log(this.http.get<iQuestionBank[]>(this._url));
        const body = { category: this.c }

        return this.http.post<any>(this._url, body, this.httpOptions);

    }
    setQuizesName = (name: string) => {
        this.quiz = name;
        this.getHighScore();
    }

    getHighScore = () => {
        const body = { quizname: this.quiz }
        return this.http.post<any>(this.highScoreUrl, body, this.httpOptions)
    }

    getimgUrls = () => {
        const body = { quizname: this.quiz }
        return this.http.post<any>(this.imgurl, body, this.httpOptions)
    }
}