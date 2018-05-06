import { Purchaserequest } from '@model/purchaserequest';
import { Product } from '@model/product';

export class Purchaserequestlineitem {
	Id: number;
	PurchaseRequest: Purchaserequest;
	Product: Product;
	Quantity: number;
	
	constructor(Id: number = null, PurchaseRequest: Purchaserequest = null, Product: Product = null, Quantity: number = null){
		this.Id = Id;
		this.PurchaseRequest = PurchaseRequest;
		this.Product = Product;
		this.Quantity = Quantity;
	}
}
