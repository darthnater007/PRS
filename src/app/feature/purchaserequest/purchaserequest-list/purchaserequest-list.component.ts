import { Component, OnInit } from '@angular/core';

import { PurchaserequestService } from '../../../service/purchase-request.service';
import { Purchaserequest } from '../../../model/purchaserequest';

import { User } from '../../../model/user';
import { UserService } from '../../../service/user.service';

import { SystemService } from '../../../service/system.service';

@Component({
  selector: 'app-purchaserequest-list',
  templateUrl: './purchaserequest-list.component.html',
  styleUrls: ['./purchaserequest-list.component.css']
})
export class PurchaserequestListComponent implements OnInit {
	purchaserequests : Purchaserequest[];
	title : string =  'Purchase Requests On File';
	//mock login-hardcoded now for testing
	user: User;
	
constructor(private purchaserequestSvc: PurchaserequestService, private userSvc : UserService, private sysSvc: SystemService) { }

  ngOnInit() {
    console.log('Getting list of prs...');
    this.purchaserequestSvc.list().subscribe(prs => {
        this.purchaserequests = prs;
        console.log(prs);
    });
    // mock login - hardcoded for now for testing purposes
    this.userSvc.login("darthNater007", "sixsix6")
      .subscribe(users => {
        if(users.length > 0) {
            this.user = users[0];
            this.sysSvc.data.user.instance = this.user;
            this.sysSvc.data.user.loggedIn = true;
            console.log("SysSvc:", this.sysSvc.debug);   
        }
    })
  }

}
