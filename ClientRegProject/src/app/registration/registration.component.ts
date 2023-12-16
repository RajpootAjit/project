import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  
  

  repeatpass: string = 'none';
  formSubmitted: boolean = false; // Add this flag

  constructor(private router: Router){
    
  };
  ngOnInit(): void {}
  data: any;
  register(data:object):void{
    this.formSubmitted = true; // Set the flag to true when the form is submitted
    if(this.login.valid){
       
      if(this.pwd.value === this.rpwd.value){
        
         const userData = {
          name: this.name.value,
          email: this.Email.value,
          address: this.Address.value,
          mobno: this.mobno.value,
          gender: this.gender.value,
          pwd: this.pwd.value,
        };
        localStorage.setItem('userData', JSON.stringify(userData));
        alert("successfully Registered");
        this.login.reset();
        this.router.navigateByUrl('/login');
        
      }
      else{
        this.repeatpass = 'inline'
      }

    }
    else {
      // Form is invalid, do not navigate
      // You can also display a message to inform the user about the validation errors
      alert("Please fill in all required fields correctly before submitting.");
      
    }
    
  
   
 }


 login = new FormGroup({
  name: new FormControl('',[Validators.required, Validators.minLength(4), Validators.pattern(/^[a-zA-Z_@ ]*$/)]),
  Email: new FormControl('', [Validators.required, Validators.email]),
  Address: new FormControl('', [Validators.required]),
  Mobno: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
  Gender: new FormControl('',[Validators.required]),
  pwd: new FormControl('',[Validators.required, Validators.minLength(4), Validators.maxLength(15)]),
  rpwd: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(15)])
})



get name(): FormControl
{
  return this.login.get("name") as FormControl;
}


get Email(): FormControl
{
  return this.login.get("Email") as FormControl
}

get Address (): FormControl
{
  return this.login.get("Address") as FormControl
}

get mobno(): FormControl
{
  return this.login.get("Mobno") as FormControl
}

get gender(): FormControl
{
  return this.login.get("Gender") as FormControl
}

get pwd(): FormControl
{
  return this.login.get("pwd") as FormControl
}

get rpwd(): FormControl
{
  return this.login.get("rpwd") as FormControl
}


}
