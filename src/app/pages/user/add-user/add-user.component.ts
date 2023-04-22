import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from 'src/app/service/rest-api.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  
  name: String = '';
  salary: String = '';
  joining_date: String = '';
  mobile_number: String = '';
  email: String = '';
  address: String = '';
  allowed_holiday: String = '';
  notes:String = '';
  imageData;
  imageDataAdharCard;
  userImg:any;
  userAadharImg:any;
  constructor(public restApi:RestApiService, private router: Router) { }

  ngOnInit(): void {
  }

  addUser(){
    let params = {
'user_name' : this.name,
  'user_email' : this.email,
    'user_mobile' : this.mobile_number,
      'user_address' : this.address,
  'user_salary' : this.salary,
      'user_joiningdate' : this.joining_date,
      'user_holiday' : this.allowed_holiday,
      'user_description' : this.notes,
  'user_photo' :this.userImg,
    'user_aadhar' : 'temp',
    }
    setTimeout(() => {
      console.log('params -- ',params)
      this.restApi.addUser(params).subscribe((data) => {
        console.log('fetchuserlist -- ',data)
       if(data["Status"] == "00"){
        this.router.navigate(['/user']);

       }
      });
   
    }, 1000);
   
    
  }

  onFileSelected(event) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.imageData = reader.result;
       reader.readAsDataURL(file);
  }
   }

   onFileSelectedAdharCard(event) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.imageDataAdharCard = reader.result;
       reader.readAsDataURL(file);
  }
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
