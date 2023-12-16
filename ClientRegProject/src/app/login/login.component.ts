import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  

 
  data: any;
  loginsubmite: boolean = false;

  constructor(private router: Router){
    
  };

  signUp(){
    this.router.navigateByUrl('/')
  }

  sigin(data:object): void {
    this.loginsubmite = true;
    if (this.login.valid) {
      // Retrieve user data from local storage
      const storedUserData = localStorage.getItem('userData');
      if (storedUserData) {
        const userData = JSON.parse(storedUserData);
        if (
          userData.name === this.name.value &&
          userData.pwd === this.password.value
        ) {
          alert('Login successfully');
          this.router.navigateByUrl('/meet');
        } else {
          alert('Incorrect username or password');
        }
      } else {
        alert('User not found. Please register first.');
      }
    } else {
      alert('Please enter the credentials.');
    }
  }

  login = new FormGroup({
    name: new FormControl(''),
    password: new FormControl('')
   
  })



  get name(): FormControl
{
  return this.login.get("name") as FormControl;
}


get password(): FormControl
{
  return this.login.get("password") as FormControl
}
}
