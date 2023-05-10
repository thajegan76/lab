"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = exports.Status = exports.Passport = void 0;
var Passport = /** @class */ (function () {
    // over here the parameters automatically become properties 
    // since we use the access modifiers over the paramters
    function Passport(country, passportNumber) {
        this.country = country;
        this.passportNumber = passportNumber;
    }
    return Passport;
}());
exports.Passport = Passport;
var Status = /** @class */ (function () {
    function Status(status, reason) {
        this.status = status;
        this.reason = reason;
    }
    return Status;
}());
exports.Status = Status;
// this is how you create a typescript class (blueprint)
var Student = /** @class */ (function () {
    // this is how you create constructor
    function Student(firstName, lastName, icNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.icNumber = icNumber;
        this.getStatus();
    }
    Student.prototype.getStatus = function () {
        // here the status is typescript object (is instance of typescript class Status)
        this.status = new Status(true, "Good Student");
        // last time typescript object is different from javascript object
        var jsonStatus = { status: true, reason: "Good Student" };
        this.status = new Status(jsonStatus["status"], jsonStatus["reason"]);
        // in recent version of typescript they made typescript object 
        // same as javascript object
        this.status = { status: true, reason: "Good Student" };
        this.status = jsonStatus;
    };
    // this is how you create methods
    Student.prototype.display = function () {
        var _a, _b, _c, _d;
        console.log("First Name:", this.firstName);
        console.log("Last Name:", this.lastName);
        console.log("IC Number:", this.icNumber);
        console.log("Passport Country:", (_a = this.passport) === null || _a === void 0 ? void 0 : _a.country);
        console.log("Passport Number:", (_b = this.passport) === null || _b === void 0 ? void 0 : _b.passportNumber);
        if (this.passport) {
            console.log("Passport Country:", (_c = this.passport) === null || _c === void 0 ? void 0 : _c.country);
            console.log("Passport Number:", (_d = this.passport) === null || _d === void 0 ? void 0 : _d.passportNumber);
        }
        console.log("Status:", this.status.status);
        console.log("Reason:", this.status.reason);
    };
    return Student;
}());
exports.Student = Student;
// this is how you create object
// let parker:Student = new Student("Peter", "Parker", 720102121234);
// parker.display();
