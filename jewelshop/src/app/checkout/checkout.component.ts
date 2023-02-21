import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  Paymentmethod: any[] = ['Cash On Delivery', 'Debit Card', 'Credit Card', 'GPay'];

  constructor() { }

  ngOnInit(): void {
  }
  onChange(event: any){
    console.log(event.value);
  }
  msg=""
  mg=''
  onClick(){
    this.msg="Payment successfull" ;
    this.mg="!!!!!!!!!!!!  ENJOY YOUR PRODUCT !!!!!!!!!!!!!!!" ;
  }
  mssg=""
  onclick(){
    this.mssg="Submitted successfull" ;
  }
  position="center";

}
