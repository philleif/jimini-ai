"use strict"

let exchanges = require("../lib/exchanges")

const run = async (args) => {
  console.log("ok")

  let candles = await exchanges.fetchCandles("tXRPUSD", "15m")

  console.log(candles)
}

run()