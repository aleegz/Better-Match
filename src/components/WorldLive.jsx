import React, { useEffect } from "react";
import { useData } from "../context/DataContext";
import { fetchData } from "../services/api";
import LeagueImage from "../components/img/LeagueImg.jsx";
import TeamImage from "../components/img/TeamImg.jsx";

const WorldLive = () => {
  const { data } = useData();

  useEffect(() => {
    const url = "https://v3.football.api-sports.io/fixtures?live=667-667";
    });

    if (!data || data.length === 0) {
        return <div>
            No hay datos disponibles
        </div>;
    }

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

export default WorldLive;