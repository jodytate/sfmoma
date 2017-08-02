const chalkAnimation = require('chalk-animation');
const request = require('request');
const urlSlug = require('url-slug');

const sfmomaToken = require('./sfmomaToken');

const baseUrl = 'https://www.sfmoma.org/api/collection/';
const getArt = (type, term) => {
  return {
    url: `${baseUrl}${type}/${urlSlug(term)}`,
    headers: {
      'Authorization': sfmomaToken.token
    }
  }
};

// as types you can request:
// artists
// artworks
// exhibitions

request(getArt('artists', 'Matthew Barney'), function (error, response, body) {
  if (error) console.log('error:', error);
  console.log(chalkAnimation.rainbow(body));
});
