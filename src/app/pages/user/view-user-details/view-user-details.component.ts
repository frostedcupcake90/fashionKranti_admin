import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RestApiService } from 'src/app/service/rest-api.service';

@Component({
  selector: 'app-view-user-details',
  templateUrl: './view-user-details.component.html',
  styleUrls: ['./view-user-details.component.scss']
})
export class ViewUserDetailsComponent implements OnInit {
  userDetails:  any;
  userEmail:any;
  constructor(private restApi: RestApiService, private route: ActivatedRoute) { 
    this.userEmail =   this.route.snapshot.paramMap.get('email')
    console.log(this.userEmail)
    setTimeout(() => {
      this.restApi.fetchUserDetails(this.userEmail).subscribe((data) => {
        console.log('fetchuserDetails -- ',data)
        this.userDetails=data['userDetails'][0]
      });
    }, 300);
  }

  ngOnInit(): void {

  }

}
