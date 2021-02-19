import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginAppService {

  url = ''

  constructor(private http: HttpClient, private router: Router) { }
                        // Services for Signin or Signup

  createNewUser(user) {
    return this.http.post(`${this.url}/users`, user);
  }

  loginUser(user) {
    return this.http.post(`${this.url}/api/auth/login`, user)
  }

                        // Services for CRUD of the Tasks

  //Service for create task 

  createTask(task) {
    return this.http.post(`${this.url}/task`, task)
  }

  //Service for get all tasks 

  getAlltasks(id: number | string) {
    return this.http.get(`${this.url}/api/profile/${id}`);
  }

  //Service for update task 

  updatetask(id: Number | string, taskForUpdate) {
    return this.http.put(`${this.url}/task/edit-task/${id}`, taskForUpdate)
  }

  //Service for delete task 

  deleteTask(id: Number) {
    return this.http.delete(`${this.url}/task/delete-task/${id}`)
  }


                            // Services for Logedd, Verify Logged, and logout
  storeTokenAndIdAndRefresh(token, id, refresh) {
    localStorage.setItem('token', token)
    localStorage.setItem('sub', id)
    localStorage.setItem('refr', refresh)
  }

  verifyLogged() {
    return !!localStorage.getItem('token')
  }

  getUserId() {
    return localStorage.getItem('sub');
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('sub');
    localStorage.removeItem('refr');
    this.router.navigate(['/']);
  }

}
