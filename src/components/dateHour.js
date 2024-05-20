const dateHour = (match)=> {
    const dateHourUtc = new Date(match.fixture.date);
    const options = { timeZone: 'America/Argentina/Buenos_Aires', hour: '2-digit', minute: '2-digit' };
    const formatter = new Intl.DateTimeFormat('es-AR', options);
    const dateHourFormatted = formatter.format(dateHourUtc);
  return (
    dateHourFormatted
  )
}

export default dateHour;