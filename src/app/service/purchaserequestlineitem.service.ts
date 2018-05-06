import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { Purchaserequestlineitem } from '../model/purchaserequestlineitem';

const url = 'http://localhost:8080/PurchaseRequestLineItems/';

@Injectable()
export class PurchaserequestlineitemService {

create(purchaserequestlineitem: Purchaserequestlineitem): Observable<any>{
	console.log("purchaserequestlineitemsvc.create...");
	return this.http.post(url + "Add", purchaserequestlineitem) as Observable<any>;
}

get(id): Observable<Purchaserequestlineitem[]> {
	return this.http.get(url+"Get?id="+id) as Observable<Purchaserequestlineitem[]>;
  }
  
remove(id): Observable<any> {
	return this.http.get(url+"Remove?id="+id) as Observable<any>;
  }
  
change(purchaserequestlineitem: Purchaserequestlineitem): Observable<any> {
	return this.http.post(url+"Change", purchaserequestlineitem) as Observable<any>;
  }
	
constructor(private http: HttpClient) { }

}