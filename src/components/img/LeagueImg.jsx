// without use
import React from "react";

const LeagueImage = ({ leagueId }) => {
  const imageUrl = `https://media-3.api-sports.io/football/leagues/${leagueId}.png`;
  
  return <img src={imageUrl} alt={`League ${leagueId}`} />;
};

export default LeagueImage;