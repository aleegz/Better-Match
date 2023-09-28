let date = new Date(),
	d = date.getDate();
    m = date.getMonth() + 1,
	xdate = [date.getFullYear(), (m < 10) ? '0' + m : m, (d < 10) ? '0' + d : d].join('-');

fetch("https://v3.football.api-sports.io/odds/live", {
	"method": "GET",
	"headers": {
		"x-apisports-key": "9d9d0f29039d2f857ac61de0bdc4ab3e"
	}
})
.then(response => response.json())
.then(data => {
	console.log(data);

  const partidos = data.response;
	partidos.forEach((partido, index) => {
		const fixtureData = partido.fixture;
		const leagueData = partido.league;
		const teamsData = partido.teams;
		const statusData = partido.status;
		const updateData = partido.update;

		console.log(`Datos del partido ${index}:`);
		console.log("Fixture:", fixtureData);
		console.log("Liga:", leagueData);
		console.log("Equipos:", teamsData);
		console.log("Estado:", statusData);
		console.log("Última actualización:", updateData);
  });
})

.catch(err => {
	console.log(err);
});