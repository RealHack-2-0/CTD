import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  constructor(public servive:ApiService,public router:Router) {
  }
  onLogout(){
    this.servive.deleteToken();
    this.router.navigate(['/login']);
        }
}
