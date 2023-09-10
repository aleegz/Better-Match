import React from 'react';

const xdate = () => {
    let dateyymmdd = new Date();
    let d = dateyymmdd.getDate();
    let m = dateyymmdd.getMonth() + 1;
    const xdate = [dateyymmdd.getFullYear(), (m < 10) ? '0' + m : m, (d < 10) ? '0' + d : d].join('-');
  return (
    {
        date: xdate,
        hour: dateyymmdd.getHours()
    }
  );
}

export default xdate;