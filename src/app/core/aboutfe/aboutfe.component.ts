import { Component, OnInit } from '@angular/core';

import { Menu } from '@core/menu/menu';

@Component({
  selector: 'app-aboutfe',
  templateUrl: './aboutfe.component.html',
  styleUrls: ['./aboutfe.component.css']
})
export class AboutfeComponent implements OnInit {
	title: string = "About the PRS Front End";
	
	aboutMenu: Menu[]=[
		new Menu('Back End','/be', 'Learn about the Back End tech in the PRS'),
		new Menu('Front End','/fe', 'Learn about the Front End tech in the PRS'),
		new Menu('This Class','/class', 'Learn about the creators of this site')
	]
  constructor() { }

  ngOnInit() {
  }

}
