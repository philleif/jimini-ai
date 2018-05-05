"use strict"

const { fetchCandles } = require("../lib/exchanges")
const { writeCsv, cleanCsv } = require("../lib/csv")
const { indicators } = require("../lib/indicators")

const run = async () => {
  let candles = await fetchCandles("tXRPUSD", "15m")

  Object.keys(indicators).forEach(async indicator => {
    candles = await indicators[indicator](candles)
  })

  let data = await cleanCsv(candles)

  let filePath = "data/candles.csv"
  await writeCsv(data, filePath)

  filePath = "data/candles-test.csv"
  await writeCsv(data, filePath)

}

run()
