import { Injectable } from '@angular/core';

@Injectable()
export class LogoutService {

    show:boolean;

    constructor(){
        this.show=true;
    }

    isLogin(){
        const username = JSON.stringify(sessionStorage.getItem('username'));
        console.log(username);
        if(username === null){
          console.log(username);
          this.show = false;
        }
        else{
          this.show = true;
        }  
    }
    Logout(){
        sessionStorage.clear();
        this.show=true;
        window.location.reload();
    }
}