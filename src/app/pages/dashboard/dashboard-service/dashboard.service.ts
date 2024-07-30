import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ReviewModel } from '../dashboard-model/review.model';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private GET_ALL_REVIEWS = "http://localhost:8089/api/v1/review/all-reviews";

  constructor(private http: HttpClient) { }

  protected handleError(errorResponse: HttpErrorResponse): Observable<never> {
    console.error('HTTP Error:', errorResponse);
    return throwError(() => errorResponse);
  }


  readAll(valid: any, businessId: String) : Observable<Array<ReviewModel>> {

    const userId = valid.userId;
    const accessToken = valid.accessToken;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + accessToken,
    });


    const params = new HttpParams().set('userId', userId);

      return this.http
      .get<Array<ReviewModel>>(this.GET_ALL_REVIEWS, {headers, params})
      .pipe(catchError((errorResponse) => this.handleError(errorResponse)));
  }

  
}
