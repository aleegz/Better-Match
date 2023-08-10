import React from "react";

const VenueImage = ({ venueId }) => {
  const imageUrl = `https://media.api-sports.io/football/venues/${venueId}.png`;
  
  return <img src={imageUrl} alt={`Venue ${venueId}`} />;
};

export default VenueImage;