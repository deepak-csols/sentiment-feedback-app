import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  private apiLoginUrl = environment.host+'api/v1/auth/login';
  private apiGoogleLoginUrl = environment.host+'oauth2/authorization/google';
  private apiSignup = environment.host+'api/v1/auth/register';
  private apiValidUser = environment.host+'api/v1/user/valid-user';

  constructor(private http: HttpClient) {  }


  login(username: string, password: string): Observable<any>{

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const url = new URL(this.apiLoginUrl);

    const body = JSON.stringify({ username, password });

    return this.http.post<any>(url.toString(), body, { headers });

  }

  googleLogin(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const url = new URL(this.apiGoogleLoginUrl);


    return this.http.post<any>(url.toString(), { headers });
  }

  signup(username: string, password: string): Observable<any>{

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const url = new URL(this.apiSignup);

    const body = JSON.stringify({ username, password });

    return this.http.post<any>(url.toString(), body, { headers });

  }


  validUser(userId: string, accessToken: string) {
    debugger
    const headers = new HttpHeaders({
      // 'Content-Type': 'application/json',
      Authorization: 'Bearer' + accessToken
    });

    // this.apiValidUser += "?userId=" + userId;
    const url = new URL(this.apiValidUser);

    const params = new HttpParams().set('userId', userId);

    // url.searchParams.append('userId', userId);

    // const body = JSON.stringify({ userId });

    return this.http.get<any>(url.toString(), { headers, params });

  }

}
