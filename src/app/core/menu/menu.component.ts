import { Component, OnInit } from '@angular/core';
import {Menu} from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
menuItems: Menu[] = [
	new Menu('Home', '/home', 'Go to home page'),
	new Menu('Request', '/purchaserequest/list', 'Go to Purchase Request Page'),
	new Menu('Review', '/purchaserequest/review', 'Go to the Review Page'),
	new Menu('User', '/user/list', 'Go to user page'),
	new Menu('Vendor', '/vendor/list', 'Go to vendor page'),
	new Menu('Product', '/product/list', 'Go to product page'),
	new Menu('About', '/about', 'Go to about page')
];
  constructor() { }

  ngOnInit() {
  }

}
