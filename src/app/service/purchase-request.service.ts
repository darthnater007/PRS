import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { Purchaserequest } from '../model/purchaserequest';
import { Purchaserequestlineitem } from '../model/purchaserequestlineitem';

const url = 'http://localhost:8080/PurchaseRequests/';
const urlPrliList= 'http://localhost:8080/PurchaseRequestLineItems/LinesForPR';

@Injectable()
export class PurchaserequestService {

list(): Observable<Purchaserequest[]> {
	return this.http.get(url + 'List') as Observable<Purchaserequest[]>;
}

create(purchaserequest: Purchaserequest): Observable<any>{
	console.log("purchaserequestsvc.create...");
	return this.http.post(url + "Add", purchaserequest) as Observable<any>;
}

get(id): Observable<Purchaserequest[]> {
	return this.http.get(url+"Get?id="+id) as Observable<Purchaserequest[]>;
  }
  
remove(id): Observable<any> {
	return this.http.get(url+"Remove?id="+id) as Observable<any>;
  }
  
change(purchaserequest: Purchaserequest): Observable<any> {
	return this.http.post(url+"Change", purchaserequest) as Observable<any>;
  }
	
prliList(id): Observable<Purchaserequestlineitem[]>{
	return this.http.get(urlPrliList + '?id=' + id) as Observable<Purchaserequestlineitem[]>;
}
	
submit(purchaserequest: Purchaserequest): Observable<any>{
	return this.http.post(url + "Submit", purchaserequest) as Observable<any>;
}
	
getReview(id): Observable<any>{
	return this.http.get(url + 'GetRequestReview?id='+ id + '&status=review');
}

approve(purchaserequest: Purchaserequest): Observable<any>{
	return this.http.post(url + "Approve", purchaserequest) as Observable<any>;
}
	
reject(purchaserequest: Purchaserequest): Observable<any>{
	return this.http.post(url + "Reject", purchaserequest) as Observable<any>;
}
	
constructor(private http: HttpClient) { } 

}