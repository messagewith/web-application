import moment from "moment";

export const getMessageTime = (
  time: number,
  locale: string,
  text: (
    id: string,
    values?: { [p: string]: string } | undefined
  ) => string | undefined
): string => {
  const messDate = moment(time);
  const currDate = moment();
  messDate.locale(locale);

  if (messDate.isSame(currDate, "day")) {
    return messDate.format("HH:mm");
  }

  if (messDate.diff(currDate, "day") === -1) {
    return `${text("time.yesterday")}, ${messDate.format("HH:mm")}`;
  }

  return messDate.format("DD MMMM YYYY, HH:mm");
};
