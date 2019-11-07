import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor() { }
  public id;
  post;
  message;
rate=3;
  userDetails;
  //
  username = "charindu"
  public userId;
  public user = { 
    userId: ''
  };


  ngOnInit() {
  }

}
