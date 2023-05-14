import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.scss']
})
export class AddVendorComponent implements OnInit {
  heading = "ADD VENDOR"
  constructor(private router: Router, private location: Location) { }
  fname : String = '';
  personname : String = '';
  gstin : String = '';
  contactno : String ='';
  email: String = '';
  address:String = '';
  ngOnInit(): void {
  }
  cancel(){
    this.location.back()
  }

  addupdate(){
  }

}
