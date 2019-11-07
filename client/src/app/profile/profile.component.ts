import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userDetails: any;
  pic;
  downloadURL: Observable<string>;
  profileUrl: Observable<string>;
  isloading
  constructor(private service: ApiService, private router: Router) { }
  newpost = {
    title: '',
    body: '',
    createdBy: ''
  }
  date = Date.now()





  ngOnInit() {
console.log('skdfhjdhf')
    
    this.newpost.title = '';
    this.newpost.body = '';
    this.isloading = false
    this.getAllPosts();
    this.service.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
        this.newpost.createdBy = this.userDetails.firstName
        console.log(res);
      },
      err => {
        console.log(err);

      });

  }




  onLogout() {
    this.service.deleteToken();
    this.router.navigate(['/login']);
  }




  Posts;
  getAllPosts() {
    // Function to GET all Posts from database

  }







  // add a new post---------------------------------------------------------------
  post() {

  }





  read(id) {

    
  }


  // pic = "";
  private files = [];
  id = '';
  private url = '';
  // isloading=false


  upload(event) {
    
  }
title;
  type(title){

 }

 changtitle(title){

 }
}
