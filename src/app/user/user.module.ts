import { NgModule } from '@angular/core';
import { FormatTimePipe, QuizeComponent } from './quize/quize.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { ResultComponent } from './result/result.component';
import { QuizcardComponent } from './quizcard/quizcard.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FavouriteService } from '../services/favourite.service';
import { ShowFavouriteComponent } from './show-favourite/show-favourite.component';
import { ShowquizService } from '../services/showquiz.service';
import { QuestionlogService } from '../services/questionlog.service';
import { ApicallService } from '../services/apicall.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    QuizeComponent,
    CategoryListComponent,
    ResultComponent,
    QuizcardComponent,
    ShowFavouriteComponent,
    FormatTimePipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    QuizeComponent,
    CategoryListComponent,
    QuizcardComponent,
  ],
  providers: [
    FavouriteService,
    ShowquizService,
    QuestionlogService,
    ApicallService,
    FavouriteService
  ]
})

export class UserModule { }
