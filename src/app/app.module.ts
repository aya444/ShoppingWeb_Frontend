import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterCustomerComponent } from './components/register-customer/register-customer.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AdminMenuComponent } from './components/admin-menu/admin-menu.component';
import { AdminCreateSellerComponent } from './components/admin-create-seller/admin-create-seller.component';
import { AdminCreateShippingComponent } from './components/admin-create-shipping/admin-create-shipping.component';
import { ListSellingAccountsComponent } from './components/list-selling-accounts/list-selling-accounts.component';
import { ListShippingAccountsComponent } from './components/list-shipping-accounts/list-shipping-accounts.component';
import { ListCustomerAccountsComponent } from './components/list-customer-accounts/list-customer-accounts.component';
import { LoginSellingComponent } from './components/login-selling/login-selling.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SellingMenuComponent } from './components/selling-menu/selling-menu.component';
import { ViewSoldProductsComponent } from './components/view-sold-products/view-sold-products.component';
import { ViewSaleProductsComponent } from './components/view-sale-products/view-sale-products.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { CustomerMenuComponent } from './components/customer-menu/customer-menu.component';
import { CustomerMenuFirstComponent } from './components/customer-menu-first/customer-menu-first.component';
import { LoginCustomerComponent } from './components/login-customer/login-customer.component';
import { NewOrderComponent } from './components/new-order/new-order.component';
import { ViewOrderMenuComponent } from './components/view-order-menu/view-order-menu.component';
import { ViewPastComponent } from './components/view-past/view-past.component';
import { ViewCurrentComponent } from './components/view-current/view-current.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterCustomerComponent,
    LoginAdminComponent,
    AdminMenuComponent,
    AdminCreateSellerComponent,
    AdminCreateShippingComponent,
    ListSellingAccountsComponent,
    ListShippingAccountsComponent,
    ListCustomerAccountsComponent,
    LoginSellingComponent,
    HomePageComponent,
    SellingMenuComponent,
    ViewSoldProductsComponent,
    ViewSaleProductsComponent,
    AddProductComponent,
    CustomerMenuComponent,
    CustomerMenuFirstComponent,
    LoginCustomerComponent,
    NewOrderComponent,
    ViewOrderMenuComponent,
    ViewPastComponent,
    ViewCurrentComponent,
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
