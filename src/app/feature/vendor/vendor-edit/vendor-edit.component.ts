import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VendorService } from '../../../service/vendor.service';
import { Vendor } from '../../../model/vendor';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {

title: string = "Edit Vendor";
	
	id: string;
	resp: any;
	
	vendor: Vendor;
	

constructor(private vendorSvc: VendorService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
	this.route.params.subscribe(parms => this.id = parms['id']);
	this.vendorSvc.get(this.id).subscribe(vendors => {
		this.vendor = vendors.length > 0 ? vendors[0] : null;
		console.log(this.vendor);
		});
  }
	
change() {
	console.log(this.vendor);
	this.vendorSvc.change(this.vendor).subscribe(resp => {
		this.resp = resp;
		console.log("vendor-Change: ", this.resp);
		this.router.navigate(['/vendor/list']);
		});
}

}
