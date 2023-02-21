import { Component, OnInit } from '@angular/core';
import { JewelService } from '../jewel.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-diamond',
  templateUrl: './diamond.component.html',
  styleUrls: ['./diamond.component.css']
})
export class DiamondComponent implements OnInit {

  position="center"
  productdata:any

  constructor(private service:JewelService,private CartService:CartService) { }

  ngOnInit(): void {
    this.service.getAllproducts().subscribe((data)=>{
      this.productdata=data;
      this.productdata.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
        
      });
    })
  }
  addtocart(item:any){
    this.CartService.addtoCart(item);
    
  }

}
