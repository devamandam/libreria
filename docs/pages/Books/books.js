// Client ID and API key from the Developer Console
var CLIENT_ID = 'ultra-ridge-318120';
var API_KEY = 'AIzaSyBANI_56bbe4k_aoWXwYsTrGZAmzn5r26o';

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";

var spreadsheetId = "1HkM5_zm1cxcUlb0-hpYVwhXyWxhbwn7b1uiIOHlgw-0"


gapi.client.sheets.spreadsheets.values.get({
  spreadsheetId: spreadsheetId,
  range: 6
}).then((response) => {
  var result = response.result;
  var numRows = result.values ? result.values.length : 0;
  console.log(`${numRows} rows retrieved.`);
});
