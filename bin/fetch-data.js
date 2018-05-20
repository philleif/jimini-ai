"use strict"

const { fetchCandles } = require("../lib/exchanges")
const { writeCsv, cleanCsv } = require("../lib/csv")
const { indicators } = require("../lib/indicators")

const run = async () => {
  let pairs = ["tXRPUSD", "tBTCUSD", "tEOSUSD", "tETHUSD", "tBCHUSD", "tLTCUSD",
               "tZECUSD", "tIOTUSD", "tXMRUSD", "tETCUSD", "tNEOUSD", "tOMGUSD",
               "tDSHUSD", "tTRXUSD", "tBTGUSD", "tXRPBTC", "tEOSBTC", "tETHBTC",
               "tBCHBTC", "tLTCBTC", "tZECBTC", "tIOTBTC", "tXMRBTC", "tETCBTC",
               "tNEOBTC", "tOMGBTC", "tDSHBTC", "tTRXBTC", "tBTGBTC"]
  //let pairs = ["tXRPUSD"]
  let timeframes = ["1h", "3h", "6h", "12h"]
  let filePath = "./data/candles.csv"
  let allCandles = []

  for (let timeframe of timeframes) {
    for (let pair of pairs) {
      console.log("Fetching data for", pair, timeframe)

      await sleep(3000)

      let candles = await fetchCandles([pair], timeframe)

      for (let indicator of Object.keys(indicators)) {
        candles = await indicators[indicator](candles)
      }

      for (let candle of candles) {
        allCandles.push(candle)
      }
    }
  }

  let data = await cleanCsv(allCandles)

  await writeCsv(data, filePath, true)
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

run()
