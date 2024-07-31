import { Component } from '@angular/core';
import { AuthService } from '../../../core/service/auth/auth.service';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment.development';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = "";
  password: string = "";


  constructor(private authService: AuthService, private router: Router) {}

  openSignup(){
    this.router.navigate(['/auth/signup']);
  }

  onLogin(): void {
    
    console.log(this.username);
    console.log(this.password);

    this.authService.login(this.username, this.password).subscribe(
      response => {
        console.log('Login successfull', response);
        localStorage.setItem("userId", response.userId);
        localStorage.setItem("accessToken", response.accessToken);
        this.router.navigate(['app/dashboard'])
      },
      error => {
        console.log('Login failed', error);
      }
    );

  }

  onGoogleLogin(): void{

    // this.authService.googleLogin().subscribe(
    //   response => {
    //     console.log('Login successfull', response);
    //     localStorage.setItem("userId", response.userId);
    //     localStorage.setItem("accessToken", response.accessToken);
    //     this.router.navigate(['/home'])
    //   }
    // )

    window.location.href = environment.host+'oauth2/authorization/google'



  }

}
