import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { FooterService } from 'src/app/services/footer.service';
import { LogoutService } from 'src/app/services/logout.service';
import { NavbarService } from 'src/app/services/navbar.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = ''
  password: string = ''
  fieldTextType: boolean = false;
  Otp: number = 0
  EmailOtp: string = '';
  BackendOtp: string = '';
  Remember: boolean = false

  constructor(
    private router: Router,
    private authservice: AuthService,
    private toastr: ToastrService,
    public nav: NavbarService,
    public footer: FooterService,
    public log: LogoutService
  ) { }

  ngOnInit(): void {
    //Hide Footer when login component is loaded  
    this.nav.show();
    this.footer.hide();
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  onLogin() {
    //If user email and password is empty throw error
    if ((this.email == "") && (this.password == "")) {
      this.toastr.error("Invalid Email or Password ", '', {
        timeOut: 1000
      })
    } else {
      //else call service 
      this.authservice
        .login(this.email, this.password).subscribe((Response: any) => {
          console.log(Response + "response object")
          const user = Response;
          if (user == null) {
            this.toastr.error("login failed", '', {
              timeOut: 1000
            })
          } else if (user['isAdmin']) {
            this.toastr.success("login successful", '', {
              timeOut: 1000
            })
            sessionStorage['username'] = this.email;
            sessionStorage['token'] = user['token'];
            this.router.navigate(['AdminHome'])
            console.log("is admin ")
            console.log(Response)
          } else {

            this.toastr.success("login successful", '', {
              timeOut: 1000
            })
            localStorage.setItem("email", this.email)
           // localStorage.setItem("password", this.password)
            sessionStorage['username'] = this.email;
            sessionStorage['token'] = user['token'];

            console.log(Response)
            //show logout button
            this.log.show = false;
            this.router.navigate(['Home'])
          }

        }, error => {

          this.toastr.error("Invalid Username or Password!!!", '', {
            timeOut: 1000
          })

        })
    }
  };

  reset() {

  };

  forgotPassword() {

    if (this.email == '')
      this.toastr.warning("Provide Email", '', {
        timeOut: 1000
      })
    else {

      if (this.EmailOtp == '') {

        // send opt to mail for reseting password 
        let element: HTMLElement = document.getElementById('forgot') as HTMLElement;
        element.click()

        this.authservice.forgotPassword(this.email).subscribe((Response: any) => {

          // console.log("forgot password response ----"+ Response)
          this.BackendOtp = Response['BackendOtp']

        })

      } else if ((this.EmailOtp == this.BackendOtp) && (this.password != '')) {
        this.authservice.resetPassword(this.email, this.password).subscribe((Response: any) => {

          console.log('Passwed Reset response ' + Response)
          if (Response) {
            this.toastr.success("Password Changed Successfully", '', {
              timeOut: 1000
            })
          }
          else {
            this.toastr.error("Failed To change Password", '', {
              timeOut: 1000
            })
          }


        })
        let closeforget: HTMLElement = document.getElementById('forgotclosemodal') as HTMLElement;
        closeforget.click()
      }
    }
  };


  OtpSubmit() {

    const body = {
      email: this.email,
    }
    console.log("backend otp" + this.BackendOtp)
    // confirm otp and then reset password 
    if (this.BackendOtp == this.EmailOtp) {
      // this.router.navigate(["/auth/Register"], { queryParams: body })
      let element: HTMLElement = document.getElementById('closeModal') as HTMLElement;
      element.click()
      let reset: HTMLElement = document.getElementById('reset') as HTMLElement;
      reset.click()

    }
    else
      this.toastr.warning('Invalid Otp ', '', {
        timeOut: 1000
      })

  }

}