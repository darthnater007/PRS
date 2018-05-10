import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../../service/product.service';
import { Product } from '../../../model/product';

import { SortPipe } from '../../../pipe/sort.pipe';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
	products : Product[];
	title : string =  'Products On File';
	
	sortBy: string = "Id";
	
constructor(private productSvc: ProductService) { }

  ngOnInit() {
		this.productSvc.list().subscribe(products => {
			console.log(products);
			this.products = products;
			this.populateVendorName();
		})
  }
	
		populateVendorName(): void {
    for (let p of this.products) {
      p.VendorName = p.Vendor.Name;
    }
	}
	
	setSortBy(column: string): void {
    this.sortBy = column;
  }

}