import { Component, OnInit } from '@angular/core';
import { LoginAppService } from 'src/app/service/login-app.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  add: Boolean = false;

  constructor(public appServices: LoginAppService) { }

  ngOnInit(): void {
  }
  
  logout() {
    this.appServices.logout()
  }

}
