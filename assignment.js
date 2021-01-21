// function for kilometer to meter conversion
function kilometerToMeter(kilo) {
  // handle negavite value of kilometer
  if (kilo < 0) {
    return "Please enter positive value";
  } else {
    var meter = kilo * 1000; // 1 kilometer = 1000 meter
  }
  return meter;
}

var result = kilometerToMeter(10);
console.log(result);

//function to calculate the budget for buying ghori, phone and laptop
function budgetCalculator(ghori, phone, laptop) {
  var totalValue;
  // handle negative number of items
  if (ghori < 0 || phone < 0 || laptop < 0) {
    return "Please enter positive value";
  }
  //calculating the total budget for ghori, phone and laptop
  else {
    totalValue = ghori * 50 + phone * 100 + laptop * 500;
  }
  return totalValue;
}

var result = budgetCalculator(10, 8, 5);
console.log(result);

//function to find the total hotel cost in terms of day
function hotelCost(day) {
  var totalCost;
  var remainder;
  // handle the unexpected value
  if (day < 0) {
    return "Please enter positive value";
  }
  if (day > 0 && day <= 10) {
    totalCost = day * 100;
  } else if (day > 10 && day <= 20) {
    remainder = day - 10;
    totalCost = 10 * 100 + remainder * 80;
  } else if (day > 20) {
    remainder = day - 20;
    totalCost = 10 * 100 + 10 * 80 + remainder * 50;
  }
  return totalCost;
}

var result = hotelCost(100);
console.log(result);

// function to find the largest name in an array
function megaFriend(arr) {
  // handle the empty array
  if (arr.length == 0) {
    return "Please insert some names in the array index";
  }
  var bigName;
  var bigNameSize = 0;
  //this will find the largest name in the array and if there are same length of names it will show the first name
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > bigNameSize) {
      bigNameSize = arr[i].length;
      bigName = arr[i];
    }
  }
  return bigName;
}

var result = megaFriend([
  "aluvaja",
  "murivaja",
  "shap",
  "khocchor",
  "bodmaish",
]);
console.log(result);
