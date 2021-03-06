import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isRegistering = false;

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (this.authService.loggedIn()) {
      this.router.navigate(['/members']);
    }
  }

  signUp() {
    this.isRegistering = !this.isRegistering;
  }


}
