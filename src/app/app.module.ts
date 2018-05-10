import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { SystemService } from './service/system.service';
import { UserService } from './service/user.service';
import { VendorService } from './service/vendor.service';
import { ProductService } from './service/product.service';
import { PurchaserequestService } from './service/purchase-request.service';
import { PurchaserequestlineitemService } from './service/purchaserequestlineitem.service';
//organize this later
import { AppComponent } from './app.component';
import { MenuComponent } from './core/menu/menu.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { UserLoginComponent } from './feature/user/user-login/user-login.component';
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';
import { VendorListComponent } from './feature/vendor/vendor-list/vendor-list.component';
import { VendorCreateComponent } from './feature/vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './feature/vendor/vendor-edit/vendor-edit.component';
import { VendorDetailComponent } from './feature/vendor/vendor-detail/vendor-detail.component';
import { ProductListComponent } from './feature/product/product-list/product-list.component';
import { ProductCreateComponent } from './feature/product/product-create/product-create.component';
import { ProductEditComponent } from './feature/product/product-edit/product-edit.component';
import { ProductDetailComponent } from './feature/product/product-detail/product-detail.component';
import { PurchaserequestListComponent } from './feature/purchaserequest/purchaserequest-list/purchaserequest-list.component';
import { PurchaserequestCreateComponent } from './feature/purchaserequest/purchaserequest-create/purchaserequest-create.component';
import { PurchaserequestDetailComponent } from './feature/purchaserequest/purchaserequest-detail/purchaserequest-detail.component';
import { PurchaserequestEditComponent } from './feature/purchaserequest/purchaserequest-edit/purchaserequest-edit.component';
import { PurchaserequestlineitemCreateComponent } from './feature/purchaserequestlineitem/purchaserequestlineitem-create/purchaserequestlineitem-create.component';
import { PurchaserequestlineitemDetailComponent } from './feature/purchaserequestlineitem/purchaserequestlineitem-detail/purchaserequestlineitem-detail.component';
import { PurchaserequestlineitemEditComponent } from './feature/purchaserequestlineitem/purchaserequestlineitem-edit/purchaserequestlineitem-edit.component';
import { SortPipe } from './pipe/sort.pipe';
import { PurchaserequestReviewComponent } from './feature/purchaserequest/purchaserequest-review/purchaserequest-review.component';
import { PurchaserequestApprovalComponent } from './feature/purchaserequest/purchaserequest-approval/purchaserequest-approval.component';

//organize these guys
@NgModule({
  declarations: [
    AppComponent,
 
	MenuComponent,
    HomeComponent,
    AboutComponent,
	  
	UserLoginComponent,
    UserListComponent,
	UserCreateComponent,
    UserEditComponent,
	UserDetailComponent,
	  
    VendorListComponent,
    VendorCreateComponent,
    VendorEditComponent,
    VendorDetailComponent,
	  
    ProductListComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductDetailComponent,
	  
    PurchaserequestListComponent,
    PurchaserequestCreateComponent,
    PurchaserequestDetailComponent,
    PurchaserequestEditComponent,
	  
    PurchaserequestlineitemCreateComponent,
    PurchaserequestlineitemDetailComponent,
    PurchaserequestlineitemEditComponent,
    SortPipe,
    PurchaserequestReviewComponent,
    PurchaserequestApprovalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
	FormsModule
  ],
  providers: [
	  SystemService,
	  UserService,
	  VendorService,
	  ProductService,
	  PurchaserequestService,
	  PurchaserequestlineitemService
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
