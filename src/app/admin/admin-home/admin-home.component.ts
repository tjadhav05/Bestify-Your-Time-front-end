import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ShowquizService } from 'src/app/services/showquiz.service';
import { QuizeditService } from 'src/app/services/quizedit.service';
import { Router } from '@angular/router';
import { QuestionlogService } from 'src/app/services/questionlog.service';
import { iQuestionbank } from 'src/app/models/questionbank';
import { NavbarService } from 'src/app/services/navbar.service';
import { FooterService } from 'src/app/services/footer.service';
import { LogoutService } from 'src/app/services/logout.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  constructor(public nav: NavbarService, public footer: FooterService, public log: LogoutService, private toaster: ToastrService) { }
  ngOnInit() {
    this.nav.hide();
    this.footer.hide();
    this.toaster.success("Welcome Admin ", '', {
      timeOut: 2000
    })
  }

}
