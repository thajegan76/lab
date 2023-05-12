import { Observable } from "rxjs";

// observer is the place where we can keep the values
let myobservable = new Observable((observer) => {
    observer.next({user:"admin", password:"password_123"});
})

// now we can subscribe to the observable to receive the values
// whenever we subscribe to the observable the lambda function 
// in the observable gets executed and emit the data

// first subscription
myobservable.subscribe((data:any) => {
    console.log("User", data.user, "Password", data.password);
})

// second subscription
myobservable.subscribe((data:any) => {
    console.log("User", data.user, "Password", data.password);
})

// the data emit by the observable is sharable among the multiple observers
// this is called multicasting
// Eventhough the above example looks like observable is multicast, 
// however this is not true in observable becase observable is unicast
// subject is multicast
let mysecondobservable = new Observable((observer) => {
    let count:number = 0
    let intervalhandler = setInterval(function() {
        observer.next(Math.random());
        count = count + 1;
        if (count > 3) clearInterval(intervalhandler);
    }, 1000)
})

mysecondobservable.subscribe((data:any) => {
    console.log("First Subscription:", data);
})

mysecondobservable.subscribe((data:any) => {
    console.log("Second Subscription:", data);
})