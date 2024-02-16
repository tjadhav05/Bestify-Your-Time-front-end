import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IUser } from 'src/app/models/IUser';
import { AuthService } from 'src/app/services/auth.service';
import { FooterService } from 'src/app/services/footer.service';
import { NavbarService } from 'src/app/services/navbar.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  userForm: FormGroup;

  submitted = false;

  user: IUser;

  constructor(
    private router: Router,
    private authservice: AuthService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    public nav: NavbarService,
    public footer: FooterService) {

    this.user = this.createBlankUser()
    this.userForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      email: ['', [Validators.required, this.authservice.emailValidator()]],
      phone: ['', [this.authservice.phoneValidator()]],
      password: ['', [Validators.required, this.authservice.passwordValidator()]],
      // confirmPassword: ['',[Validators.required,this.authservice.confirmPasswordValidator()]],


    })
    // ,Validators.pattern('^(\+\d{1,3}[- ]?)?\d{10}$')
  }
  ngOnInit(): void {
    this.nav.show();
    this.footer.hide();

  }

  get f() { return this.userForm.controls; }





  onSignup() {

    this.submitted = true;
    if (this.userForm.invalid) {
      console.log("in sign up invadli ")
      return;
    } else {

      this.user = {
        Name: this.userForm.get('firstname')?.value + " " + this.userForm.get('lastname')?.value,
        Email: this.userForm.get('email')?.value,
        Phone: this.userForm.get('phone')?.value,
        Password: this.userForm.get('password')?.value
      }
      this.authservice
        .signup(this.user)
        .subscribe((Response: any) => {
          console.log(Response)

          if (Response != null) {
            this.toastr.success("succesful signup ", '', {
              timeOut: 1000
            })
            this.router.navigate(['/auth/Login'])
          } else {
            this.toastr.success("signup unsuccesful")
            this.router.navigate(['/auth/Register'])
          }
        }, error => {
          this.toastr.success("Already Register!", '', {
            timeOut: 1000
          })
          this.router.navigate(['/auth/Login'])
        })
    }

  };

  createBlankUser = () => {
    return { Name: "", Email: "", Password: "", Phone: 0 };
  };



}

