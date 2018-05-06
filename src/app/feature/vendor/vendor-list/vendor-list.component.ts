import { Component, OnInit } from '@angular/core';

import { VendorService } from '../../../service/vendor.service';
import { Vendor } from '../../../model/vendor';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {
	vendors : Vendor[];
	title : string =  'Vendors On File';
	
constructor(private vendorSvc: VendorService) { }

  ngOnInit() {
		this.vendorSvc.list().subscribe(vendors => {
			console.log(vendors);
			this.vendors = vendors;
		})
  }

}
