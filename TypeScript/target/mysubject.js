"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var mysubject = new rxjs_1.Subject();
// whenever you subscribe to a subject the subject will create
// and array and keep all the observables inside the array
// whenever the subject produce a new data the data will be send
// to all the observables inside the array
mysubject.subscribe(function (data) {
    console.log("First Subscription:", data);
});
var count = 0;
var intervalhandler = setInterval(function () {
    mysubject.next(Math.random());
    count = count + 1;
    if (count > 3)
        clearInterval(intervalhandler);
}, 1000);
// you can see the data is shared amoung the various observers
// that is why we say Subject is Multicast
mysubject.subscribe(function (data) {
    console.log("Second Subscription:", data);
});
