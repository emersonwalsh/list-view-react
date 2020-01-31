/**
 * formateDate
 * util function to return a date in MM/DD/YYYY format
 * @param date javascript date object
 */
const formatDate = (date) => {
    let mm = date.getMonth() + 1;
    let dd = date.getDate();
    let yyyy = date.getFullYear();
    return mm + '/' + dd + '/' + yyyy;
}

/**
 * calculateDifferenceBetweenDates
 * util function to calculate the number of days between two dates
 * @param date1 javascript date object
 * @param date2 javascript date object
 */
const calculateDifferenceBetweenDates = (date1, date2) => {
    let timeDifference = date2.getTime() - date1.getTime(); // milliseconds
    let dayDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
    return dayDifference;
}

export {
    formatDate,
    calculateDifferenceBetweenDates
};