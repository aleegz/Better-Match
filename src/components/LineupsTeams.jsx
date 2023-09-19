import data from "../data/matches6.json";

const LineupsTeams = () => {
  const homeFormation = data.response[0].formation;
  console.log(+homeFormation[0])
  const homePlayers = data.response[0].startXI;
  const awayPlayers = data.response[1].startXI;
  const homePlyColors = data.response[0].team.colors.player; // add .primary or .number
  const awayPlyColors = data.response[1].team.colors.player;
  const homeGkColors = data.response[0].team.colors.goalkeeper;
  const awayGkColors = data.response[1].team.colors.goalkeeper;
  const homeNumColors = "#" + data.response[0].team.colors.player.number;
  const awayNumColors = "#" + data.response[1].team.colors.player.number;
  const match = data.response;
  
  console.log(data);

        for (let i = 0; i < 11; i++) {
            <p>{i}</p>
        }
};

export default LineupsTeams;