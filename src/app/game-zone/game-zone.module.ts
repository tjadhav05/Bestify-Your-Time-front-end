import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameListComponent } from './game-list/game-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SnakeGameComponent } from './snake-game/snake-game.component';
import { BestScoreManager } from '../services/app.storage.service';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    GameListComponent,
    SnakeGameComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [
    GameListComponent,
    SnakeGameComponent
  ],
  bootstrap: [

  ],
  providers: [BestScoreManager]
})
export class GameZoneModule { }
