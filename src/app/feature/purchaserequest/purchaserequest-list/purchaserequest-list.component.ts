import { Component, OnInit } from '@angular/core';

import { PurchaserequestService } from '../../../service/purchase-request.service';
import { Purchaserequest } from '../../../model/purchaserequest';

import { User } from '../../../model/user';
import { UserService } from '../../../service/user.service';

import { SystemService } from '../../../service/system.service';

import { SortPipe } from '../../../pipe/sort.pipe';

@Component({
  selector: 'app-purchaserequest-list',
  templateUrl: './purchaserequest-list.component.html',
  styleUrls: ['./purchaserequest-list.component.css']
})
export class PurchaserequestListComponent implements OnInit {
	purchaserequests : Purchaserequest[];
	title : string =  'Purchase Requests On File';
	//mock login-hardcoded now for testing
	user: User;
	
	sortBy: string = "Id";
	
constructor(private purchaserequestSvc: PurchaserequestService, private userSvc : UserService, private sysSvc: SystemService) { }

	ngOnInit() {
		this.purchaserequestSvc.list().subscribe(prs => {
        	this.purchaserequests = prs;
			this.populateUserName();
    	});
	  
		if(this.sysSvc.data.user.loggedIn){
			this.user = this.sysSvc.data.user.instance;
		}else{
			console.error("User not logged in.");
		}
	}
	
	changeStatusNew(pr: Purchaserequest): void{
		console.log("PR changeStatus = " + pr)
		pr.Status = "New"; 
		this.purchaserequestSvc.change(pr).subscribe();
		pr.ReasonForRejection = "";
		this.purchaserequestSvc.change(pr).subscribe();
	}
	
	populateUserName(): void {
    	for (let pr of this.purchaserequests) {
    		pr.UserName = pr.User.UserName;
    	}
	}
	
	setSortBy(column: string): void {
    this.sortBy = column;
  }

}
