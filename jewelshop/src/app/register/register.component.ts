import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{FormGroup,FormBuilder} from "@angular/forms"
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public signupForm!: FormGroup;
  constructor(private formBuilder:FormBuilder, private http:HttpClient, private routers:Router) { }

  ngOnInit(): void {
    this.signupForm=this.formBuilder.group({

      fullname:[''],
      email:[''],
      password:[''],
      mobile:['']
 
     })
  }
  sign(){
    this.http.post<any>("http://localhost:4000/register",this.signupForm.value)
    .subscribe((res)=>{
      alert("success");
      this.signupForm.reset();
      this.routers.navigate(['login']);
    })
     
    }


}
