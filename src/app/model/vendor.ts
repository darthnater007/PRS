export class Vendor {
	Id: number;
	Code: string;
	Name: string;
	Address: string;
	City: string;
	State: string;
	Zip: string;
	PhoneNumber: string;
	Email: string;
	Preapproved: boolean;


	about(): string{
			return 'Vendor Name = ${this.Name} ';
	}

		constructor(Id: number = 0, Code: string = '', Name: string = '', Address: string = '', City: string = '', State: string = '', Zip: string = '', PhoneNumber: string = '', Email: string = '', Preapproved: boolean = false){
			this.Id = Id;
			this.Code = Code;
			this.Name = Name;
			this.Address = Address;
			this.City = City;
			this.State = State;
			this.Zip = Zip;
			this.PhoneNumber = PhoneNumber;
			this.Email = Email;
			this.Preapproved = Preapproved;
	}
}
