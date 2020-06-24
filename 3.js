const cheerio = require("cheerio");
const request = require("request");
request(URL, function (error, response, html) {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
    let metaData = $("meta").get();
    console.log(metaData);
  }
});