import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ReviewModel } from '../dashboard-model/review.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private http: HttpClient) { }

  protected handleError(errorResponse: HttpErrorResponse): Observable<never> {
    console.error('HTTP Error:', errorResponse);
    return throwError(() => errorResponse);
  }


  readAll(businessId: String) : Observable<Array<ReviewModel>> {
      return this.http
      .get<Array<ReviewModel>>(""+businessId)
      .pipe(catchError((errorResponse) => this.handleError(errorResponse)));
  }

  
}
