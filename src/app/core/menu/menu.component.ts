import { Component, OnInit } from '@angular/core';

import {Menu} from './menu';

import { User } from '@model/user';

import { SystemService } from '@svc/system.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
user: User;
id: number = 0;
menuItems: Menu[] = [
	new Menu('Home', '/home', 'Go to home page'),
	new Menu('Request', '/purchaserequest/list', 'Go to Purchase Request Page'),
	new Menu('Review', '/purchaserequest/review/' + this.id, 'Go to the Review Page'),
	new Menu('User', '/user/list', 'Go to user page'),
	new Menu('Vendor', '/vendor/list', 'Go to vendor page'),
	new Menu('Product', '/product/list', 'Go to product page'),
	new Menu('About', '/about', 'Go to about page')
];
constructor(private sysSvc: SystemService) { }

  ngOnInit() {
	  if(this.sysSvc.data.user.loggedIn){
		this.user = this.sysSvc.data.user.instance;
		this.id = this.user.Id;
		console.log(this.id)
		console.log(this.user);
	}else{
		console.error("User not logged in.");
	}
  }

}
