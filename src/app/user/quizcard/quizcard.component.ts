import { Highscore, iQuestionBank } from './../../models/questionlog';
import { QuestionlogService } from './../../services/questionlog.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApicallService } from 'src/app/services/apicall.service';
import { FavouriteService } from 'src/app/services/favourite.service';
import { ToastrService, ToastrModule } from 'ngx-toastr';

@Component({
  selector: 'app-quizcard',
  templateUrl: './quizcard.component.html',
  styleUrls: ['./quizcard.component.scss']
})
export class QuizcardComponent implements OnInit {

  public questions: iQuestionBank[] = [];
  public que!: iQuestionBank;
  quizname: string = "";
  username: string = sessionStorage['username'];
  category: string = "";
  public highScore!: Highscore; //to maintained high score

  constructor(private questionlogservice: QuestionlogService, private apiCall: ApicallService,
    private rout: ActivatedRoute, private router: Router, private favService: FavouriteService,
    private queationService: ApicallService, private toastr: ToastrService,
  ) {
    this.rout.params.subscribe(params => {
    });
  }

  /**
   * 
   */

  ngOnInit(): void {
    //on initialization loaded quiz cards
    this.questionlogservice.getCategories()
      .subscribe(data => {

        this.questions = data
        this.category = this.questions[0].category;
        for (let i = 0; i < this.questions.length; i++) {

          this.questionlogservice.setQuizesName(this.questions[i].quizname)
          //called highscore from service
          this.questionlogservice.getHighScore().subscribe(data => {

            //set it on question model which has property highscore
            this.questions[i].highscore = data[0].maxScore
            // console.log("console:" + this.questions[i].highscore);
            this.questions[i].status = false

          })

          //called ImageUrl method
          this.questionlogservice.getimgUrls().subscribe(data => {
            //set it on question model which has property imgUrl
            this.questions[i].imgurl = data[0].imgurl
            // console.log(this.questions[i].imgurl);
          })
        }
      });
  }

  //on click of start navigate to quiz component
  start(quizname: string) {
    this.queationService.setQuizname(quizname);
    // console.log("in ts file" + quizname);
    this.router.navigate(['Questions']);
  }

  //add to favourite
  addToFav(value: any, quizname: string) {
    //cheking status is added or not
    this.questions[value].status = !this.questions[value].status;
    //if ture
    if (this.questions[value].status) {
      //set that quiz card with username nad quizname
      const request = this.favService.setFavQuiz(this.username, quizname);

      request.subscribe((response: any) => {
        if (response == null) {
          console.log(response['error'])
        }
        else {
          this.toastr.success('Added Sucessfully!!', '', {
            timeOut: 1000
          })
          console.log("fav set success")
          console.log(response)
        }
      })
    } else {//if status not true called delete fav service
      const request = this.favService.deleteFavQuiz(this.username, quizname);
      request.subscribe((response: any) => {
        if (response == null) {
          console.log(response['error'])
        }
        else {
          this.toastr.success("Removed Sucessfully!!", '', {
            timeOut: 1000
          })
          console.log("fav delete success")
          console.log(response)
        }
      })
      // console.log("remove from fav service called")
    }
  }

  ///search quiz name
  Search() {
    if (this.quizname == "") {
      this.ngOnInit();
    } else {
      this.questions = this.questions.filter(res => {
        return res.quizname.toLocaleLowerCase().match(this.quizname.toLocaleLowerCase());
      })
    }
  }
}