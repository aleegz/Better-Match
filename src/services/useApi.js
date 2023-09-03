import { useEffect, useState } from "react"

const useApi = (url) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)

  /*const fetchApi = () => {
    fetch(url, {
        headers: {
            "x-apisports-key": "9d9d0f29039d2f857ac61de0bdc4ab3e",
        },
    })

    .then(response => {
      return response.json()
    })
    .then(json => {
      console.log(json)
      setLoading(false)
      setData(json)
      const partidos = json.response;
      partidos.forEach((partido, index) => {
        const fixtureData = partido.fixture;
        const leagueData = partido.league;
        const teamsData = partido.teams;
        const statusData = partido.status;
        const updateData = partido.update;
    });
    })
  };

  useEffect(() => {
    fetchApi();
  }, []);*/

  return { loading, data }
};

export default useApi;