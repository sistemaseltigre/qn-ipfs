/*
Upload file to Quicknode IPFS
curl --location 'https://api.quicknode.com/ipfs/rest/v1/s3/put-object' \
--header 'x-api-key: QN_332867af84214ff0a35a5a2b0af20103' \
--form 'Body=@"quicknodeimg.webp"' \
--form 'Key="quicknodeimgCURL.webp"' \
--form 'ContentType="text"'
*/
var request = require('request');
var fs = require('fs');
var options = {
  'method': 'POST',
  'url': 'https://api.quicknode.com/ipfs/rest/v1/s3/put-object',
  'headers': {
    'x-api-key': 'QN_332867af84214ff0a35a5a2b0af20103'
  },
  formData: {
    'Body': {
      'value': fs.createReadStream('ipfs_getall.js'),
      'options': {
        'filename': '',
        'contentType': null
      }
    },
    'Key': 'ipfs_getall.js',
    'ContentType': 'text'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
