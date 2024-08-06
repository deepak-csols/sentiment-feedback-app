import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { ApiResponse } from '../dashboard/dashboard-model/apiResponse.model';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private GET_ALL_CONFIGURATION = environment.host+"api/v1/settings/get-all-configuration";
  private ADD_SMTP_CONFIG = environment.host+"api/v1/email/save-config";
  private TEST_SMTP_CONFIG = environment.host+"api/v1/email/test-email";

  constructor(private http: HttpClient) { }

  getAllConfiguration(valid: any){

    const userId = valid.userId;
    const accessToken = valid.accessToken;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + accessToken,
    });


    const params = new HttpParams().set('userId', userId);

    return this.http.get<any>(this.GET_ALL_CONFIGURATION, {headers, params});

  }

  addSmtpConfiguration(valid:any, data:any){

    const userId = valid.userId;
    const accessToken = valid.accessToken;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + accessToken,
    });

    console.log(data);

    const params = new HttpParams().set('userId', userId);

    return this.http.post<any>(this.ADD_SMTP_CONFIG, data, {headers, params});

  }

  testSmtpConfiguration(valid:any): Observable<ApiResponse>{

    const userId = valid.userId;
    const accessToken = valid.accessToken;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + accessToken,
    });

    const params = new HttpParams().set('userId', userId);

    return this.http.post<ApiResponse>(this.TEST_SMTP_CONFIG, null, {headers, params});

  }


}
