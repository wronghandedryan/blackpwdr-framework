const ZapClient = require('zaproxy');
 
const zapOptions = {
  apiKey: <the key you supplied to ZAP when you started it>, // I.E. 'v90dnblpqs1pcac991tn2oudl'
  proxy: <protocol>://<host>:<port> // I.E. 'http://192.168.0.10:8080'
};
 
const zaproxy = new ZapClient(zapOptions);

zaproxy.spider.scanAsUser(contextId, userId, sutBaseUrl, maxChildren, recurse, subtreeonly, (err, resp) => {
  if (err) // Handle the error.
  if (resp) // Handle the response.
});

await zaproxy.spider.scanAsUser(contextId, userId, sutBaseUrl, maxChildren)
  .then(
    resp => console.log(JSON.stringify(resp)),
    err => `Error occurred while attempting to scan as user. Error was: ${err.message}`
  );
