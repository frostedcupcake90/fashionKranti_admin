import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  heading = 'ADD PRODUCT'
  description = '';
  productName = '';
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
    }else if(num == 2){
      this.selectedCategoryTwo = selectedCategory;
    }

  }

}
