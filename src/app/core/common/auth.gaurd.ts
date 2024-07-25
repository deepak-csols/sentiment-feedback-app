import { HttpClient } from "@angular/common/http";
import { ActivatedRouteSnapshot, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";

export const AuthGuard : CanActivateFn = (route, state) => { 


    let userId = localStorage.getItem('userId');
    let accessToken = localStorage.getItem('accessToken');

    if(userId && accessToken){
        return true;
    }
    else{
        return false;
    }

}





// import { Injectable } from '@angular/core';
// import { CanActivate, Router } from '@angular/router';
// import { HttpClient, HttpParams } from '@angular/common/http';
// import { Observable, of } from 'rxjs';
// import { catchError, map } from 'rxjs/operators';
// import { AuthService } from '../service/auth/auth.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {

//   constructor(private http: HttpClient, private router: Router, private authService: AuthService) {}

//   canActivate(): Observable<boolean> {

//     debugger
//     const userId = localStorage.getItem('userId');
//     const accessToken = localStorage.getItem('accessToken');

//     if (userId && accessToken) {

//         this.authService.validUser(userId, accessToken).subscribe(
//             response => {
//                 console.log("Successfully invoke this method")
//                 return of(true);
//             }
//         )
        
//     }
//     return of(false);
//   }
// }



