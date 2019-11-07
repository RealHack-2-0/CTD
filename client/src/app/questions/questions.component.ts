import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  form = new FormGroup({
    question: new FormControl('',[
      Validators.required,
      Validators.email
    ]),
  })

  constructor() { }

  ngOnInit() {
  }

}
