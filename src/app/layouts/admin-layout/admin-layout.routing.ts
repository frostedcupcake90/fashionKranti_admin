import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { UserComponent } from 'src/app/pages/user/user.component';
import { AddUserComponent } from 'src/app/pages/user/add-user/add-user.component';
import { ViewUserDetailsComponent } from 'src/app/pages/user/view-user-details/view-user-details.component';
import { ProductComponent } from 'src/app/pages/product/product.component';
import { AddBrandComponent } from 'src/app/pages/product/add-brand/add-brand.component';
import { AddProductComponent } from 'src/app/pages/product/add-product/add-product.component';
import { AddCategoryComponent } from 'src/app/pages/product/add-category/add-category.component';
import { AddCategoryTwoComponent } from 'src/app/pages/product/add-category-two/add-category-two.component';
import { AddCategoryThreeComponent } from 'src/app/pages/product/add-category-three/add-category-three.component';
import { VendorComponent } from 'src/app/pages/vendor/vendor.component';
import { AddVendorComponent } from 'src/app/pages/vendor/add-vendor/add-vendor.component';
import { ViewVendorDetailComponent } from 'src/app/pages/vendor/view-vendor-detail/view-vendor-detail.component';
import { PurchaseMainComponent } from 'src/app/purchase/purchase-main/purchase-main.component';
import { PurchaseBillListComponent } from 'src/app/purchase/purchase-bill-list/purchase-bill-list.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'user', component: UserComponent },
    { path: 'product', component: ProductComponent },
    { path: 'add-user', component: AddUserComponent },
    { path: 'view-user-details', component: ViewUserDetailsComponent },
    { path: 'tables', component: TablesComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'maps', component: MapsComponent },
    { path: 'add-brand', component: AddBrandComponent },
    { path: 'add-product', component: AddProductComponent },
    { path: 'add-category', component: AddCategoryComponent },
    { path: 'add-category-two', component: AddCategoryTwoComponent },
    { path: 'add-category-three', component: AddCategoryThreeComponent },
    { path: 'add-vendor', component: AddVendorComponent },
    { path: 'vendor', component: VendorComponent },
    { path: 'view-vendor-detail', component: ViewVendorDetailComponent },
    { path: 'purchase-main', component: PurchaseMainComponent },
    { path: 'purchase-bill-list', component: PurchaseBillListComponent },

    


];
