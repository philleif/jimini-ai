"use strict"

const exchanges = require("../lib/exchanges")
const csv = require("../lib/csv")

const run = async () => {
  let candles = await exchanges.fetchCandles("tXRPUSD", "15m")

  await csv.writeCsv(candles)
}

run()
