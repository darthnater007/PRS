import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Purchaserequest } from '../../../model/purchaserequest';
import { PurchaserequestService } from '../../../service/purchase-request.service';

import { User } from '../../../model/user';
import { UserService } from '../../../service/user.service';

import { SystemService } from '../../../service/system.service';

@Component({
  selector: 'app-purchaserequest-review',
  templateUrl: './purchaserequest-review.component.html',
  styleUrls: ['./purchaserequest-review.component.css']
})
export class PurchaserequestReviewComponent implements OnInit {

	title: string = 'Review';
	id: number = 0;
	sortBy: string = "Id";
	
	purchaserequests: Purchaserequest[];
	user: User;
	
constructor(private purchaserequestSvc: PurchaserequestService, private sysSvc: SystemService, private userSvc: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {	
	if(this.sysSvc.data.user.loggedIn){
		this.user = this.sysSvc.data.user.instance;
		this.id= this.user.Id;
	}else{
		console.error("User not logged in.");
	};
	  
	this.purchaserequestSvc.getReview(this.id).subscribe(prs => {
		this.purchaserequests = prs;
        console.log(prs);
		this.populateUserName();
	});
	  
  }//init
	
	
	populateUserName(): void {
    	for (let pr of this.purchaserequests) {
    		pr.UserName = pr.User.UserName;
    	}
	}
	
	setSortBy(column: string): void {
		console.log(column);
    	this.sortBy = column;
	}
	
}//class
