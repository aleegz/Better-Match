const xDate = ()=>{
    const date = new Date();
    const months = new Array ("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    const months2 = new Array ("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
    const days = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    const days2 = new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado");
    const today = (days[date.getDay()] + ", " + date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear());
    const today2 = (days[date.getDay()] + ", " + date.getDate() + " de " + months[date.getMonth()] + " de " + date.getFullYear());
    
    let dateyymmdd = new Date();
    let d = dateyymmdd.getDate();
    let m = dateyymmdd.getMonth() + 1;
    const xdate = [dateyymmdd.getFullYear(), (m < 10) ? '0' + m : m, (d < 10) ? '0' + d : d].join('-');

    return {
        xdate
    }
    
}

export default xDate;