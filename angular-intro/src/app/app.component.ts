import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
	  <h1>Hey Guys!</h1>
	  <p>How Are You Doing {{ myObject.name }}?</p>
	  <p>Available pronouns:</p>

	  <ul>
	  	<li *ngFor="let arr of myArr">{{ arr }}</li>
	  </ul>

	  <div *ngIf="myVariable; then tmpl1 else tmpl2"></div>
	  <ng-template #tmpl1> Yes, I exist!</ng-template>
	  <ng-template #tmpl2> No, I do not exist!</ng-template>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  myObject = {
  	name: 'Vincent'
  	gender: 'male',
  	age: 33,
  	location: 'USA'
  }

  myArr = ['him', 'hers', 'yours'];
  myVariable = 'something';
}
