import { Component, OnInit } from '@angular/core';

import { Menu } from '@core/menu/menu';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
	title: string = "About the PRS System";
	
	aboutMenu: Menu[]=[
		new Menu('Back End','/be', 'Learn about the Back End tech in the PRS'),
		new Menu('Front End','/fe', 'Learn about the Front End tech in the PRS'),
		new Menu('This Class','/class', 'Learn about the creators of this site')
	]

  constructor() { }

  ngOnInit() {
  }

}
