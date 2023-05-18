type Dates = {
  startDate: string;
  endDate: string;
};

const errorString = "string length is invalid";

const extractDates = (customer: any) => {
  // your code here
  try {
    const ListOfPeriods: string[] = customer?.ListOfPeriods.split("|");
    const result: Dates[] = [];
    for (const ListOfPeriod of ListOfPeriods) {
      const dateArray = ListOfPeriod.trim().split("-");
      const startDate = dateArray[0].trim();
      const endDate = dateArray[1].trim();
      if (startDate.length !== 10 || endDate.length !== 10) {
        return [errorString];
      };
      result.push({
        startDate,
        endDate
      });
    }

    return result;
  } catch (error) {
    return [];
  }

};

export default extractDates;
