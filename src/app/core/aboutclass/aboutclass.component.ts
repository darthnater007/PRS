import { Component, OnInit } from '@angular/core';

import { Menu } from '@core/menu/menu';

@Component({
  selector: 'app-aboutclass',
  templateUrl: './aboutclass.component.html',
  styleUrls: ['./aboutclass.component.css']
})
export class AboutclassComponent implements OnInit {
	title: string = "About Us";
	
	aboutMenu: Menu[]=[
		new Menu('Back End','/be', 'Learn about the Back End tech in the PRS'),
		new Menu('Front End','/fe', 'Learn about the Front End tech in the PRS'),
		new Menu('This Class','/class', 'Learn about the creators of this site')
	]
  constructor() { }

  ngOnInit() {
  }

}
