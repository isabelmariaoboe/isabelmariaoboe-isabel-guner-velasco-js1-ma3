const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordening=-rating&key=80168c6cc0ef43d5a0fc60b06dc0d6db"

async function getGames () {
    // fetch

    const response = await fetch(url);

    const results = await response.json();

    const games = results.all;

    // test: console.log(results);
    // loop

}

getGames ();