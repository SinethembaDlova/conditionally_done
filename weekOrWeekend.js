const assert = require('assert');


var weekOrWeekend = function(day)
{
  if(day.startsWith('S'))
  {
    return "weekend";
  }

  else
  {
    return "week";
  }
};
weekOrWeekend("Saturday");
assert.equal(weekOrWeekend("Saturday"), "weekend");

var worw = weekOrWeekend("Saturday");
console.log(worw);
