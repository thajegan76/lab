export class Passport {
    // over here the parameters automatically become properties 
    // since we use the access modifiers over the paramters
    public constructor(public country:string, public passportNumber:string) {}
}

export class Status {
    public constructor(public status:boolean, public reason:string) {}
}

// this is how you create a typescript class (blueprint)
export class Student {
    // this is how you create properties
    public firstName:string;
    public lastName:string;
    public icNumber:number;
    public passport?:Passport;
    // I am promising typescript that this property will be
    // initialized before it is being used
    public status!:Status;

    // this is how you create constructor
    public constructor(firstName:string, lastName:string, icNumber:number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.icNumber = icNumber;
        this.getStatus();
    }

    public getStatus() {

        // here the status is typescript object (is instance of typescript class Status)
        this.status = new Status(true, "Good Student");

        // last time typescript object is different from javascript object
        let jsonStatus = { status:true, reason:"Good Student" };
        this.status = new Status(jsonStatus["status"], jsonStatus["reason"]);

        // in recent version of typescript they made typescript object 
        // same as javascript object
        this.status = { status:true, reason:"Good Student" };
        this.status = jsonStatus;

    }

    // this is how you create methods
    public display() {
        console.log("First Name:", this.firstName);
        console.log("Last Name:", this.lastName);
        console.log("IC Number:", this.icNumber);
        console.log("Passport Country:", this.passport?.country);
        console.log("Passport Number:", this.passport?.passportNumber);
        if (this.passport) {
            console.log("Passport Country:", this.passport?.country);
            console.log("Passport Number:", this.passport?.passportNumber);    
        }
        console.log("Status:", this.status.status);
        console.log("Reason:", this.status.reason);
    }
}

// this is how you create object
// let parker:Student = new Student("Peter", "Parker", 720102121234);
// parker.display();