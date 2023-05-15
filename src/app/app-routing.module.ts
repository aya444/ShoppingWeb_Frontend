import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginAdminComponent} from "./components/login-admin/login-admin.component";
import {AdminMenuComponent} from "./components/admin-menu/admin-menu.component";
import {AdminCreateSellerComponent} from "./components/admin-create-seller/admin-create-seller.component";
import {AdminCreateShippingComponent} from "./components/admin-create-shipping/admin-create-shipping.component";
import {ListSellingAccountsComponent} from "./components/list-selling-accounts/list-selling-accounts.component";
import {ListShippingAccountsComponent} from "./components/list-shipping-accounts/list-shipping-accounts.component";
import {ListCustomerAccountsComponent} from "./components/list-customer-accounts/list-customer-accounts.component";
import {HomePageComponent} from "./components/home-page/home-page.component";
import {LoginSellingComponent} from "./components/login-selling/login-selling.component";
import {SellingMenuComponent} from "./components/selling-menu/selling-menu.component";
import {ViewSaleProductsComponent} from "./components/view-sale-products/view-sale-products.component";
import {ViewSoldProductsComponent} from "./components/view-sold-products/view-sold-products.component";
import {AddProductComponent} from "./components/add-product/add-product.component";
import {CustomerMenuComponent} from "./components/customer-menu/customer-menu.component";
import {CustomerMenuFirstComponent} from "./components/customer-menu-first/customer-menu-first.component";
import {RegisterCustomerComponent} from "./components/register-customer/register-customer.component";
import {LoginCustomerComponent} from "./components/login-customer/login-customer.component";
import {NewOrderComponent} from "./components/new-order/new-order.component";
import {ViewOrderMenuComponent} from "./components/view-order-menu/view-order-menu.component";
import {ViewPastComponent} from "./components/view-past/view-past.component";
import {ViewCurrentComponent} from "./components/view-current/view-current.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'login-admin', component: LoginAdminComponent },
  { path: 'admin-menu/:username', component: AdminMenuComponent },
  { path: 'create-seller/:username', component: AdminCreateSellerComponent },
  { path: 'create-shipping/:username', component: AdminCreateShippingComponent },
  { path: 'list-seller/:username', component: ListSellingAccountsComponent },
  { path: 'list-shipping/:username', component: ListShippingAccountsComponent },
  { path: 'list-customer/:username', component: ListCustomerAccountsComponent },
  { path: 'login-selling', component: LoginSellingComponent },
  { path: 'selling-menu/:username', component: SellingMenuComponent },
  { path: 'view-sale/:username', component: ViewSaleProductsComponent },
  { path: 'view-sold/:username', component: ViewSoldProductsComponent },
  { path: 'add-product/:username', component: AddProductComponent },
  { path: 'customer-menu-first', component: CustomerMenuFirstComponent },
  { path: 'customer-menu/:username', component: CustomerMenuComponent },
  { path: 'register-customer', component: RegisterCustomerComponent },
  { path: 'login-customer', component: LoginCustomerComponent },
  { path: 'new-purchase/:username', component: NewOrderComponent },
  { path: 'view-purchase-menu/:username', component: ViewOrderMenuComponent },
  { path: 'view-past/:username/:status', component: ViewPastComponent },
  { path: 'view-current/:username/:status', component: ViewCurrentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
