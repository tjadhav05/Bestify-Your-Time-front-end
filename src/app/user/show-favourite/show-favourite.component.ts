import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IFav } from 'src/app/models/favourite';
import { ApicallService } from 'src/app/services/apicall.service';
import { FavouriteService } from 'src/app/services/favourite.service';
import { QuestionlogService } from 'src/app/services/questionlog.service';

@Component({
  selector: 'app-show-favourite',
  templateUrl: './show-favourite.component.html',
  styleUrls: ['./show-favourite.component.scss']
})
export class ShowFavouriteComponent implements OnInit {
  //array of favourite 
  favList: IFav[] = []; 
  //getting username from session
  username: string = sessionStorage['username'];
  constructor(private favService: FavouriteService, 
    private questionserveice: QuestionlogService, 
    private router: Router, 
    private apiCall: ApicallService,
    private toastr:ToastrService) 
    { }

  ngOnInit(): void {
    this.getFavByUsername();
  }

  //get quiz card which was added in add to fav
  getFavByUsername() {
    const request = this.favService.getFavourite(this.username);
    request.subscribe((response: any) => {
      if (response == null) {
        console.log(response['error'])
      }
      else {
        console.log(response)
        this.favList = response;
        console.log(this.favList)
        for (let i = 0; i < this.favList.length; i++) {
          this.questionserveice.setQuizesName(this.favList[i].quizname)
          console.log(this.favList[i].quizname)
          this.questionserveice.getimgUrls().subscribe(data => {
            this.favList[i].imgurl = data[0].imgurl
          })
        }
      }
    })
  }

  //delete quiz from favourite
  deleteFromFav(quizname: string) {
    const request = this.favService.deleteFavQuiz(this.username, quizname)
    request.subscribe((response: any) => {
      if (response == null) {
        console.log(response['error'])
      }
      else {
        console.log("delete")
        console.log(response)
        this.toastr.success("Deleted!!")
        this.getFavByUsername();
      }
    })
  }

  //start quiz 
  startQuiz(quizname: string) {
    console.log("in ts file" + quizname);
    this.apiCall.setQuizname(quizname);
    this.router.navigate(['Questions']);
  }
}
