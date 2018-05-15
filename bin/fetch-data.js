"use strict"

const { fetchCandles } = require("../lib/exchanges")
const { writeCsv, cleanCsv } = require("../lib/csv")
const { indicators } = require("../lib/indicators")

const run = async () => {
  //let pairs = ["tXRPUSD", "tBTCUSD", "tEOSUSD", "tETHUSD", "tBCHUSD", "tLTCUSD"]
  let pairs = ["tXRPUSD"]
  let timeframe = "15m"
  let candles = await fetchCandles(pairs, timeframe)
  let filePath = "./data/candles.csv"

  for (let indicator of Object.keys(indicators)) {
    candles = await indicators[indicator](candles)
  }

  let data = await cleanCsv(candles)

  await writeCsv(data, filePath, true)
}

run()
