import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { UserComponent } from './pages/user/user.component';
import { AddUserComponent } from './pages/user/add-user/add-user.component';
import { ViewUserDetailsComponent } from './pages/user/view-user-details/view-user-details.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { ProductComponent } from './pages/product/product.component';
import { AddProductComponent } from './pages/product/add-product/add-product.component';
import { AddCategoryComponent } from './pages/product/add-category/add-category.component';
import { AddBrandComponent } from './pages/product/add-brand/add-brand.component';
import { CategoryListComponent } from './pages/product/category-list/category-list.component';
import { AddCategoryThreeComponent } from './pages/product/add-category-three/add-category-three.component';
import { AddCategoryTwoComponent } from './pages/product/add-category-two/add-category-two.component';
import { VendorComponent } from './pages/vendor/vendor.component';
import { AddVendorComponent } from './pages/vendor/add-vendor/add-vendor.component';
import { ViewVendorDetailComponent } from './pages/vendor/view-vendor-detail/view-vendor-detail.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    UserComponent,
    AddUserComponent,
    ViewUserDetailsComponent,
    ProductComponent,
    AddProductComponent,
    AddCategoryComponent,
    AddBrandComponent,
    CategoryListComponent,
    AddCategoryTwoComponent,
    AddCategoryThreeComponent,
    VendorComponent,
    AddVendorComponent,
    ViewVendorDetailComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { 
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far)
  }
}
