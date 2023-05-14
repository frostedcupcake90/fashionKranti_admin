import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-bill-list',
  templateUrl: './purchase-bill-list.component.html',
  styleUrls: ['./purchase-bill-list.component.scss']
})
export class PurchaseBillListComponent implements OnInit {
  public userList = [
    { name: 'US POLO', userName: 'Shirts/Casual' ,email:'1299.00' ,role:'899.00'},
    { name: 'H & M', userName: 'Pant/Formal' ,email:'899.00' ,role:'599.00'},
    { name: 'US POLO', userName: 'Shirts/Casual' ,email:'1299.00' ,role:'899.00'},
    { name: 'H & M', userName: 'Pant/Formal' ,email:'899.00' ,role:'599.00'},
    { name: 'US POLO', userName: 'Shirts/Casual' ,email:'1299.00' ,role:'899.00'},
    { name: 'H & M', userName: 'Pant/Formal' ,email:'899.00' ,role:'599.00'},
    { name: 'US POLO', userName: 'Shirts/Casual' ,email:'1299.00' ,role:'899.00'},
    { name: 'H & M', userName: 'Pant/Formal' ,email:'899.00' ,role:'599.00'},
 
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
