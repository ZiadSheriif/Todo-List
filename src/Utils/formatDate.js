/**
 * function that handles  date format
 * @param {string} dateString
 * @returns formated date  string
 */
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const formatedDate = day + "/" + month + "/" + year;
  return formatedDate;
};

export default formatDate;
