"use strict"

const csv = require("csvtojson")
const fs = require("fs")
const { predict } = require("../lib/predict")

const run = async () => {
  try {
    let features = ["adx", "cci", "rocr", "hikkake", "harami", "closingMarubozu",
      "onNeck", "longLineCandle", "hikkakeModified", "apo", "cmo", "adx",
      "cvi", "plus_dm", "minus_dm", "plus_di", "minus_di", "dpo", "kvo",
      "fosc", "fisher", "fisher_signal", "dx", "linregslope", "macd", "macd_signal",
      "macd_histogram", "mfi", "mom", "obv", "ppo", "pvi", "rsi", "stoch_k", "stoch_d",
      "atr", "trix", "ultosc", "vosc", "willr", "cmo", "cci", "adosc", "adxr", "ao",
      "aroonosc"
    ]
    let net = 0 // net profit
    let tradeAmount = 100 // trade size in dollars
    let trades = []
    let openTrade = false
    let csvFilePath = "./data/candles.csv"

    // read in CSV of trades
    let candles = await csv().fromFile(csvFilePath)

    // for each candle:
    for (let candle of candles.slice(1,50)) {
      // make object with the indicators we want
      let predictObject = []
      features.forEach(feature => predictObject.push(candle[feature]))

      // get trade prediction on that object
      let prediction = await predict(predictObject)

      console.log(prediction)

    }



    // make approriate trade decision:

    // no open trade, BUY, open new trade

    // open trade, BUY, do nothing TODO: accumulate

    // no open trade, SELL, do nothing

    // open trade, SELL, close trade and settle net

    // write CSV of trades
    // print net
  } catch (error) {}
}

run()
