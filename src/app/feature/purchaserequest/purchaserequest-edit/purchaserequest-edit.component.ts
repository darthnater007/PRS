import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PurchaserequestService } from '../../../service/purchase-request.service';
import { Purchaserequest } from '../../../model/purchaserequest';

import { User } from '../../../model/user';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-purchaserequest-edit',
  templateUrl: './purchaserequest-edit.component.html',
  styleUrls: ['./purchaserequest-edit.component.css']
})
export class PurchaserequestEditComponent implements OnInit {

title: string = "Edit Purchaserequest";
	
	id: string;
	resp: any;
	
	purchaserequest: Purchaserequest;
	users: User[];
	

constructor(private purchaserequestSvc: PurchaserequestService, private userSvc: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
	this.userSvc.list().subscribe(users => this.users = users);
	this.route.params.subscribe(parms => this.id = parms['id']);
	this.purchaserequestSvc.get(this.id).subscribe(purchaserequests => {
		this.purchaserequest = purchaserequests.length > 0 ? purchaserequests[0] : null;
		console.log(this.purchaserequest);
		});
  }
	
change() {
	console.log(this.purchaserequest);
	this.purchaserequestSvc.change(this.purchaserequest).subscribe(resp => {
		this.resp = resp;
		console.log("purchaserequest-Change: ", this.resp);
		this.router.navigate(['/purchaserequest/list']);
		});
}
	
compareFn(v1: number, v2: number): boolean{
	return v1 === v2;
}

}