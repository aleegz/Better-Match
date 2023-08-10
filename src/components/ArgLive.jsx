import React from "react";
import { useData } from "../context/DataContext";
import LeagueImage from "../components/img/LeagueImg.jsx";
import TeamImage from "../components/img/TeamImg.jsx";

const ArgLive = () => {
  const { data } = useData();

    if (!data || data.length === 0) {
        return <div>
            No hay datos disponibles
        </div>;
    }

    const partido0 = data[0];

    return (
        <div>
        {/* <h2>Detalles del Partido 0</h2>
        <p>Fixture: {partido0.fixture.status.long + " " + partido0.fixture.status.seconds}</p>
        <p>Liga: {partido0.league.id}</p>
        <LeagueImage leagueId={partido0.league.id} />
        <p>
        Equipos: 
        {partido0.teams.home.id} ({partido0.teams.home.goals}) - {partido0.teams.away.id} ({partido0.teams.away.goals})
        </p>
        <TeamImage teamId={partido0.teams.home.id} />
        <TeamImage teamId={partido0.teams.away.id} /> */}

        </div>
    );
};

export default ArgLive;
