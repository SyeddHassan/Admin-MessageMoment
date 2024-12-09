export const AmChartsHeatmapData = () => {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  
  const hours = [
    "12am",
    "6am",
    "12pm",
    "6pm",
    "1am",
    "7am",
    "1pm",
    "7pm",
    "2am",
    "8am",
    "2pm",
    "8pm",
    "3am",
    "9am",
    "3pm",
    "9pm",
    "4am",
    "10am",
    "4pm",
    "10pm",
    "5am",
    "11am",
    "5pm",
    "11pm",
  ];

  const data = [];
  for (const weekday of weekdays) {
    for (const hour of hours) {
      data.push({
        hour: hour,
        weekday: weekday,
        value: Math.floor(Math.random() * 10) + 1,
      });
    }
  }
  return data;
};
