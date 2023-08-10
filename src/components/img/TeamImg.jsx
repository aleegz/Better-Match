import React from "react";

const TeamImage = ({ teamId }) => {
  const imageUrl = `https://media-2.api-sports.io/football/teams/${teamId}.png`;
  
  return <img src={imageUrl} alt={`Team ${teamId}`} />;
};

export default TeamImage;