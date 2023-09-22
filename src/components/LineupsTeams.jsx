import data from "../data/matches7.json";
import LineupGrid from "./LineupGrid";

const LineupsTeams = () => {
  const homeFormation = data.response[0].formation;
  const formation = homeFormation.split('-').map(Number);
  const homePlayers = data.response[0].startXI;
  const homePlyColors = data.response[0].team.colors.player; // add .primary or .number
  const homeGkColors = data.response[0].team.colors.goalkeeper;
  const homeNumColors = "#" + data.response[0].team.colors.player.number;
  const match = data.response;
  
  console.log(data);


  <LineupGrid startXI={data.response[0].startXI} formation={formation} />
};

export default LineupsTeams;