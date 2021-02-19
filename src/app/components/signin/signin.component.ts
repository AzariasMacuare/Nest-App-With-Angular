import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginAppService } from 'src/app/service/login-app.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, public appServices: LoginAppService) { }

  ngOnInit(): void {
  }

  signup(form) {
    if (form.value.password === form.value.confirmPassword) {
        this.appServices.createNewUser(form.value).subscribe(
          res => {
            if (!res) {
              return Swal.fire(
                'Sorry',
                'Username already exist. Please your choose some other',
                'error'
              )
            }
            this.router.navigate(['/'])
          },
          err => console.error(err),
        )
    } else {
      return Swal.fire(
        'Sorry',
        'Yours Passwords dont match. Please insert it again',
        'error'
      )
    }
  }

}
