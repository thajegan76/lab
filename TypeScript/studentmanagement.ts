import { Student, Passport, Status } from "./student";
import Graduate from "./graduate";

let passport:Passport = new Passport("Singapore", "A49493933");
let status:Status = new Status(true, "Good Student")
let parker:Student = new Student("David", "Parker", 720102121234);
parker.passport = passport;
parker.status = status;
parker.display();

let peter:Graduate = new Graduate("Parker", "Peter", 720102121234, 87409);
peter.passport = passport;
peter.status = status;
peter.display();