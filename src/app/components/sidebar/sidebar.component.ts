import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [

    { title: 'DASHBOARD', path: '/folder/DASHBOARD', icon: 'assets/svgs/icon-1.svg', class: '' },
    { title: 'POS (POINT OF SALE)', path: '/folder/POS (POINT OF SALE)', icon: 'assets/svgs/icon-2.svg', class: '' },
    { title: 'USERS', path: '/users-list', icon: 'assets/svgs/icon-3.svg', class: '' },
    { title: 'CODE ENGINE (DISCOUNT)', path: '/folder/CODE ENGINE (DISCOUNT)', icon: 'assets/svgs/icon-5.svg', class: '' },
    { title: 'SUB STORES', path: '/folder/SUB STORES', icon: 'assets/svgs/icon-6.svg', class: '' },
    { title: 'PURCHASE MODULE', path: '/add-category', icon: 'assets/svgs/icon-7.svg', class: '' },
    { title: 'GENERATE BAR2', path: '/folder/GENERATE BAR2', icon: 'assets/svgs/icon-8.svg', class: '' },
    { title: 'SALES MODULE', path: '/folder/SALES MODULE', icon: 'assets/svgs/icon-9.svg', class: '' },
    { title: 'ACCOUNTS', path: '/folder/ACCOUNTS', icon: 'assets/svgs/icon-10.svg', class: '' },
    { title: 'STOCK TRANSFER', path: '/folder/STOCK TRANSFER', icon: 'assets/svgs/icon-11.svg', class: '' },
    { title: 'CASH BOOK (IN / OUT)', path: '/folder/CASH BOOK (IN / OUT)', icon: 'assets/svgs/icon-12.svg', class: '' },
    { title: 'INVENTORY (PRODUCTS)', path: '/folder/INVENTORY (PRODUCTS)', icon: 'assets/svgs/icon-13.svg', class: '' },
    { title: 'REPORTS', path: '/folder/REPORTS', icon: 'assets/svgs/icon-14.svg', class: '' },
    { title: 'STORE LOCATOR', path: '/folder/STORE LOCATOR', icon: 'assets/svgs/icon-15.svg', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
