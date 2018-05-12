import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { AboutbeComponent } from './core/aboutbe/aboutbe.component';
import { AboutfeComponent } from './core/aboutfe/aboutfe.component';
import { AboutclassComponent } from './core/aboutclass/aboutclass.component';

import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';
import { UserLoginComponent } from './feature/user/user-login/user-login.component';

import { VendorListComponent } from './feature/vendor/vendor-list/vendor-list.component';
import { VendorCreateComponent } from './feature/vendor/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './feature/vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './feature/vendor/vendor-edit/vendor-edit.component';

import { ProductListComponent } from './feature/product/product-list/product-list.component';
import { ProductCreateComponent } from './feature/product/product-create/product-create.component';
import { ProductEditComponent } from './feature/product/product-edit/product-edit.component';
import { ProductDetailComponent } from './feature/product/product-detail/product-detail.component';

import { PurchaserequestListComponent } from './feature/purchaserequest/purchaserequest-list/purchaserequest-list.component';
import { PurchaserequestCreateComponent }  from './feature/purchaserequest/purchaserequest-create/purchaserequest-create.component';
import {PurchaserequestDetailComponent } from './feature/purchaserequest/purchaserequest-detail/purchaserequest-detail.component';
import { PurchaserequestEditComponent } from './feature/purchaserequest/purchaserequest-edit/purchaserequest-edit.component';
import { PurchaserequestReviewComponent } from './feature/purchaserequest/purchaserequest-review/purchaserequest-review.component';
import { PurchaserequestApprovalComponent } from './feature/purchaserequest/purchaserequest-approval/purchaserequest-approval.component';

import { PurchaserequestlineitemCreateComponent } from './feature/purchaserequestlineitem/purchaserequestlineitem-create/purchaserequestlineitem-create.component';
import { PurchaserequestlineitemEditComponent } from './feature/purchaserequestlineitem/purchaserequestlineitem-edit/purchaserequestlineitem-edit.component';
import { PurchaserequestlineitemDetailComponent } from './feature/purchaserequestlineitem/purchaserequestlineitem-detail/purchaserequestlineitem-detail.component';
//organize these
const routes: Routes = [
	{path:'', redirectTo:'/', pathMatch: 'full'},
	{path:'home', component: HomeComponent},
	{path:'about', component: AboutComponent},
	{path:'be', component: AboutbeComponent },
	{path:'fe', component: AboutfeComponent },
	{path:'class', component: AboutclassComponent },
	
	{path:'user/list', component: UserListComponent},
	{path: 'user/create', component: UserCreateComponent},
	{path: 'user/edit/:id', component: UserEditComponent},
	{path: 'user/detail/:id', component: UserDetailComponent},
	{path: 'user/remove/:id', component: UserDetailComponent},
	{path: 'user/login' , component: UserLoginComponent},
	
	{path: 'vendor/list', component: VendorListComponent},
	{path: 'vendor/create', component: VendorCreateComponent},
	{path: 'vendor/edit/:id', component: VendorEditComponent},
	{path: 'vendor/detail/:id', component: VendorDetailComponent},
	{path: 'vendor/remove/:id', component: VendorDetailComponent},
	
	{path: 'product/list', component: ProductListComponent},
	{path: 'product/create', component: ProductCreateComponent},
	{path: 'product/edit/:id', component: ProductEditComponent},
	{path: 'product/detail/:id', component: ProductDetailComponent},
	{path: 'product/remove/:id', component: ProductDetailComponent},
	
	{path: 'purchaserequest/list', component: PurchaserequestListComponent},
	{path: 'purchaserequest/create', component: PurchaserequestCreateComponent},
	{path: 'purchaserequest/edit/:id', component: PurchaserequestEditComponent},
	{path: 'purchaserequest/detail/:id', component: PurchaserequestDetailComponent},
	{path: 'purchaserequest/remove/:id', component: PurchaserequestDetailComponent},
	{path: 'purchaserequest/review/:id', component:  PurchaserequestReviewComponent},
	{path: 'purchaserequest/approval/:id', component: PurchaserequestApprovalComponent},
	
	{path: 'purchaserequestlineitem/create/:id', component: PurchaserequestlineitemCreateComponent},
	{path: 'purchaserequestlineitem/edit/:id/:prid', component: PurchaserequestlineitemEditComponent},
	{path: 'purchaserequestlineitem/detail/:id/:prid', component: PurchaserequestlineitemDetailComponent},
	{path: 'purchaserequestlineitem/remove/:id', component: PurchaserequestlineitemDetailComponent},
	
	{path:'**', component: UserLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
