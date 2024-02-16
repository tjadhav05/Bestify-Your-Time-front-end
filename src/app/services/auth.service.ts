import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  url = "http://localhost:8080/api/user"

  constructor(private router: Router, private httpclient: HttpClient, private toastr: ToastrService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (sessionStorage['username']) {
      console.log("can activate success")

      return true;
    } else {

      console.log("can activate fails")
      this.toastr.warning('Login First')
      this.router.navigate(["/auth/Login"])
      return false;
      
    }
  }



  login(email: string, password: string) {
    const body = {
      email: email,
      password: password
    }


    return this.httpclient.post(this.url + "/login", body)
  }

  signup(obj: any) {


    const body = {
      username: obj.Name,
      phone: obj.Phone,
      email: obj.Email,
      password: obj.Password,

    }


    return this.httpclient.post(this.url + "/register", body)
  }

  forgotPassword(email:string){
    const body={
      email : email
    }
    return this.httpclient.post(this.url + "/forgotPassword/otp",body)
  }

  resetPassword(email:string,newPassword:string){
    const body={
      email:email,
      password:newPassword
    }
    return this.httpclient.post(this.url + "/forgotPassword/reset",body)
  }


  emailValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        let abc: any = null
        return abc;
      }
      const regex = new RegExp('^[a-z0-9+_.-]+@(.+)$');
      const valid = regex.test(control.value);
      let abc: any = null
      return valid ? abc : { invalidPassword: true };
    };
  }

  passwordValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        let abc: any = null
        return abc;
      }
      const regex = new RegExp('((?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_-])(?=.*[A-Z])(?=\\S+$).{8,16})');
      const valid = regex.test(control.value);
      let abc: any = null
      return valid ? abc : { invalidPassword: true };
    };
  }


  confirmPasswordValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        let abc: any = null
        return abc;
      }
      const regex = new RegExp('((?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_-])(?=.*[A-Z])(?=\\S+$).{8,16})');
      const valid = regex.test(control.value);
      let abc: any = null
      return valid ? abc : { invalidPassword: true };
    };

  }

  phoneValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        let abc: any = null
        return abc;
      }
      const regex = new RegExp('^((\\+91-?)|0)?[0-9]{10}$');
      // /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
      const valid = regex.test(control.value);
      let abc: any = null
      return valid ? abc : { invalidPassword: true };
    };
  }

}
