import { Component, OnInit } from '@angular/core';
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
  constructor(public restApi:RestApiService) { 
    
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
  

  viewDetails(): void{
    
  }

  // searchFunc(event){
  //   alert(event.target.value)
  //   this.userList.filter((x, i) => {
  //     if (event.target.value === x.user_name) {
  //       this.userList.push(x)
  //       console.log(this.userList)
  //     }
  //   })
  // }
}
