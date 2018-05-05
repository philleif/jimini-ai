"use strict"

const { fetchCandles } = require("../lib/exchanges")
const { writeCsv, cleanCsv } = require("../lib/csv")
const { indicators } = require("../lib/indicators")

const run = async () => {
  let pairs = ["tXRPUSD", "tBTCUSD", "tEOSUSD", "tETHUSD", "tBCHUSD", "tLTCUSD"]
  let timeframe = "15m"

  let candles = await fetchCandles(pairs, timeframe)

  Object.keys(indicators).forEach(async indicator => {
    candles = await indicators[indicator](candles)
  })

  let data = await cleanCsv(candles)

  let filePath = "tensorflow/data/candles.csv"
  await writeCsv(data, filePath, false)

  filePath = "tensorflow/data/candles-test.csv"
  await writeCsv(
    getRandomSubarray(data, Math.floor(data.length / 10)),
    filePath,
    false
  )
}

function getRandomSubarray(arr, size) {
  let shuffled = arr.slice(0),
    i = arr.length,
    temp,
    index
  while (i--) {
    index = Math.floor((i + 1) * Math.random())
    temp = shuffled[index]
    shuffled[index] = shuffled[i]
    shuffled[i] = temp
  }
  return shuffled.slice(0, size)
}

run()
