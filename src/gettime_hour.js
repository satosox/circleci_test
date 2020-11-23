function gettime_hour() {
    const date = new Date();
    return date.getTimezoneOffset() / 60;
}
module.exports = gettime_hour;

