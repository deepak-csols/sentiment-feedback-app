import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortalService {

  private COMPLETE_USER_PROFILE_URL = "http://localhost:8089/api/v1/user/complete-profile";
  private ADD_BUSINESS_DETAILS = "http://localhost:8089/api/v1/business/add-business";
  private GET_PRIFILE_DETAILS = "http://localhost:8089/api/v1/user/get-profile";
  private GET_ALL_REVIEWS = "http://localhost:8089/api/v1/review/all-reviews"
  private GET_BUSINESSES_DETAILS = "http://localhost:8089/api/v1/business/get-businesses";

  constructor(private http: HttpClient) { }


  getProfile(valid: any){

    const userId = valid.userId;
    const accessToken = valid.accessToken;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + accessToken,
    });

    const params = new HttpParams().set('userId', userId);

    return this.http.get<any>(this.GET_PRIFILE_DETAILS, {headers, params});
  }


  completeProfile(valid: any, data: any): Observable<any>{
  
    const userId = valid.userId;
    const accessToken = valid.accessToken;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + accessToken,
    });

    // const httpRequest = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     Authorization: 'Bearer ' + accessToken,
    //   }),
    // };

    const params = new HttpParams().set('userId', userId);

    // const url = this.COMPLETE_USER_PROFILE_URL + "?userId=" + userId;

    return this.http.post<any>(this.COMPLETE_USER_PROFILE_URL, data, {headers, params});

  }

  addBusiness(valid:any, data:any){

    const userId = valid.userId;
    const accessToken = valid.accessToken;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + accessToken,
    });

    console.log(data);

    const params = new HttpParams().set('userId', userId);

    return this.http.post<any>(this.ADD_BUSINESS_DETAILS, data, {headers, params});

  }

  getAllReviews(valid: any){

    const userId = valid.userId;
    const accessToken = valid.accessToken;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + accessToken,
    });


    const params = new HttpParams().set('userId', userId);

    return this.http.get<any>(this.GET_ALL_REVIEWS, {headers, params});    

  }

  getBusinesses(valid: any){

    const userId = valid.userId;
    const accessToken = valid.accessToken;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + accessToken,
    });

    const params = new HttpParams().set('userId', userId);

    return this.http.get<any>(this.GET_BUSINESSES_DETAILS, {headers, params});

  }

}
