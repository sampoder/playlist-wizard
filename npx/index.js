#!/usr/bin/env node

const readline = require("readline");
const fetch = require("node-fetch");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var response;

rl.question("\nEnter song name: ", function (song) {
  rl.question("\nEnter song artist: ", async function (artist) {
    response = await fetch(
      `https://gwas-music.vercel.app/api/add/?song=${song}&artist=${artist}`,
      {
        method: "POST",
      }
    );
    const keywords = require("./keywords.json");
    Object.keys(keywords).forEach(async (keyword) => {
      if (
        response.url
          .toLowerCase()
          .search(keyword) !== -1
      ) {
        console.log(keywords[keyword]);
      }
    });
    rl.close();
  });
});

rl.on("close", function () {
  console.log("\nProgram excited.\n");
  process.exit(0);
});
