const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordening=-rating&key=80168c6cc0ef43d5a0fc60b06dc0d6db";

// import { displayError } from "./components/displayError";

const resultsContainer = document.querySelector(".results");

function displayError(message) {
  return `<div class="error">${message}</div>`;
}

async function getGames() {
  // handling errors with try/catch
  try {
    // fetch

    const response = await fetch(url);
    const results = await response.json();
    const games = results.results;

    //console.log(results.results);
    // loop

    resultsContainer.innerHTML = "";

    for (let i = 0; i < Math.min(games.length, 8); i++) {
      var currentGame = games[i];
      console.log(
        currentGame.name,
        currentGame.rating,
        currentGame.tags.length
      );
      // adding the results to the HTML
      resultsContainer.innerHTML += `<div class="result">${
        currentGame.name +
        ": " +
        currentGame.rating +
        " Number of tags: " +
        currentGame.tags.length
      }`;
    }
  } catch (error) {
    console.log(error);
    console.log("An error occurred");
    resultsContainer.innerHTML = displayError("An error occurred");
  }
}

getGames();
