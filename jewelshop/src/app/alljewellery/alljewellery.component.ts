import { Component, OnInit } from '@angular/core';
import { JewelService } from '../jewel.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-alljewellery',
  templateUrl: './alljewellery.component.html',
  styleUrls: ['./alljewellery.component.css']
})
export class AlljewelleryComponent implements OnInit {
  position="center"
  productdata:any;
  



  constructor(private service:JewelService,private CartService:CartService) { }

  ngOnInit(): void {
    this.service.getAllProducts().subscribe((data)=>{
      this.productdata=data;
      this.productdata.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
        
      });
    });
  
  }
  addtocart(item:any){
    this.CartService.addtoCart(item);
    
  }

}
