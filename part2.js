// /* 1. Create a function, inside the function add a second function, and again add a third function into the second function.
// 2.	Create 3 variables.
// 3.	Define 3 the variables in the correct place so that:
// a.	The first variable is accessible inside every function.
// b.	The second variable is accessible inside the second and third function only.
// c.	The third variable is accessible inside the third function only.
// 4.	Define a 4th variable inside the 3rd function. This variable should be accessible by every function.
// 5.	Create a scope inside the 3rd function, place a variable inside it that is only accessible inside that scope.
// 6.	Create an object which contains a function which console.logs this.something, where something is any name you like.
// 7. Create an object that contains information about the make/model of a car
// 8. Create a function outside the object which returns the make/model of the car
// 9. Insert a reference to the function into the object created
// 10. Invoke the method on the object (you should see the make/model)
// 11. Use call to execute the function using a different context
// 12. Use bind to create an instance of the function that is bound to a different object
// 13. Use a try/catch block to ensure you understand the syntax
// 14. Create a timer that runs once
// 15. Create a timer that runs many times
// 16. Clear one of the timers
// 17. Use a ternary (edited) */

// //  17.  use a ternary

var productQuantity = 1;

var message =
  productQuantity >= 1
    ? `to the basket`
    : `We're sorry, the product is out of stock`;

console.log(message);

// //  or with function?

function productQuantity(x) {
  return x >= 1 ? "to the basket" : "Out of stock";
}

// // productQuantity(5);

// //  15. create a timer that runs manny times (with Russell help)

function changeColor() {
  let colors = ["hexcode1", "hexcode2", "hexcode3", "hexcode4", "hexcode5"];
  console.log(colors[Math.floor(Math.random() * 5)]);
}

const timer = setInterval(changeColor, 2000);

clearInterval(timer);

// // 6.	Create an object which contains a function which console.logs this.something, where something is any name you like.

var rectangle = {
  x: 12,
  y: 52,
  perimeter: function () {
    return this.x * this.y;
  },
};

console.log(rectangle.perimeter());

// //  just another ex
var runPace = {
  runtimeMinutes: 40,
  distKm: 3.5,
  pacePerHour: function () {
    return this.runtimeMinutes / this.distKm;
  },
};

console.log(Math.round(runPace.pacePerHour()));

// //  7.  Create an object that contains information about the make/model of a car
// //  8. Create a function outside the object which returns the make/model of the car
// // 9. Insert a reference to the function into the object created
// // 10. Invoke the method on the object (you should see the make/model)

const niceCar = {
  make: "BMW",
  model: "320i",
  myCar: myCar,
};

function myCar() {
  console.log(`I drive ${this.make} ${this.model}`);
}

niceCar.myCar();

// // 11. Use call to execute the function using a different context

const someBook = {
  author: "Kim Stanley Robinson",
  title: "Red Mars",
  bookTitle: function () {
    console.log(`I read ${this.author} ${this.title}`);
  },
};

someBook.bookTitle.call({ author: "Adam Grant", title: "Think Again" });

// // 12. Use bind to create an instance of the function that is bound to a different object

const wowBook = {
  author: "Kim Stanley Robinson",
  title: "Red Mars",
  bookTitle: function () {
    console.log(`I read ${this.author} ${this.title}`);
  },
};

const logBind = wowBook.bookTitle.bind({
  author: "Thomas Friedman",
  title: "Hot, Flat and Crowded",
});

logBind();

// //  13.  Use a try/catch block to ensure you understand the syntax
// //  scaryBook doesn't exist

try {
  console.log(wowBook);
  // console.log(scaryBook)
} catch (error) {
  console.log("does not exist");
}

// //  1. Create a function, inside the function add a second function, and again add a third function into the second function.
// // 2.	Create 3 variables.
// // 3.	Define 3 the variables in the correct place so that:
// // a.	The first variable is accessible inside every function.
// // b.	The second variable is accessible inside the second and third function only.
// // c.	The third variable is accessible inside the third function only.
// // 4.	Define a 4th variable inside the 3rd function. This variable should be accessible by every function.
// // 5.	Create a scope inside the 3rd function, place a variable inside it that is only accessible inside that scope.

function addNumbers() {
  var a = 8;
  var b = 10;
  result = a + b;
  console.log(result);

  function multiplyNumbers() {
    var c = 6;
    result = c * a;
    console.log(result);

    function incrementNumber() {
      z = 5;
      {
        let y = 10;
      }
      var x = a;
      a++;
      console.log(a);
    }

    incrementNumber();
  }

  multiplyNumbers();
}

addNumbers();

//  this timer runs whole array on repeat if not cleared

function officeDays() {
  let weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  for (let i = 0; i < weekdays.length; i += 1) console.log(weekdays[i]);
}

const repeatDaysOnce = setTimeout(officeDays, 2000);

clearTimeout(repeatDaysOnce);

officeDays();

//  this timer creates 5 timers!

// function officeHours() {
//   let workdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
//   workdays.forEach((value, index) =>
//     setTimeout(() => console.log(value), index * 2000)
//   );
// }

// officeHours();

//  this timer runs weekdays

let workdays1 = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
let count = 0;
function go() {
  setTimeout(() => {
    go();
    console.log(workdays1[count]);
    count++;
    if (count > 4) count = 0;
  }, 2000);
}
go();


