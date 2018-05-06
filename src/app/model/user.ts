export class User {
	Id: number;
	UserName: string;
	Password: string;
	FirstName: string;
	LastName: string;
	PhoneNumber: string;
	Email: string;
	Reviewer: boolean;
	Admin: boolean;

	about(): string{
			return 'Name = ${this.UserName}, First Name = ${this.FirstName}, Last Name = ${this.LastName}';
	}

constructor(Id: number = 0, UserName: string = '', Password: string = '', FirstName: string = '', LastName: string = '', PhoneNumber: string = '', Email: string = '', Reviewer: boolean = false, Admin: boolean = false){
		this.Id = Id;
		this.UserName = UserName;
		this.Password = Password;
		this.FirstName = FirstName;
		this.LastName = LastName;
		this.PhoneNumber = PhoneNumber;
		this.Email = Email;
		this.Reviewer = Reviewer;
		this.Admin = Admin;
	}
}
