//first occurance - 1, Sunday - 0
function getNthWeekday(startDate, occurance = 1, day = 0) {
  let startOfMonth = moment(startDate).utc().startOf("month").startOf("week");
  let finalDate = moment(startDate)
    .utc()
    .startOf("month")
    .startOf("week")
    .add(day, "d")
    .add(occurance, "w");
  if (finalDate.month() == startOfMonth.month()) {
    finalDate = finalDate.subtract(1, "w");
  }
  return finalDate;
}
