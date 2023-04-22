import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.scss']
})
export class AddVendorComponent implements OnInit {
  heading = "ADD VENDOR"
  constructor() { }
  fname : String = '';
  personname : String = '';
  gstin : String = '';
  contactno : String ='';
  email: String = '';
  address:String = '';
  ngOnInit(): void {
  }
  cancel(){
  }

  addupdate(){
  }

}
