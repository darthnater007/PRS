import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PurchaserequestlineitemService } from '../../../service/purchaserequestlineitem.service';
import { Purchaserequestlineitem } from '../../../model/purchaserequestlineitem';

import { Product } from '../../../model/product';
import { ProductService } from '../../../service/product.service';

@Component({
  selector: 'app-purchaserequestlineitem-edit',
  templateUrl: './purchaserequestlineitem-edit.component.html',
  styleUrls: ['./purchaserequestlineitem-edit.component.css']
})
export class PurchaserequestlineitemEditComponent implements OnInit {

title: string = "Edit Line Item";
	
	id: number;
	prid: number;
	resp: any;
	
	purchaserequestlineitem: Purchaserequestlineitem;
	products: Product[];
	

constructor(private purchaserequestlineitemSvc: PurchaserequestlineitemService, private productSvc: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
	this.productSvc.list().subscribe(products => this.products = products);
	this.route.params.subscribe(parms => {
			this.id = parms["id"];
			this.prid = parms["prid"];
			console.log(this.prid);
		});
		this.purchaserequestlineitemSvc.get(this.id).subscribe(purchaserequestlineitems => {
		this.purchaserequestlineitem = purchaserequestlineitems.length > 0 ? purchaserequestlineitems[0] : null;
		console.log(this.purchaserequestlineitem);
		});
  }
	
	change() {
		console.log(this.purchaserequestlineitem);
		this.purchaserequestlineitemSvc.change(this.purchaserequestlineitem).subscribe(resp => {
			this.resp = resp;
			console.log("purchaserequestlineitem-Change: ", this.resp);
			this.router.navigate(['/purchaserequest/detail/'+ this.prid]);
			});
	}
	
	compareFn(p1:number, p2:number): boolean{
			return p1 === p2;
		}

}