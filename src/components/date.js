let dateyymmdd = new Date();
let d = dateyymmdd.getDate();
let m = dateyymmdd.getMonth() + 1;
const xdate = [dateyymmdd.getFullYear(), (m < 10) ? '0' + m : m, (d < 10) ? '0' + d : d].join('-');

export default xdate;