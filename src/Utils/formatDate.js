/**
 * Formats a given date string in the format "day/month/year".
 *
 * @param {string} dateString - A string representing a valid date.
 * @returns {string} A string representing the formatted date in the format "day/month/year".
 */
const formatDate = (dateString) => {
  // Create a new Date object from the dateString parameter.
  const date = new Date(dateString);

  // Extract the day, month, and year components from the Date object.
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  // Format the date as a string in the format "day/month/year".
  const formattedDate = `${day}/${month}/${year}`;

  // Return the formatted date string.
  return formattedDate;
};

export default formatDate;
