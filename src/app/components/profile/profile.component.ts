import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgModel } from '@angular/forms'
import { Router } from '@angular/router';
import { LoginAppService } from 'src/app/service/login-app.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  url = 'http://localhost:3000';
  allTask: [];
  
    name: String = '';
    description: String = '';
    id: Number | string;

    add: Boolean = false;
  

  constructor(private http: HttpClient, private router: Router, public appServices: LoginAppService) { }

  ngOnInit(): void {
    const id =  this.appServices.getUserId()
    this.appServices.getAlltasks(id).subscribe(
      res => {
        this.allTask = res as []
      },
      err => {
        this.router.navigate(['/'])
      }
    )
  }

  // Save new Taske or
  // Update Task already exist

  saveTask() {
    const task = {
      name: this.name,
      description: this.description,
      belong: localStorage.getItem('sub')
      }


    if (!this.id) {
        this.appServices.createTask(task).subscribe(
          res => {
            this.ngOnInit()
            this.name = '';
            this.description = '';
          },
          err => console.error(err)
        )
    } else {
        this.appServices.updatetask(this.id, task).subscribe(
          res => {
            this.ngOnInit();
            this.name = '';
            this.description = '';
          }
      )
    }
  }

  // Delete Task

  deleteTask(id: Number) {
    this.appServices.deleteTask(id).subscribe(
      res => {
        this.ngOnInit()
      },
      err => console.error(err),
    )
  }

  // Edit task

  editTask(name: string, description: string, id: Number) {
    this.name = name;
    this.description = description;
    this.id = id;
    this.add = true;
  }

}
