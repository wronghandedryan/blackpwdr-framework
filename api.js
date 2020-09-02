const tor_axios = require("tor-axios");
const tor = tor_axios.torSetup({
  ip: "localhost",
  port: 9050,
  controlPort: "9051",
  controlPassword: "giraffe",
});

let response = await tor.get("http://api.ipify.org");
let ip = response.data;
console.log(ip);

await tor.torNewSession(); //change tor ip

response = await tor.get("http://api.ipify.org");
ip = response.data;
console.log(ip);
