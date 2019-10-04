import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  model: any = {};
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    this.authService.login(this.model).subscribe(next => {
      console.log('Logged In success!');
    }, error => {
      console.log(error);
    });
    form.reset();
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    console.log('Logged Out');
  }
}
