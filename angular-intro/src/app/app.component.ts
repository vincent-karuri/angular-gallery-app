import { Component } from '@angular/core';
import { DataService } from './data.service'

@Component({
  selector: 'app-root',
  template: `

  	<p>{{ someProperty }}</p>
  	
  `
})

export class AppComponent {
	constructor(private dataService:DataService) {

	}

	someProperty:string = '';

	ngOnInit() {
		console.log(this.dataService.cars);
		this.someProperty = this.dataService.myData();
	}

}
