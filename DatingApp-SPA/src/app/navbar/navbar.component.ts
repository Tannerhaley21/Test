import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { NgForm } from '@angular/forms';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  model: any = {};
  constructor(public authService: AuthService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Logged In successfully!');
    }, error => {
      if (error !== 'Unauthorized') {
        this.alertify.error('An Error Occured');
      } else {
        this.alertify.error(error);
      }
    }, () => {
      this.router.navigate(['/members']);
    });
    form.reset();
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('Logged Out');
    this.router.navigate(['/home']);
  }
}
