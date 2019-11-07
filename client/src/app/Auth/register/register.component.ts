import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model ={
    password :'',
    confirmnewPassword:'',
    email:'',
    firstName:'',
    lastName:'',
  };

  msg;
  constructor(public service : ApiService) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.model)
        this.service.register(this.model).subscribe(
          res => {
            // this.router.navigate(['login']);
            // this.msg='Registration is successfull'
            // this.model.password ='',
            // this.model.confirmnewPassword='',
            // this.model.email='',
            // this.model.firstName='',
            // this.model.lastName='',
            // this.model.age=''
            },
          
          err => {
            console.log(err)
                    {if(err) this.msg='Your email is already exists';}
          }
        );
      }

}
