import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor() { }
  Username=""
  Password=""
  readLogin=()=>{
    let data={
      "Username":this.Username,
      "Password":this.Password
    }
    if (this.Username=="admin"&&this.Password=="1234") {
      alert("login Successfully")
    } else {
      alert("Invalid Credential")
    }
    console.log(data)
    this.Username=""
    this.Password=""
  }
  ngOnInit(): void {
  }

}
