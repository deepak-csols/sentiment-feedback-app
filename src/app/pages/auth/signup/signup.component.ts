import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/service/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  username: string = "";
  password: string = "";

  constructor(private router: Router, private authService: AuthService) { }

  openLogin(){
    this.router.navigate(['/auth/login']);
  }

  onSignup(){
    console.log(this.username);
    console.log(this.password);

    this.authService.signup(this.username, this.password).subscribe(
      response => {

        if(response.error == 'false'){
          console.log('Register successfull', response);
          this.router.navigate(['/login'])
        }
        
      },
      error => {
        console.log('Register failed', error);
      }
    );
  }

}
