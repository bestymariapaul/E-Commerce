import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AlljewelleryComponent } from './alljewellery/alljewellery.component';
import { GoldComponent } from './gold/gold.component';
import { DiamondComponent } from './diamond/diamond.component';
import { EarringsComponent } from './earrings/earrings.component';
import { RingsComponent } from './rings/rings.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
const routes: Routes = [
  {path:'',redirectTo:"home",pathMatch:"full"},
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
  path: 'login',
  component: LoginComponent
},{
    path: 'about',
    component: AboutComponent
  },{
    path: 'contactus',
    component: ContactusComponent
  },{
    path: 'alljewellery',
    component: AlljewelleryComponent
  },{
    path: 'gold',
    component: GoldComponent
  },{
    path: 'diamond',
    component: DiamondComponent
  },{
    path: 'earrings',
    component: EarringsComponent
  },{
    path: 'rings',
    component: RingsComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }