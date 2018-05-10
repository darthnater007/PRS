import { Component, OnInit } from '@angular/core';

import { User } from '@model/user';

import { SystemService } from '@svc/system.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	title: string = "Purchase Request System";
	user: User = new User(0,'','','','','','',false,false);

constructor(private sysSvc: SystemService) { }

  ngOnInit() {
	if(this.sysSvc.data.user.loggedIn){
		this.user = this.sysSvc.data.user.instance;
	}else{
		console.error("User not logged in.");
	}
  }

}
