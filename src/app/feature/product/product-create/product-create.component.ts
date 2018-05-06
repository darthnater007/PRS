import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../../model/product';
import { ProductService } from '../../../service/product.service';
import { Vendor } from '../../../model/vendor';
import { VendorService } from '../../../service/vendor.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
	title: string = "Create New Product";
	resp: any;
	product: Product = new Product(0, null, '', '', null, '', null);
	vendors: Vendor[];
	
create() {
	console.log('create a product...');
	console.log (this.product);
	this.productSvc.create(this.product).subscribe(resp => {
		this.resp = resp;
		console.log("product-Create: ", this.resp);
		this.router.navigate(['/product/list']);
		});
}

constructor(private productSvc: ProductService, private vendorSvc: VendorService, private router: Router) { }

  ngOnInit() {
	this.vendorSvc.list().subscribe(vendors => this.vendors = vendors);
  }

}