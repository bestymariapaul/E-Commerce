import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  position="center";
  
  message="Enter your Query "
  Clicks()
  {
    this.message="Your Query is Submitted";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
