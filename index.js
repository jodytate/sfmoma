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

request(getArt('artists', 'Matthew Barney'), (error, response, body) => {
  if (error) console.log(error);
  console.log(chalkAnimation.rainbow(body));
});
