import { Component, OnInit } from '@angular/core';

import { UserService } from '../../../service/user.service';
import { User } from '../../../model/user';

import { SystemService } from '../../../service/system.service';

import { SortPipe } from '../../../pipe/sort.pipe';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
	users : User[];
	user : User;
	
	title : string =  'Users On File';
	sortBy: string = "Id";
	
constructor(private userSvc: UserService, private sysSvc: SystemService) { }

  ngOnInit() {
		this.userSvc.list().subscribe(users => {
			console.log(users);
			this.users = users;
		});
	  
	  if(this.sysSvc.data.user.loggedIn){
			this.user = this.sysSvc.data.user.instance;
		}else{
			console.error("User not logged in.");
		}
  }
	
	setSortBy(column: string): void {
    this.sortBy = column;
  }

}
