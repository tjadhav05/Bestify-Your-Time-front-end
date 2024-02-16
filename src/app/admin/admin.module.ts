import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { UsersListComponent } from './users-list/users-list.component';
import { AppRoutingModule } from '../app-routing.module';

import { AddQuestionsComponent } from './add-questions/add-questions.component';
import { TopScoreComponent } from './top-score/top-score.component';
import { TopscorerListComponent } from './topscorer-list/topscorer-list.component';
import { HttpClientModule } from '@angular/common/http';

import { UserService } from '../services/user.service';
import { QuestionbankService } from '../services/questionbank.service';
import { ShowquizService } from '../services/showquiz.service';
import { TopscorerService } from '../services/topscorer.service';
import { EditquizComponent } from './editquiz/editquiz.component';
import { QuizeditService } from '../services/quizedit.service';
import { UtilModule } from '../util/util.module';
import { FormsModule } from '@angular/forms';
import { UpdateQuestionComponent } from './update-question/update-question.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';



@NgModule({
  declarations: [
    AdminHomeComponent,
    CreateQuizComponent,
    UsersListComponent,
    AddQuestionsComponent,
    TopScoreComponent,
    TopscorerListComponent,
    EditquizComponent, UpdateQuestionComponent, QuizListComponent
  ],
  imports: [
    CommonModule, AppRoutingModule, FormsModule, HttpClientModule, UtilModule
  ],
  exports: [AdminHomeComponent, CreateQuizComponent,
    UsersListComponent, UpdateQuestionComponent],

  providers: [UserService, QuestionbankService, ShowquizService, TopscorerService, QuizeditService]
})
export class AdminModule { }
