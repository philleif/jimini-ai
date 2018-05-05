"use strict"

const exchanges = require("../lib/exchanges")
const { writeCsv, cleanCsv } = require("../lib/csv")
const { indicators } = require("../lib/indicators")

const fields = ["long", "percentChange"]

const run = async () => {
  let candles = await exchanges.fetchCandles("tXRPUSD", "15m")

  fields.forEach(async field => {
    candles = await indicators[field](candles)
  })

  let data = await cleanCsv(candles)

  //console.log(candles)

  console.log(data)

  await writeCsv(data)
}

run()
