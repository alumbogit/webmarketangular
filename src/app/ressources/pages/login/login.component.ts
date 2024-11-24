import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  login=true;
  route =inject(Router)

  changeAction(){
    if(this.login){
      this.login=!this.login
    }else{
      this.login=!this.login
    }
  }
  saveUserLogin(event :Event){
    event.preventDefault()
    localStorage.setItem("login","true")
    this.route.navigate([""])
  }

}
