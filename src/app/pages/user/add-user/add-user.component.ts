import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/service/rest-api.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  imageData;
  fileBlob: any;
  userImg:any;
  userAadharImg:any;
  constructor(public restApi:RestApiService) { }

  ngOnInit(): void {
  }

  addUser(){
    let params = {
'user_name' : 'Darshana',
  'user_email' : 'darshana@gmail.com',
    'user_mobile' : '9090989898',
      'user_address' : 'Thane',
  'user_salary' : '25000',
      'user_joiningdate' : '2022-01-10',
      'user_holiday' : '6',
      'user_description' : 'Temp user',
  'user_photo' :this.userImg,
    'user_aadhar' : 'temp',
    }
    this.restApi.addUser(params).subscribe((data) => {
      console.log('fetchuserlist -- ',data)
     if(data["Status"] == "00"){
      
     }
    });
  }

uploadFile(event, type) {
    if (event.target.value) {
        const file = event.target.files[0];
        const type = file.type;
        this.userImg = new FormData();
        this.userImg.append('file', file, file.name);
             console.log(this.userImg)
    } else alert('Nothing')
}

}
