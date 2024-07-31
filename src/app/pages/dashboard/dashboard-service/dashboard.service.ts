import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ReviewModel } from '../dashboard-model/review.model';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';
import { ApiResponse } from '../dashboard-model/apiResponse.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private GET_ALL_REVIEWS = environment.host+"api/v1/review/all-reviews";
  
  private REPLY_TO_A_REVIEW = environment.host+"api/v1/review/reply-review";

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


  replyReview(valid: any, reviewId: string, actualResponse: string): Observable<ApiResponse>{

    debugger
    const userId = valid.userId;
    const accessToken = valid.accessToken;

    const re = reviewId;
    const res = actualResponse

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + accessToken,
    });


    const params = new HttpParams().set('reviewId', reviewId).set('actualResponse', actualResponse);

      return this.http
      .post<ApiResponse>(this.REPLY_TO_A_REVIEW, null, {headers, params})
      .pipe(catchError((errorResponse) => this.handleError(errorResponse)));

  }

  
}
