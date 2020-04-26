import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IUser } from '../../../shared/interface/User.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private authService: AuthService, private router: Router) { }

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  ngOnInit(): void {
  }

  onLogin(user: IUser) {
    this.authService.singIn(user)
      .subscribe((res:any) =>{
        if(localStorage.getItem('token')){
          localStorage.removeItem('token');
        }else{
          localStorage.setItem('token', res.token)
          this.router.navigate(['admin/enterprises']);
        }
      },
      err => console.log(err));
  }

}
