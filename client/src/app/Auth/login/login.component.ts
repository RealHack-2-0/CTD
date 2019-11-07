import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../../api.service';

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
  constructor(public service :ApiService) { }

  ngOnInit() {
  }
  onSubmit(form : NgForm){
    console.log(form.value);
    this.service.login(form.value).subscribe(
      res => {
        // this.service.setToken(res['token']);
        // this.router.navigateByUrl('/userprofile');
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }
}
