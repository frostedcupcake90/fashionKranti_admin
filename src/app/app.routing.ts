import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { UserComponent } from './pages/user/user.component';
import { VendorComponent } from './pages/vendor/vendor.component';

import { ViewUserDetailsComponent } from './pages/user/view-user-details/view-user-details.component';
import { AddUserComponent } from './pages/user/add-user/add-user.component';
import { AddVendorComponent } from './pages/vendor/add-vendor/add-vendor.component';

const routes: Routes =[
  // {
  //   path: '',
  //   redirectTo: 'dashboard',
  //   pathMatch: 'full',
  // },
   {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
      }
    ]
  }, {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layouts/auth-layout/auth-layout.module').then(m => m.AuthLayoutModule)
      }
    ]
  }, 
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'vendor',
    component: VendorComponent
  },
  {
    path: 'add-vendor',
    component: AddVendorComponent
  },
  {
    path: 'add-user',
    component: AddUserComponent
  },{
    path: 'view-user-details',
    component: ViewUserDetailsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
