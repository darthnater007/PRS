import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../../../model/user';

import { PurchaserequestService } from '../../../service/purchase-request.service';
import { Purchaserequest } from '../../../model/purchaserequest';

import { Purchaserequestlineitem } from '../../../model/purchaserequestlineitem';

import { SystemService } from '../../../service/system.service';

@Component({
  selector: 'app-purchaserequest-approval',
  templateUrl: './purchaserequest-approval.component.html',
  styleUrls: ['./purchaserequest-approval.component.css']
})
export class PurchaserequestApprovalComponent implements OnInit {

	title: string = "Purchase Request Approval";
	purchaserequest: Purchaserequest;
	prlis: Purchaserequestlineitem[];
	user: User;
	
	uID: number;
	prID: number;
	rejectionReason: string = '';
	resp: any;

constructor(private purchaserequestSvc: PurchaserequestService, private sysSvc: SystemService, private router: Router, private route: ActivatedRoute) { }

	ngOnInit() {
		this.route.params.subscribe(parms => {
			let id = parms["id"];
			this.prID = id;
			this.getPurchaserequestById(id);
			console.log(this.uID);
		});
		
		console.log('Getting list of prlis...');
		this.purchaserequestSvc.prliList(this.prID).subscribe(prlis => {
        	this.prlis = prlis;
        	console.log(prlis);
    	});
		if(this.sysSvc.data.user.loggedIn){
			this.user = this.sysSvc.data.user.instance;
			this.uID = this.user.Id;
		}else{
			console.error("User not logged in.");
		}
	}
		
	getPurchaserequestById(id){
	this.purchaserequestSvc.get(id).subscribe (purchaserequests => {
		this.purchaserequest = purchaserequests.length > 0 ? purchaserequests[0] : null;
		console.log("purchaserequest: " + this.purchaserequest); 
		});
	}
	
	approve(){
		this.purchaserequestSvc.approve(this.purchaserequest).subscribe(resp => {
			this.resp = resp;
			console.log("purchaserequest-Accept: ", this.resp);
			this.router.navigate(['/purchaserequest/review/{{this.uID}}']);
		});
	}
	
	reject(){
		console.log(this.purchaserequest);
		this.purchaserequest.ReasonForRejection = this.rejectionReason;
		this.purchaserequestSvc.reject(this.purchaserequest).subscribe(resp => {
			this.resp = resp;
			console.log("purchaserequest-Accept: ", this.resp);
			this.router.navigate(['/purchaserequest/review/{{this.uID}}']);
		});
	}

}
