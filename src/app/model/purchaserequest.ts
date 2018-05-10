import { User } from '@model/user';

export class Purchaserequest {
	Id: number;
	User: User;
	UserName: string;
	Description: string;
	Justification: string;
	DateNeeded: Date;
	DeliveryMode: string;
	Status: string;
	Total: number;
	SubmittedDate: Date;
	ReasonForRejection: string;
	
	constructor(Id: number = 0 , User: User = null, Description: string = '', Justification: string = '', DateNeeded: Date = null, DeliveryMode: string = '', Status: string = '', Total: number = null, SubmittedDate: Date = null, ReasonForRejection: string = ''){
		this.Id = Id;
		this.User = User;
		this.Description = Description;
		this.Justification = Justification;
		this.DateNeeded = DateNeeded;
		this.DeliveryMode = DeliveryMode;
		this.Status = Status;
		this.Total = Total;
		this.SubmittedDate = SubmittedDate;
		this.ReasonForRejection = ReasonForRejection;
	}
	
	about(): string{
		return 'PurchaseRequest = ${this.Id}';
	}
	
}
