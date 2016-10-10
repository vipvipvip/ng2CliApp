import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css'],
  providers: [NgForm]
})
export class SimpleFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  purchase (form: NgForm) {
    console.log(form.value);
    console.log(form.value.contact.firstname);
  }
}
