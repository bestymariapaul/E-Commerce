import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JewelService {
  

  constructor(private client:HttpClient) { }
  getAllProducts(){
    return this.client.get("http://localhost:4000/Alljewellery")
  }
  getallProducts(){
    return this.client.get("http://localhost:4000/gold")
  }
  getAllproducts(){
    return this.client.get("http://localhost:4000/diamond")
  }
  getallproducts(){
    return this.client.get("http://localhost:4000/earrings")
  }
  getAllProduct(){
    return this.client.get("http://localhost:4000/rings")
  }
}
