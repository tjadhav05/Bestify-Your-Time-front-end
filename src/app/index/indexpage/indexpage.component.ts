import { Component, OnInit } from '@angular/core';
import { FooterService } from 'src/app/services/footer.service';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'indexpage',
  templateUrl: './indexpage.component.html',
  styleUrls: ['./indexpage.component.scss']
})
export class IndexpageComponent implements OnInit {

  constructor(public nav: NavbarService,
    public footer: FooterService) { }

  ngOnInit(): void {
    this.nav.show();
    this.footer.show();
  }

}
