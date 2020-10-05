require("dotenv").config();
const fs = require("fs");
const fetch = require("node-fetch");

const getRates = async () => {
  try {
    const fixerUrl = `http://data.fixer.io/api/latest?access_key=${process.env.FIXER_KEY}`;
    const response = await fetch(fixerUrl);
    const json = await response.json();
    const rates = JSON.stringify(json.rates, null, 2);

    fs.writeFileSync("currencyRates.json", rates);
    console.log("Fetching Success!!");
  } catch (e) {
    console.log(e);
  }
};

getRates();
