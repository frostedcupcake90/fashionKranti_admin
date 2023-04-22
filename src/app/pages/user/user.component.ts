import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from 'src/app/service/rest-api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public userList;
  public focus;
  loading = true;
  searchText = ''
  constructor(public restApi:RestApiService, private router:Router) { 
    
  }

  ngOnInit(): void {

  setTimeout(() => {
    this.restApi.fetchUserList().subscribe((data) => {
      console.log('fetchuserlist -- ',data)
     if(data["Status"] == "00"){
      this.loading = false
this.userList = data['userDetails'];
     }
    });
  }, 1000);
    

    
  }
  

  viewDetails(user): void{
    this.router.navigate(["/view-user-details", {email : user.user_email}]);
  }


}
