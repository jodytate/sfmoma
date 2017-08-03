const chalkAnimation = require('chalk-animation');
const Promise = require('bluebird');
const request = Promise.promisify(require('request'));;
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

request(getArt('artists', 'Matthew Barney'))
  .then((response) => {
    console.log(chalkAnimation.rainbow(response.body));
  })
  .catch((error) => {
    console.log(error);
  });
