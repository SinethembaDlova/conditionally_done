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
fromWhere("CA 1256-4366");
assert.equal(fromWhere("CA 1256-4366"), "Cape Town");

var place = fromWhere("CA 1256-4366");
console.log(place);
