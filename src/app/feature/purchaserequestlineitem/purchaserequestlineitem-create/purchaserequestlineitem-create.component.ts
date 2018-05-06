import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Purchaserequestlineitem } from '../../../model/purchaserequestlineitem';
import { PurchaserequestlineitemService } from '../../../service/purchaserequestlineitem.service';

import { Purchaserequest } from '../../../model/purchaserequest';
import { PurchaserequestService } from '../../../service/purchase-request.service';

import { Product } from '../../../model/product';
import { ProductService } from '../../../service/product.service';

@Component({
  selector: 'app-purchaserequestlineitem-create',
  templateUrl: './purchaserequestlineitem-create.component.html',
  styleUrls: ['./purchaserequestlineitem-create.component.css']
})
export class PurchaserequestlineitemCreateComponent implements OnInit {
	title: string = "Create New Line Item";
	resp: any;
	prid: number;
	purchaserequestlineitem: Purchaserequestlineitem = new Purchaserequestlineitem(null, null, null, null);
	purchaserequest: Purchaserequest;
	products: Product[];
	
	create() {
		this.purchaserequestlineitem.PurchaseRequest = this.purchaserequest;
    	console.log('prli service create...');
	console.log("Before service call: ", this.purchaserequestlineitem);

		this.purchaserequestlineitemSvc.create(this.purchaserequestlineitem).subscribe(resp => {
        this.resp = resp;
	console.log("RESP = ", this.resp);
	console.log("PR ID: ", this.purchaserequestlineitem.PurchaseRequest.Id);
        this.router.navigateByUrl('/purchaserequest/detail/'+this.prid);
      });
	}

constructor(private purchaserequestlineitemSvc: PurchaserequestlineitemService, private productSvc: ProductService, private purchaserequestSvc: PurchaserequestService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
	this.route.params.subscribe(parms => {
  		this.prid = parms["id"];
		console.log(this.prid);
  		this.purchaserequestSvc.get(this.prid)
  			.subscribe(purchaserequests => {
  				this.purchaserequest = purchaserequests.length > 0 ? purchaserequests[0] : null;
				this.purchaserequestlineitem.PurchaseRequest = this.purchaserequest;
				console.log("PR OnInit: " + this.purchaserequest);
				console.log("PRLI OnInit: " + this.purchaserequestlineitem);
  			});
	  
	this.productSvc.list().subscribe(products => this.products = products);
	});
  }
}