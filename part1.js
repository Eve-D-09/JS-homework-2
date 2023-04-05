

//   1. Create an array with 10 items

var currencyDayRate = [
    { name: `US Dollar`, rate: `1.09` },
    { name: `Euro`, rate: `1.08` },
    { name: `British Pound`, rate: `0.88` },
    { name: `Australian Dollar`, rate: `1.62` },
    { name: `Canadian Dollar`, rate: `1.47` },
    { name: `Swiss Frank`, rate: `0.99` },
    { name: `Danish Krone`, rate: `7.45` },
    { name: `Japanese Yen`, rate: `144.83` },
    { name: `Mexican Peso`, rate: `19.63` },
    { name: `Norvegian Krone`, rate: `11.40` },
  ];
  
  console.log(currencyDayRate[2]);

  

//  2. update one of the items

currencyDayRate[6] = { name: `Swedish Krone`, rate: `11.40` };

console.log(currencyDayRate[6]);
console.log(currencyDayRate);



//  3. Delete half of the array

var halfCurrency = currencyDayRate.splice(0, currencyDayRate.length / 2);
// how to start from the middle of array??

console.log(halfCurrency);

//  4. Write out each of the array methods


// .pop

currencyDayRate.pop();
// console.log(currencyDayRate);


//  .push

halfCurrency.push({ name: `Icelandic Krone`, rate: `148.30` });
console.log(halfCurrency);

// .unshift, added Turkish Lira to start

halfCurrency.unshift({ name: `Turkish Lira`, rate: `20.86` });
console.log(halfCurrency);

// .shift, removed Lira
halfCurrency.shift();
console.log(halfCurrency);



// .concat halfCurrency + asianCurrency

var asianCurrency = [
    { name: `Indonesian Rupiah`, rate: `1.63` },
    { name: `Philippine Peso`, rate: `59.05` },
    { name: `Singapore Dollar`, rate: `1.44` },
  ];
  
halfCurrency = halfCurrency.concat(asianCurrency);
console.log(halfCurrency);
  
 //  .splice, removed Canadian Dollar
  
halfCurrency.splice(4, 1);
console.log(halfCurrency);
  
// .slice, copy of euro, pound and dollar
  
var secondaryCurr = halfCurrency.slice(1, 4);
console.log(halfCurrency, secondaryCurr);



// .reverse, reversed secondary currencies

secondaryCurr.reverse();
console.log(secondaryCurr);

// for each

// var currencyName = [ 'US Dollar', 'Euro', 'British Pound'];

// currencyName.forEach(myFunction);

// function myFunction(item) {
//   console.log(item);
// }

var currencyName = ["US Dollar", "Euro", "British Pound"];

// currencyName.forEach(element => {
//   console.log(element);
// })

function handler(item, index, array) {
  console.log(item, index, array);
}

currencyName.forEach(handler);


//  .includes

var checkCurrency = halfCurrency.includes("Israel Shekel");

console.log(checkCurrency);

// indexOf

var currencyRate = [1.09, 1.08, 0.88, 1.62, 1.47];

var index = currencyRate.indexOf(0.88);

console.log(index);

// findIndex

var asianCurrency = [
  { name: `Indonesian Rupiah`, rate: `1.63` },
  { name: `Philippine Peso`, rate: `59.05` },
  { name: `Singapore Dollar`, rate: `1.44` },
];

var findIndex = asianCurrency.findIndex(handler);

function handler(item) {
  return item.rate > 2;
}

console.log(findIndex);



// every

var result = currencyRate.every(handler);
console.log(result);

// some

var halfCurrency1 = [
  { name: "US Dollar", rate: 1.09 },
  { name: "Euro", rate: 1.08 },
];

var result = halfCurrency1.some(handler);

function handler(item) {
  return item.rate < 0.5;
}

console.log(result);


//  just another one
var result1 = asianCurrency.some(handler);
function handler(item) {
  return item.rate >= 60;
}

console.log(result1);


// filter

var currencyDayRate1 = [
    { name: `US Dollar`, rate: 1.09 },
    { name: `Euro`, rate: 1.08 },
    { name: `British Pound`, rate: 0.88 },
    { name: `Australian Dollar`, rate: 1.62 },
    { name: `Canadian Dollar`, rate: 1.47 },
    { name: `Swiss Frank`, rate: 0.99 },
    { name: `Danish Krone`, rate: 7.45 },
    { name: `Japanese Yen`, rate: 144.83 },
    { name: `Mexican Peso`, rate: 19.63 },
    { name: `Norvegian Krone`, rate: 11.4 },
  ];
  
var filterResult = currencyDayRate1.filter(handler);
  
function handler(item) {
    return item.name === `Euro` && item.rate.toString().includes("1");
  }
  
console.log(filterResult);


// find

var result = currencyDayRate.find(handler);
console.log(result);

// .sort

// var x = 10;
// var y = 2;

var onlyCurrencyRate = [
  1.09, 1.08, 0.88, 1.62, 1.47, 0.99, 7.45, 144.83, 19.63, 11.4,
];

function handler(x, y) {
  if (x < y) return -1;
  else if (x > y) return 1;
}

onlyCurrencyRate.sort(handler);

console.log(onlyCurrencyRate);


// .map


var currencyDayRate = [
    { name: `US Dollar`, rate: `1.09` },
    { name: `Euro`, rate: `1.08` },
    { name: `British Pound`, rate: `0.88` },
    { name: `Australian Dollar`, rate: `1.62` },
    { name: `Canadian Dollar`, rate: `1.47` },
    { name: `Swiss Frank`, rate: `0.99` },
    { name: `Danish Krone`, rate: `7.45` },
];
  
var mapResult = currencyDayRate.map(handler);
  
function handler(item) {
    return item.name + ' ' + item.rate;
}
  
console.log(mapResult);


// .join

var currencyNames = [
    "US Dollar",
    "Euro",
    "British Pound",
    "Australian Dollar",
    "Canadian Dollar",
    "Swiss Frank",
];
  
var joinResult = currencyNames.join(" | ");
  
console.log(joinResult);
  
  
  
// join ex with objects
  
var halfCurrency1 = [
    { name: `US Dollar`, rate: `1.09` },
    { name: `Euro`, rate: `1.08` },
    { name: `British Pound`, rate: `0.88` },
    { name: `Australian Dollar`, rate: `1.62` },
    { name: `Canadian Dollar`, rate: `1.47` },
    { name: `Swiss Frank`, rate: `0.99` },
    { name: `Japanese Yen`, rate: `144.83` },
    { name: `Mexican Peso`, rate: `19.63` },
    { name: `Norvegian Krone`, rate: `11.40` },
];
  
  
  

console.log(halfCurrency1.map((item) => {return item.name + ' ' + item.rate}).join(' , '));
  
  








