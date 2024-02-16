import { Component, OnInit } from '@angular/core';
import { FooterService } from 'src/app/services/footer.service';
import { NavbarService } from 'src/app/services/navbar.service';
import { TopscorerService } from 'src/app/services/topscorer.service';

@Component({
  selector: 'app-topscorer-list',
  templateUrl: './topscorer-list.component.html',
  styleUrls: ['./topscorer-list.component.scss']
})
export class TopscorerListComponent implements OnInit {



  topScoreList = [];

  constructor(private topScorerService: TopscorerService, public nav: NavbarService,
    public footer: FooterService) { }

  ngOnInit(): void {
    this.getTopScoreList();
    this.nav.hide();
    this.footer.hide();
  }

  getTopScoreList() {
    const request = this.topScorerService.getTopScoreQuiz();
    request.subscribe((response: any) => {
      if (response == null) {
        console.log(response['error'])
      }
      else {
        console.log(" response is here")
        console.log(response)
        this.topScoreList = response
      }
    })
  }
}


