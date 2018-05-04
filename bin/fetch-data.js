"use strict"

let exchanges = require("../lib/exchanges")
let csv = require("../lib/csv")

const run = async (args) => {
  console.log("ok")

  let candles = await exchanges.fetchCandles("tXRPUSD", "15m")

  await csv.writeCsv(candles)

  console.log("Wrote csv to", filePath)
}

run()