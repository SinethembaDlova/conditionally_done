var autoAlarm = function(tommorow)
{
  if(!(tommorow.endsWith('day')))
  {
    return "Thats not a day of the week, try a right day";
  }

  else if(tommorow.startsWith("Sat"))
  {
    return "8 am";
  }
  else if(tommorow.startsWith("Sun"))
  {
    return "7 am";
  }

  else
  {
    return "5 am";
  }
};

autoAlarm("Sunday");

var tommTime = autoAlarm("Sunday");
console.log(tommTime);
