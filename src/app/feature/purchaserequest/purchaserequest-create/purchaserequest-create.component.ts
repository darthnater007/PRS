import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Purchaserequest } from '../../../model/purchaserequest';
import { PurchaserequestService } from '../../../service/purchase-request.service';
import { User } from '../../../model/user';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-purchaserequest-create',
  templateUrl: './purchaserequest-create.component.html',
  styleUrls: ['./purchaserequest-create.component.css']
})
export class PurchaserequestCreateComponent implements OnInit {
	title: string = "Create New Purchaserequests";
	resp: any;
	purchaserequest: Purchaserequest = new Purchaserequest(0, null, '', '', null, '', '', 0, null, '');
	users: User[];
	
create() {
	console.log('create a purchaserequest...');
	console.log (this.purchaserequest);
	this.purchaserequestSvc.create(this.purchaserequest).subscribe(resp => {
		this.resp = resp;
		console.log("purchaserequest-Create: ", this.resp);
		this.router.navigate(['/purchaserequest/list']);
		});
}

constructor(private purchaserequestSvc: PurchaserequestService, private userSvc: UserService, private router: Router) { }

  ngOnInit() {
	this.userSvc.list().subscribe(users => this.users = users);
  }

}