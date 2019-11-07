import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model ={
    email :'',
    password:''
  };
  serverErrorMessages: string;
  constructor(public service :ApiService,public router : Router) { }

  ngOnInit() {
    if(this.service.isLoggedIn())
    this.router.navigateByUrl('/userprofile');
  }
  onSubmit(form : NgForm){
    console.log(form.value);
    this.service.login(form.value).subscribe(
      res => {
        console.log(res)
        this.service.setToken(res['token']);
        this.router.navigateByUrl('/userprofile');
      },
      err => {
        this.serverErrorMessages = err.error.message;
        console.log(err)
      }
    );
  }
}
