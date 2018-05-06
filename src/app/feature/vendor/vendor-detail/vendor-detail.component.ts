import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorService } from '../../../service/vendor.service';
import { Vendor } from '../../../model/vendor';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

	title: string = "Vendor Details";
	vendor: Vendor;

constructor(private vendorSvc: VendorService, private router: Router, private route: ActivatedRoute) { }

	ngOnInit() {
		this.route.params.subscribe(parms => {
			let id = parms["id"];
			this.getVendorById(id);
		});
	}
		
	getVendorById(id){
	this.vendorSvc.get(id).subscribe (vendors => {
		this.vendor = vendors.length > 0 ? vendors[0] : null;
		console.log("vendor: " + this.vendor); 
		});
	}
	
	remove(): void {
		this.vendorSvc.remove(this.vendor.Id).subscribe(res => {
		console.log(res);
		this.router.navigateByUrl("/vendor/list");
			});
	}

}
