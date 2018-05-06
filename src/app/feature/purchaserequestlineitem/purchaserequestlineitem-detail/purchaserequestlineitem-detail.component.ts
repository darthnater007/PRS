import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PurchaserequestlineitemService } from '../../../service/purchaserequestlineitem.service';
import { Purchaserequestlineitem } from '../../../model/purchaserequestlineitem';

@Component({
  selector: 'app-purchaserequestlineitem-detail',
  templateUrl: './purchaserequestlineitem-detail.component.html',
  styleUrls: ['./purchaserequestlineitem-detail.component.css']
})
export class PurchaserequestlineitemDetailComponent implements OnInit {

	title: string = "Line Item Details";
	purchaserequestlineitem: Purchaserequestlineitem;
	prid: number;

constructor(private purchaserequestlineitemSvc: PurchaserequestlineitemService, private router: Router, private route: ActivatedRoute) { }

	ngOnInit() {
		this.route.params.subscribe(parms => {
			let id = parms["id"];
			this.getPurchaserequestlineitemById(id);
			this.prid = parms["prid"];
		});
		console.log("prid = ", this.prid);
	}
		
	getPurchaserequestlineitemById(id){
	this.purchaserequestlineitemSvc.get(id).subscribe (purchaserequestlineitems => {
		this.purchaserequestlineitem = purchaserequestlineitems.length > 0 ? purchaserequestlineitems[0] : null;
		console.log("purchaserequestlineitem: " + this.purchaserequestlineitem); 
		});
	}
	
	remove(): void {
		this.purchaserequestlineitemSvc.remove(this.purchaserequestlineitem.Id).subscribe(res => {
		console.log(res);
			this.router.navigateByUrl("/purchaserequest/detail/" + this.prid);
			});
	}

}
