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
assert.equal(weekOrWeekend("Saturday"), "weekend");
assert.equal(weekOrWeekend("Tuesday"), "week");

weekOrWeekend("Saturday");
weekOrWeekend("Tuesday");

var worw = weekOrWeekend("Saturday");
var worw1 = weekOrWeekend("Tuesday");

console.log(worw);
console.log(worw1);
