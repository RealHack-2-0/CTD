import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Observable } from 'rxjs/internal/Observable';

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
    // this.service.getUserProfile().subscribe(
    //   res => {
    //     this.userDetails = res['user'];
    //     this.newpost.createdBy = this.userDetails.firstName
    //     console.log(res);
    //   },
    //   err => {
    //     console.log(err);

    //   });

  }




  onLogout() {
    this.service.deleteToken();
    this.router.navigate(['/login']);
  }




  Posts;
  getAllPosts() {
    // Function to GET all Posts from database
    this.service.getAllPosts().subscribe(data => {
     
            this.Posts = data['posts']; // Assign array to use in HTML
           var a= JSON.parse(JSON.stringify(data));
          //  const mapped = Object.keys(data).map(key => ({type: key, value: data[key]}));
          console.log(data)

           const mapped = Object.entries(data).map(([type, value]) => ([value]));
            console.log(mapped)
            var postData = []
            const arr = mapped[1]
            for(var i = 0; i < arr.length; i++) {
              for(data of arr[i]){
                console.log(data)
                postData.push(data)
              }
             
          }
          this.Posts = postData
          console.log(postData)
            // for(var aa of mapped){
            //   console.log(aa)
            // }
            // mapped.forEach(element => {
            //   console.log(element)
            // });
    });
    
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
