import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
	  <h1>Hey Guys!</h1>

	  <button [disabled]="buttonStatus">My Button</button>
	  
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  buttonStatus = true;
}
