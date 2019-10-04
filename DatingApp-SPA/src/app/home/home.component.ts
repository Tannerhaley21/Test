import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isRegistering = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  signUp() {
    this.isRegistering = !this.isRegistering;
  }


}
