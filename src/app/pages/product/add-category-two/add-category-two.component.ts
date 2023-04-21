import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-category-two',
  templateUrl: './add-category-two.component.html',
  styleUrls: ['./add-category-two.component.scss']
})
export class AddCategoryTwoComponent implements OnInit {

  heading = 'PRODUCT CATEGORY 2'
  description = '';
  categoryName = '';
  imageData;
  public categoryOne = ["Shirts", "T-Shirts", "Pants"];
  public selectedCategoryOne: string = "Shirts";
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

   selectCategory(selectedCategory) {
      this.selectedCategoryOne = selectedCategory;
  }

}
