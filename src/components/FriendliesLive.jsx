import React from "react";
import useApi from '../services/useApi';
import LeagueImage from "../components/img/LeagueImg.jsx";
import TeamImage from "../components/img/TeamImg.jsx";

const FriendliesLive = () => {
    const { loading, data } = useApi('https://v3.football.api-sports.io/fixtures?live=667-667');

    if(loading) return <h1>Loading</h1>

  return (
    <div>
      <h1>Friendlies Clubs</h1>
      {data.map((partido, index) => (
            <div key={index}>
                <h2>Liga: {partido.league.name}</h2>
                <LeagueImage leagueId={partido.league.id} />
                <p>
                {partido.teams.home.name} {partido.goals.home} vs{" "}
                {partido.goals.away} {partido.teams.away.name}
                </p>
                <TeamImage teamId={partido.teams.home.id} />
                <TeamImage teamId={partido.teams.away.id} />
            </div>
        ))}
    </div>
  );
};

export default FriendliesLive;