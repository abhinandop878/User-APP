import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }
  Name=""
  PhoneNo=""
  Gender=""
  EmailId=""
  Pincode=""
  Address=""
  BloodGroup=""
  dob=""
  Age=""
  ParentName=""
  Username=""
  Password=""
readRegister=()=>{
  let data={
    "Name":this.Name,
    "PhoneNo":this.PhoneNo,
    "Gender":this.Gender,
    "EmailId":this.EmailId,
    "Pincode":this.Pincode,
    "Address":this.Address,
    "BloodGroup":this.BloodGroup,
    "dob":this.dob,
    "Age":this.Age,
    "ParentName":this.ParentName,
    "Username":this.Username,
    "Password":this.Password
  }
  console.log(data)
  alert("Successfully added")
}
  ngOnInit(): void {
  }

}
