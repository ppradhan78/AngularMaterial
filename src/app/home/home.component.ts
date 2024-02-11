import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  value = "!@#abc";

  constructor() {
  }

  ngOnInit(): void {
  }
  onSubmit(formValues: object) {
    console.log('formValues :>> ', formValues);
  }
}
