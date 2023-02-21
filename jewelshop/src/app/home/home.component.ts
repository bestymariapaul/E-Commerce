import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images = [  
    { img: "../assets/img/img6.jpg"  } ,  //earring
    { img: "../assets/img/img7.jpg" },  //ring
    { img: "../assets/img/img8.jpg" },  //diamond
    { img: "../assets/img/img9.jpg" },  //gold
    { img: "../assets/img/img10.jpg" }  //home
  ]; 
  slideConfig = {  
    "slidesToShow": 1,  
    "slidesToScroll": 1,  
    "dots": true,  
    "infinite": true  
  };
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
