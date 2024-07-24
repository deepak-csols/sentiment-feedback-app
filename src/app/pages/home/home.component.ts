import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../core/service/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  
  @ViewChild('pricingSection') pricingSection!: ElementRef;

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService) { } 

  userId: string|null = "";
  accessToken: string|null = "";

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      
      if (params['userId'] && params['accessToken']) {

        //need to check the userId is valid or not

        this.authService.validUser(params['userId'], params['accessToken']).subscribe(
          response => {

            if(response == true){
              console.log('Login successfull', response);
              localStorage.setItem("userId", response.userId);
              localStorage.setItem("accessToken", response.accessToken);
              this.router.navigate(['/home'])
            }

            
          },
          error => {
            console.log('Login failed', error);
          }
        );


        localStorage.setItem("userId", params['userId']);
        localStorage.setItem("accessToken", params['accessToken']);
      }
      console.log('accessToken:', this.accessToken);
      console.log('userId:', this.userId);
    })


    this.userId = localStorage.getItem("userId");
    this.accessToken = localStorage.getItem("accessToken");

    console.log('accessToken:', this.accessToken);
    console.log('userId:', this.userId);

  }

  scrollToPricing(event: Event) {
    event.preventDefault(); // Prevent the default link click behavior
    this.pricingSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  openLogin(){
    this.router.navigate(['/login'])
  }

  logout(){
    localStorage.removeItem('userId');
    localStorage.removeItem('accessToken');
    this.router.navigate(['/home']).then(() => {
      window.location.reload();
    });
  }

}
