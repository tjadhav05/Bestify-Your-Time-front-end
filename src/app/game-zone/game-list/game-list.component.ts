import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  playMatchCards() {
    this.route.navigate(['/MatchCard'])
  }
  playSnake() {
    this.route.navigate(['/Snake'])
  }
}
