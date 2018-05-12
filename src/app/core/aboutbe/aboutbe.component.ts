import { Component, OnInit } from '@angular/core';

import { Menu } from '@core/menu/menu';

@Component({
  selector: 'app-aboutbe',
  templateUrl: './aboutbe.component.html',
  styleUrls: ['./aboutbe.component.css']
})
export class AboutbeComponent implements OnInit {
	title: string = "About the PRS Back End";
	
	aboutMenu: Menu[]=[
		new Menu('Back End','/be', 'Learn about the Back End tech in the PRS'),
		new Menu('Front End','/fe', 'Learn about the Front End tech in the PRS'),
		new Menu('This Class','/class', 'Learn about the creators of this site')
	]
  constructor() { }

  ngOnInit() {
  }

}
