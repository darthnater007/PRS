import { Vendor } from './vendor';

export class Product {
	Id: number;
	Vendor: Vendor;
	VendorName: string;
	PartNumber: string;
	Name: string;
	Price: number;
	Unit: string;
	PhotoPath: string;
	
	constructor(Id: number = 0, Vendor: Vendor = null, PartNumber: string = '', Name: string = '', Price: number = null, Unit: string = '', PhotoPath: string = ''){
		this.Id= Id;
		this.Vendor = Vendor;
		this.PartNumber = PartNumber;
		this.Name = Name;
		this.Price = Price;
		this.Unit = Unit;
		this.PhotoPath = PhotoPath;
	}
	
	about(): string{
			return 'Product = ${this.Name}';
	}
}
