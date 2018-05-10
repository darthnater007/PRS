import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Purchaserequest } from '../../../model/purchaserequest';
import { PurchaserequestService } from '../../../service/purchase-request.service';
import { User } from '../../../model/user';
import { SystemService } from '../../../service/system.service';

@Component({
  selector: 'app-purchaserequest-create',
  templateUrl: './purchaserequest-create.component.html',
  styleUrls: ['./purchaserequest-create.component.css']
})
export class PurchaserequestCreateComponent implements OnInit {
	title: string = "Create New Purchase Request";
	resp: any;
	purchaserequest: Purchaserequest = new Purchaserequest(0, null, '', '', null, '', '', 0, null, '');
	user: User;
	
create() {
	console.log('create a purchaserequest...');
	this.purchaserequestSvc.create(this.purchaserequest).subscribe(resp => {
		this.resp = resp;
		console.log (this.resp);
		console.log("purchaserequest-Create: ", this.resp);
		this.router.navigate(['/purchaserequest/detail/' + this.resp]);
		});
}

constructor(private purchaserequestSvc: PurchaserequestService, private sysSvc: SystemService, private router: Router) { }

  ngOnInit() {
	  if(this.sysSvc.data.user.loggedIn){
		this.user = this.sysSvc.data.user.instance;
		this.purchaserequest.User = this.user;
	}else{
		console.error("User not logged in.");
	}
  }

}