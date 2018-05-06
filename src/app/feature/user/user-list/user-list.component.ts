import { Component, OnInit } from '@angular/core';

import { UserService } from '../../../service/user.service';
import { User } from '../../../model/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
	users : User[];
	title : string =  'Users On File';
	
constructor(private userSvc: UserService) { }

  ngOnInit() {
		this.userSvc.list().subscribe(users => {
			console.log(users);
			this.users = users;
		})
  }

}
