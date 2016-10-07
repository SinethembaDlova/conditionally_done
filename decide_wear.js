const assert = require('assert');

var wardrobe = ["Shorts", "T-shirt", "Shirt","Jean", "Jacket"];

var whatToWear = function(weather)
{
  if(weather < 20)
  {
    return "You need to wear " + wardrobe[2] + ", " + wardrobe[3] + ", " + wardrobe[4];
  }

  else
  {
    return "You can wear a " + wardrobe[0] + ", " + wardrobe[1];
  }
}

assert.equal(whatToWear(24), "You can wear a " + wardrobe[0] + ", " + wardrobe[1]);
assert.equal(whatToWear(20), "You can wear a " + wardrobe[0] + ", " + wardrobe[1]);
assert.equal(whatToWear(17), "You need to wear " + wardrobe[2] + ", " + wardrobe[3] + ", " + wardrobe[4]);

whatToWear(24);
whatToWear(20);
whatToWear(17);

var results = whatToWear(24);
var results1 = whatToWear(20);
var results2 = whatToWear(17);

console.log(results);
console.log(results1);
console.log(results2);
