import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { Token } from './model/token.model'
import Swal from 'sweetalert2'
import { LoginAppService } from 'src/app/service/login-app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public appServices: LoginAppService, private router: Router) { }

  ngOnInit(): void {
  }

  login(form) {
    this.appServices.loginUser(form.value).subscribe(
      res => {
        if(res == null || undefined) {
          Swal.fire(
            'Sorry',
            'Your username or password is incorrect',
            'error'
          )
        } else {
          console.log(res)
          this.appServices.storeTokenAndIdAndRefresh(res[0].access_token, res[1].id, res[2].refresh)
          this.router.navigate(['/profile'])
        }
      },
      err => console.log(err)
    )
  }

  signup(form) {
    
  }

}
