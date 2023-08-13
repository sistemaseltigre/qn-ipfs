//Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTMyNTcxNjY3MA
var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://api.quicknode.com/ipfs/rest/v1/pinning/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTMyNTcxNjY3MA',
  'headers': {
    'x-api-key': 'QN_332867af84214ff0a35a5a2b0af20103'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
