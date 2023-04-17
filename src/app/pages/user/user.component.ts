import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/service/rest-api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public userList;
  constructor(public restApi:RestApiService) { 


  }

  ngOnInit(): void {
    this.restApi.fetchUserList().subscribe((data) => {
      console.log('fetchuserlist -- ',data)
     if(data["Status"] == "00"){
this.userList = data['userDetails'];
     }
    });

    this.restApi.fetchUserDetails().subscribe((data) => {
      console.log('fetchuserDetails -- ',data)
     if(data["Status"] == "00"){
     }
    });

    
  }

  viewDetails(): void{
    
  }
}
