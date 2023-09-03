function fetchData() {
  //const url = "https://v3.football.api-sports.io/fixtures?live=667-667"; // https://v3.football.api-sports.io/odds/live
  const headers = {
    "x-apisports-key": "9d9d0f29039d2f857ac61de0bdc4ab3e",
  };

  return fetch(url, {
    method: "GET",
    headers: headers,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      const partidos = data.response;
      partidos.forEach((partido, index) => {
        const fixtureData = partido.fixture;
        const leagueData = partido.league;
        const teamsData = partido.teams;
        const statusData = partido.status;
        const updateData = partido.update;

        // Datos de los equipos
        const homeTeam = partido.teams.home;
        const awayTeam = partido.teams.away;

        console.log(`Datos del partido ${index}:`);
        console.log("Fixture:", fixtureData);
        console.log("Liga:", leagueData);
        console.log("Equipos:", teamsData);
        console.log("Estado:", statusData);
        console.log("Última actualización:", updateData);
        console.log(homeTeam);
        console.log(awayTeam);
      });

      return data;
    })
    .catch((err) => {
      console.error("Error:", err);
      throw err;
    });
  }

export { fetchData };