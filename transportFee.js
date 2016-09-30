const assert = require('assert');

var transportFee = function(shift)
{
  if(shift === "morning")
  {
    return "R20";
  }

  else if (shift === "afternoon")
  {
    return "R10, work will cover your transport back home.";
  }

  else
  {
    return "Your transport is free, you're covered.";
  }
};

transportFee("night");
assert.equal(transportFee("night"), "Your transport is free, you're covered.");

var shiftsheet = transportFee("night");
console.log(shiftsheet);
