import { Student } from "./student";

class Graduate extends Student {

    public alumniNumber:number;

    // constructor overridding
    public constructor (firstName:string, lastName:string, 
        icNumber:number, alumniNumber:number) {
            // super is the keyword that let us to refer back to parent
            // here super is referring to the constructor of Student Class
            super(firstName, lastName, icNumber);
            this.alumniNumber = alumniNumber;
    }

    // method overriding
    public display() {
        super.display();
        console.log("Alumini Number:", this.alumniNumber);
    }

}

export default Graduate;