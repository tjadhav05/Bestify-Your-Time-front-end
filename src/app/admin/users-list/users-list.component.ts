import { Component, OnInit } from '@angular/core';
import { iUser } from 'src/app/models/user';
import { FooterService } from 'src/app/services/footer.service';
import { NavbarService } from 'src/app/services/navbar.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {


  users = [];

  userService: UserService;
  constructor(userService: UserService, public nav: NavbarService, public footer: FooterService) {
    this.userService = userService;

  }

  ngOnInit(): void {
    this.loadUsers();
    this.nav.hide();
    this.footer.hide();
  }

  loadUsers() {
    const request = this.userService.getUser();
    request.subscribe((response: any) => {
      if (response == null) {
        console.log(response['error'])

      }
      else {
        console.log(" response is here")
        console.log(response)
        this.users = response
      }
    })
  }


  onDeleteUser(userId: any) {
    console.log(userId);

    const request = this.userService.deleteUser(userId)
    request.subscribe((response: any) => {
      if (response == null) {
        console.log(response['error'])
      }
      else {
        console.log(response)
        this.loadUsers();
      }
    })
  }
}
