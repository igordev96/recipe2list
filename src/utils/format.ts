export const formatDate = (params: {
  dateInMilli: number;
  weekday?: true;
  month?: true;
  day?: true;
  year?: true;
  hour?: true;
  minute?: true;
}) => {
  const { dateInMilli, weekday, month, day, year, hour, minute } = params;
  const options: Intl.DateTimeFormatOptions = {
    weekday: weekday && 'long',
    month: month && 'short',
    day: day && 'numeric',
    year: year && 'numeric',
    hour12: false,
    hour: hour && '2-digit',
    minute: minute && '2-digit',
  };
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(
    dateInMilli,
  );

  return formattedDate;
};
