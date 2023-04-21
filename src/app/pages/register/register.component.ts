import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  banner = false;
  profileImg = false;
  text1 = "";
  text2 = "";
  text3 = "";
  text4 = "";
  ngOnInit(): void {
    setTimeout(() => {
      this.banner = true;
      this.profileImg = true;
      this.text1 = "Dr. John Doe";
      this.text2 = "Heart Surgoen at Some Hospital";
      this.text3 = "Phone - +1 1234567890 Email - john.doe@example.com";
      this.text4 =
        "lorem isopem oowieurl laksh oweir oha oasdhakjsdhiuwreyh uahi uasddhiaus";
    }, 3000);
  }

}
