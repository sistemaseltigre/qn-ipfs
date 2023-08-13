/*
Delete file to Quicknode IPFS
curl --location --request DELETE 'https://api.quicknode.com/ipfs/rest/v1/pinning/{Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTMyNTcxODE2NA}' \
--header 'x-api-key: QN_332867af84214ff0a35a5a2b0af20103'
*/
var request = require('request');
var options = {
  'method': 'DELETE',
  'url': 'https://api.quicknode.com/ipfs/rest/v1/pinning/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTMyNTcyMTQ1NQ',
  'headers': {
    'x-api-key': 'QN_332867af84214ff0a35a5a2b0af20103'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
