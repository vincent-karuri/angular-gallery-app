import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
	  <button (click)="myEvent($event)">My Button</button>
	  
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  myEvent(event) {
  	console.log(event);
  }
}
