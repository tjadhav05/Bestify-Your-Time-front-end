import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexpageComponent } from './index/indexpage/indexpage.component';
import { CategoryListComponent } from './user/category-list/category-list.component';
import { ResultComponent } from './user/result/result.component';
import { CreateQuizComponent } from './admin/create-quiz/create-quiz.component';
import { EditquizComponent } from './admin/editquiz/editquiz.component';
import { TopScoreComponent } from './admin/top-score/top-score.component';
import { TopscorerListComponent } from './admin/topscorer-list/topscorer-list.component';
import { UsersListComponent } from './admin/users-list/users-list.component';
import { PageNotFoundComponent } from './util/page-not-found/page-not-found.component';
import { QuizcardComponent } from './user/quizcard/quizcard.component';
import { GameListComponent } from './game-zone/game-list/game-list.component';
import { QuizeComponent } from './user/quize/quize.component';
import { ContactusComponent } from './index/contactus/contactus.component';
import { AddQuestionsComponent } from './admin/add-questions/add-questions.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { SnakeGameComponent } from './game-zone/snake-game/snake-game.component';
import { UpdateQuestionComponent } from './admin/update-question/update-question.component';
import { ShowFavouriteComponent } from './user/show-favourite/show-favourite.component';
import { AuthGuard } from './auth.guard';
import { QuizListComponent } from './admin/quiz-list/quiz-list.component';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  {path:'',redirectTo:'Home',pathMatch:'full'},//default route is
  {path: 'Home',component: IndexpageComponent},
  {path: 'AdminHome',component:AdminHomeComponent,
  children:[
    { path: '',redirectTo: 'QuizList',pathMatch: 'full'},
    {path: 'TopScore',component: TopScoreComponent},
    {path: 'CreateQuiz',component: CreateQuizComponent},
    {path: 'AddQuestion',component: AddQuestionsComponent},
    {path: 'QuizList',component:QuizListComponent},
    {path: 'UserList',component: UsersListComponent},
    {path: 'TopScorerList',component: TopscorerListComponent},
    {path: 'UpdateQuestion',component: UpdateQuestionComponent},
    {path: 'EditQuiz',component: EditquizComponent}
  ],canActivate:[AuthService]},
  {path: 'QuizCards',component:QuizcardComponent,canActivate:[AuthService]},
  {path: 'GameZone',component:GameListComponent,canActivate:[AuthService]},
  {path: 'Snake',component:SnakeGameComponent,canActivate:[AuthService]},
  {path: 'Questions', component:QuizeComponent,canActivate:[AuthService]},
  {path: 'AddQuestion',component: AddQuestionsComponent,canActivate:[AuthService]},
  {path: 'ShowFav',component: ShowFavouriteComponent,canActivate:[AuthService]},
  {path: 'Quizs', component: CategoryListComponent,canActivate:[AuthService]},
  {path: 'Result', component: ResultComponent,canActivate:[AuthService]},
  {path: 'ContactUs',component:ContactusComponent},
  {path:'auth' ,loadChildren: ()=>import('./auth/auth.module').then(m=>m.AuthModule)},
  {path: '**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// routerLinkActive="active" class="nav-link " routerLink="/home"
