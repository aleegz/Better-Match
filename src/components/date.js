let date = new Date();
let d = date.getDate();
let m = date.getMonth() + 1;
const xdate = [date.getFullYear(), (m < 10) ? '0' + m : m, (d < 10) ? '0' + d : d].join('-');

export default xdate;