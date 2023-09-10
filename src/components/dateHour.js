import React from 'react'

const dateHour = (match)=> {
    const fechaHoraUtc = new Date(match.fixture.date);
    const options = { timeZone: 'America/Argentina/Buenos_Aires', hour: '2-digit', minute: '2-digit' };
    const formatter = new Intl.DateTimeFormat('es-AR', options);
    const fechaHoraFormateada = formatter.format(fechaHoraUtc);
  return (
    fechaHoraFormateada
  )
}

export default dateHour;