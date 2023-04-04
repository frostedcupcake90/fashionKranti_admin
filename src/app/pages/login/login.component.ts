import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RestApiService } from 'src/app/service/rest-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(public restApi:RestApiService) {} 
email: String = '';
password:String = '';
  ngOnInit() {
  }
  ngOnDestroy() {
  }

  submit(){
    let params = {
      uname: this.email,
      password: this.password,
    }
     this.restApi.login(params).subscribe((data: {}) => {
      alert(JSON.stringify(data))
      //this.router.navigate(['/employees-list']);
    });
  }
}
