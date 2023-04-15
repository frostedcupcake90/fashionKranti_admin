import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public userList = [
    { name: 'Dr. Nice', userName: 'nice' ,email:'nice@gmail.com' ,role:'Admin'},
    { name: 'Bombasto', userName: 'bombasto' ,email:'bombasto@gmail.com' ,role:'Admin'},
    { name: 'Celeritas', userName: 'celeritas' ,email:'celeritas@gmail.com' ,role:'Admin'},
    { name: 'Magneta', userName: 'nice' ,email:'mageta@gmail.com' ,role:'Admin'},
    { name: 'RubberMan', userName: 'nice' ,email:'rubberman@gmail.com' ,role:'Admin'},
    { name: 'Dynama', userName: 'nice' ,email:'dynama@gmail.com' ,role:'Admin'},
    { name: 'Dr. IQ', userName: 'iq' ,email:'iq@gmail.com' ,role:'Admin'},
    { name: 'Dr. Tornado', userName: 'tornado' ,email:'tornado@gmail.com' ,role:'Admin'},
 
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
