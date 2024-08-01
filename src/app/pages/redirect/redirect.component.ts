import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../core/service/auth/auth.service';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrl: './redirect.component.css'
})
export class RedirectComponent implements OnInit{

  userId: string|null = "";
  accessToken: string|null = "";
  loader: boolean = false;

  ngOnInit(): void {


    this.loader = true;
    this.route.queryParams.subscribe(params => {

      // this.userId = params['userId'];
      // this.accessToken = params['accessToken'];

      localStorage.setItem("userId", params['userId']);
      localStorage.setItem("accessToken", params['accessToken']);


      this.router.navigate(['/app/dashboard'])
      // console.log('accessToken:', this.accessToken);
      // console.log('userId:', this.userId);
      this.loader = false;
    })


    // this.userId = localStorage.getItem("userId");
    // this.accessToken = localStorage.getItem("accessToken");

    // console.log('accessToken:', this.accessToken);
    // console.log('userId:', this.userId);






    // if(this.userId !== null && this.accessToken !== null){

    //     // this.router.navigate(['/app/dashboard'])

    //     // need to check the userId is valid or not

    //     this.authService.validUser(this.userId, this.accessToken).subscribe(
    //       response => {

    //         if(response == true){
    //           console.log('Login successfull', response);
    //           localStorage.setItem("userId", response.userId);
    //           localStorage.setItem("accessToken", response.accessToken);
    //           this.router.navigate(['/app/dashboard'])
    //         }

            
    //       },
    //       error => {
    //         console.log('Login failed', error);
    //       }
    //     );


        


    // }






    
  }

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService){ }

}
