"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var student_1 = require("./student");
var graduate_1 = __importDefault(require("./graduate"));
var passport = new student_1.Passport("Singapore", "A49493933");
var status = new student_1.Status(true, "Good Student");
var parker = new student_1.Student("David", "Parker", 720102121234);
parker.passport = passport;
parker.status = status;
parker.display();
var peter = new graduate_1.default("Parker", "Peter", 720102121234, 87409);
peter.passport = passport;
peter.status = status;
peter.display();
