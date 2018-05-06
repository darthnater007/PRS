import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from '../../../model/vendor';
import { VendorService } from '../../../service/vendor.service';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {
	title: string = "Create New Vendor";
	resp: any;
	vendor: Vendor = new Vendor(0, '', '', '', '', '', '', '', '', false);
	
create() {
	console.log('create a vendor...');
	console.log (this.vendor);
	this.vendorSvc.create(this.vendor).subscribe(resp => {
		this.resp = resp;
		console.log("vendor-Create: ", this.resp);
		this.router.navigate(['/vendor/list']);
		});
}

constructor(private vendorSvc: VendorService, private router: Router) { }

  ngOnInit() {
  }

}