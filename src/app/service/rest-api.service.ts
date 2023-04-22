
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  // Define API
  apiURL = 'http://www.fashionkranti.in/fashionkranti/dev';
  constructor(public http: HttpClient) {
  }

  login(obj: any) {
    return this.http.post(this.apiURL + '/uservalidate/Login.php', obj).pipe(
        catchError(this.handleError) // then handle the error
      );
  }




  fetchUserList() {
    let sessionId = localStorage.getItem('sessionId')
    return this.http.post(this.apiURL + '/user/fetchuserlist.php?sessionId='+sessionId,{},this.httpOptions).pipe(
        catchError(this.handleError) // then handle the error
      );
  }

  fetchUserDetails(email) {
    let obj = {
      'user_email' : email
    }
    let sessionId = localStorage.getItem('sessionId')
    return this.http.post(this.apiURL + '/user/fetchuserdetail.php?sessionId='+sessionId, obj,this.httpOptions).pipe(
        catchError(this.handleError) // then handle the error
      );
  }

  

  addUser(obj: any) {
    let sessionId = localStorage.getItem('sessionId')
    return this.http.post(this.apiURL + '/user/adduser.php?sessionId='+sessionId, obj).pipe(
        catchError(this.handleError) // then handle the error
      );
  }
 
  
  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => {
      return errorMessage;
    });
  }

}