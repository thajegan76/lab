"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
// observer is the place where we can keep the values
var myobservable = new rxjs_1.Observable(function (observer) {
    observer.next({ user: "admin", password: "password_123" });
});
// now we can subscribe to the observable to receive the values
// whenever we subscribe to the observable the lambda function 
// in the observable gets executed and emit the data
// first subscription
myobservable.subscribe(function (data) {
    console.log("User", data.user, "Password", data.password);
});
// second subscription
myobservable.subscribe(function (data) {
    console.log("User", data.user, "Password", data.password);
});
// the data emit by the observable is sharable among the multiple observers
// this is called multicasting
// Eventhough the above example looks like observable is multicast, 
// however this is not true in observable becase observable is unicast
// subject is multicast
var mysecondobservable = new rxjs_1.Observable(function (observer) {
    var count = 0;
    var intervalhandler = setInterval(function () {
        observer.next(Math.random());
        count = count + 1;
        if (count > 3)
            clearInterval(intervalhandler);
    }, 1000);
});
mysecondobservable.subscribe(function (data) {
    console.log("First Subscription:", data);
});
mysecondobservable.subscribe(function (data) {
    console.log("Second Subscription:", data);
});
