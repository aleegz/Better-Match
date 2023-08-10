import React from "react";

const LeagueImage = ({ leagueId }) => {
  const imageUrl = `https://media.api-sports.io/football/leagues/${leagueId}.png`;
  
  return <img src={imageUrl} alt={`Liga ${leagueId}`} />;
};

export default LeagueImage;