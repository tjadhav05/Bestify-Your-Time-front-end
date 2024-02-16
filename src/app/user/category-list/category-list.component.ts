import { QuestionlogService } from './../../services/questionlog.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  a: string = "";
  constructor(private router: Router, public queslogservice: QuestionlogService) {
  }

  ngOnInit(): void {
  }
  showCategory(cat: string) {
    this.a = cat;
    //on click of show category call service to store category
    this.queslogservice.setCategory(this.a);
    //navigate to Quiz cards
    this.router.navigate(['QuizCards']);
  }
}
