import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-category-three',
  templateUrl: './add-category-three.component.html',
  styleUrls: ['./add-category-three.component.scss']
})
export class AddCategoryThreeComponent implements OnInit {

  heading = 'PRODUCT CATEGORY 3'
  description = '';
  categoryName = '';
  imageData;
  public categoryOne = ["Shirts", "T-Shirts", "Pants"];
  public selectedCategoryOne: string = "Shirts";
  public categoryTwo = ["Causal", "Formal", "Partywear"];
  public selectedCategoryTwo: string = "Causal";
  categoryNumber = 1;
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

   selectCategory(selectedCategory, num) {
  
    if(num == 1){
      this.selectedCategoryOne = selectedCategory;
    }else{
      this.selectedCategoryTwo = selectedCategory;
    }

  }

}
