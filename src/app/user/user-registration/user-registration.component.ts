import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {

  userRegisterForm: FormGroup;

  userSubmitUrl = 'https://mocki.io/v1/3789bb02-f80f-490d-a5e0-8cdc12d4cd02'

  constructor(private userService: UserService,private router: Router) { }

  ngOnInit(): void {
    this.userRegisterForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      bio: new FormControl('', [Validators.required]),
    });

    localStorage.removeItem('register');
  }

  onSubmit(): void {
    let userObject = this.userRegisterForm.value;

    this.userService.GetRequest(this.userSubmitUrl).subscribe((response) => {

      if(response.success == true){
        localStorage.setItem('register', 'true');
        this.router.navigate(['/userprofile']);
      }else{
        alert('data submit error')
      }

    });
  }






}
