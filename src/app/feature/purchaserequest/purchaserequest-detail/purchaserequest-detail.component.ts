import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PurchaserequestService } from '../../../service/purchase-request.service';
import { Purchaserequest } from '../../../model/purchaserequest';

import { Purchaserequestlineitem } from '../../../model/purchaserequestlineitem';
import { PurchaserequestlineitemService } from '../../../service/purchaserequestlineitem.service';

@Component({
  selector: 'app-purchaserequest-detail',
  templateUrl: './purchaserequest-detail.component.html',
  styleUrls: ['./purchaserequest-detail.component.css']
})
export class PurchaserequestDetailComponent implements OnInit {

	title: string = "Purchase Request Details";
	purchaserequest: Purchaserequest;
	prlis: Purchaserequestlineitem[];
	prID: number;

constructor(private purchaserequestSvc: PurchaserequestService, private prliSvc: PurchaserequestlineitemService, private router: Router, private route: ActivatedRoute) { }

	ngOnInit() {
		this.route.params.subscribe(parms => {
			let id = parms["id"];
			this.prID = id;
			this.getPurchaserequestById(id);
		});
		
		console.log('Getting list of prlis...');
this.purchaserequestSvc.prliList(this.prID).subscribe(prlis => {
        this.prlis = prlis;
        console.log(prlis);
    });
	}
		
	getPurchaserequestById(id){
	this.purchaserequestSvc.get(id).subscribe (purchaserequests => {
		this.purchaserequest = purchaserequests.length > 0 ? purchaserequests[0] : null;
		console.log("purchaserequest: " + this.purchaserequest); 
		});
	}
	
	remove(): void {
		this.purchaserequestSvc.remove(this.purchaserequest.Id).subscribe(res => {
		this.router.navigateByUrl("/purchaserequest/list");
			});
	}
	
removeLine(prliID: number): void {
		this.prliSvc.remove(prliID).subscribe(res => {
		this.ngOnInit();
		})
	}
	
	submit(): void {
		this.purchaserequestSvc.submit(this.purchaserequest).subscribe(res => {
			this.router.navigateByUrl("/purchaserequest/list");
		});
	}

}
