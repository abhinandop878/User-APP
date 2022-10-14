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
    console.log(data)
    alert("Successfully added")
  }
  ngOnInit(): void {
  }

}
