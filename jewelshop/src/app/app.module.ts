import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ContactusComponent } from './contactus/contactus.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { AlljewelleryComponent } from './alljewellery/alljewellery.component';
import { GoldComponent } from './gold/gold.component';
import { DiamondComponent } from './diamond/diamond.component';
import { EarringsComponent } from './earrings/earrings.component';
import { RingsComponent } from './rings/rings.component';
import { HomeComponent } from './home/home.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';

import {MatIconModule} from '@angular/material/icon';

import { CheckoutComponent } from './checkout/checkout.component';
import { JewelfilterPipe } from './jewelfilter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutComponent,
    ContactusComponent,
    AlljewelleryComponent,
    GoldComponent,
    DiamondComponent,
    EarringsComponent,
    RingsComponent,
    HomeComponent,
    RegisterComponent,
    CartComponent,
    CheckoutComponent,
    JewelfilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,FormsModule,MatButtonModule,
    MatToolbarModule,MatSelectModule,HttpClientModule,RouterModule,
    SlickCarouselModule,ReactiveFormsModule,MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
