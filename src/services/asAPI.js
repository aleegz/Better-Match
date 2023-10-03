const xhr = new XMLHttpRequest();
xhr.open("GET", "https://apiv2.allsportsapi.com/football/?&met=Standings&leagueId=207&APIkey=97eb6f50b554b27b262e55edad0abba234e6825bb51e51c1d3eb12833b0dcc91"); // "https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=97eb6f50b554b27b262e55edad0abba234e6825bb51e51c1d3eb12833b0dcc91&from=2023-10-2&to=2023-10-02"
xhr.send();
xhr.responseType = "json";
xhr.onload = () => {
  if (xhr.readyState == 4 && xhr.status == 200) {
    const data = xhr.response;
    console.log(data);
  } else {
    console.log(`Error: ${xhr.status}`);
  }
};

/*
https://www.football-data.org/
https://www.sportmonks.com/football-api/
https://allsportsapi.com/soccer-football-api
*/