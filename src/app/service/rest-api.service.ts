
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {
  
  // Define API
  apiURL = ' http://www.fashionkranti.in/fashionkranti';
  constructor(public http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  login(obj: any) {
    return this.http.post(this.apiURL + '/uservalidate/Login.php', obj).pipe(
        catchError(this.handleError) // then handle the error
      );
  }


  fetchUserList() {
    return this.http.post(this.apiURL + '/dev/fetchuserlist.php',{}).pipe(
        catchError(this.handleError) // then handle the error
      );
  }

  fetchUserDetails() {
    let obj = {
      'user_email' : 'saurabh1@gmail.com'
    }
    return this.http.post(this.apiURL + '/dev/fetchuserdetail.php', obj).pipe(
        catchError(this.handleError) // then handle the error
      );
  }

  

  addUser(obj: any) {
    return this.http.post(this.apiURL + '/dev/adduser.php', obj).pipe(
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
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }

}