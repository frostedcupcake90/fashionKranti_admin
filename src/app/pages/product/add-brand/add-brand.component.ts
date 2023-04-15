import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.scss']
})
export class AddBrandComponent implements OnInit {
  heading = 'BRAND'
  description = '';
  brandName = '';
  imageData;
  constructor() { }

  ngOnInit(): void {
  }

  onFileSelected(event) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.imageData = reader.result;
       reader.readAsDataURL(file);
  }
   }

   addOrUpdate(){

   }

}
