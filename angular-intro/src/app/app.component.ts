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
}
