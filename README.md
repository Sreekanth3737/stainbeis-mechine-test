<h1>Stainbeis- Mechine-test</h1>
<h6>install all dependencies </h6>
<li>express</li>
<li>nodemon</li>
<li>axios</li>
<li>dotenv</li>
<h5>http://localhost:3000/api/rate/?currencyCode=ZWL</h5>
<p>{
  "result": 7.59881,
  "currencyCode": "ZWL"
}</p>

<h5>http://localhost:3000/api/bitcoin/?currencyCode=ZWL</h5>
<p>
{
  "bitc": {
    "symbol": "btcinr",
    "baseAsset": "btc",
    "quoteAsset": "ZWL",
    "openPrice": 12802710.65111,
    "lowPrice": 12386060.3,
    "highPrice": 12815393.065000001,
    "lastPrice": 12477268.81643,
    "volume": "5.67705",
    "bidPrice": 12477268.81643,
    "askPrice": 12612725.20349,
    "at": 1665229620000
  }
  </p>

