const assert = require('assert');

var fromWhere = function(regNum)
{
    if(regNum.startsWith("CY"))
    {
      return "Bellville";
    }

    else if(regNum.startsWith("CJ"))
    {
      return "Paarl";
    }

    else if(regNum.startsWith("CA"))
    {
      return "Cape Town";
    }

    else
    {
      return "Some other place!";
    }
};
assert.equal(fromWhere("CA 1256-4366"), "Cape Town");
assert.equal(fromWhere("CY 1262-1896"), "Bellville");
assert.equal(fromWhere("DT 1256-4366 JHB"), "Some other place!");
assert.equal(fromWhere("CJ 9444-8855"), "Paarl");

fromWhere("CA 1256-4366");
fromWhere("CY 1262-1896");
fromWhere("DT 1256-4366 JHB");
fromWhere("CJ 9444-8855");

var place = fromWhere("CA 1256-4366");
var place1 = fromWhere("CY 1262-1896");
var place2 = fromWhere("DT 1256-4366 JHB");
var place3 = fromWhere("CJ 9444-8855");

console.log(place);
console.log(place1);
console.log(place2);
console.log(place3);
