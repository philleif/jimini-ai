"use strict"

const csv = require("csvtojson")
const fs = require("fs")
const { writeCsv } = require("../lib/csv")
const { predict } = require("../lib/predict")
const config = require("config")

const run = async () => {
  try {
    let features = config.get("features") // CSV fields for prediction
    let budget = config.get("budget") // trade size in dollars
    let net = 0
    let trades = []
    let trade = false // holder for current trade
    let maxExposure = 0

    // read in CSV of trades
    let candles = await csv().fromFile("./data/candles.csv")

    for (let candle of candles) {
      let price = parseFloat(candle.close)

      // convert candle into array for prediction
      let predictionObject = []
      features.forEach(feature => predictionObject.push(candle[feature]))
      let prediction = await predict(predictionObject)

      // no open trade, BUY signal - new trade
      if (!trade && prediction === 1) trade = await openTrade(price, budget)

      // open trade, BUY signal - add to trade
      if (trade && prediction === 1)
        trade = await accumulate(trade, price, budget)

      // open trade, SELL signal - close trade and calculate our position
      if (trade && prediction === 0) {
        trade = await closeTrade(trade, price)
        trades.push(trade)
        maxExposure =
          maxExposure <= trade.quantity * price
            ? trade.quantity * price
            : maxExposure
        net += trade.net
        budget += trade.net
        trade = false
      }
    }

    // print results
    console.log("Max Exposure: $", maxExposure)
    console.log("Net: $", net)
    console.log("Balance: $", budget)

    // write CSV
    await writeCsv(trades, "./data/trade-results.csv", true)
  } catch (error) {
    throw error
  }
}

const openTrade = async (price, budget) => {
  try {
    let trade = {
      open: price,
      quantity: budget / price
    }

    return trade
  } catch (error) {
    throw error
  }
}

const accumulate = async (trade, price, budget) => {
  try {
    trade.open = (trade.open + price) / 2
    trade.quantity += budget / price

    return trade
  } catch (error) {
    throw error
  }
}

const closeTrade = async (trade, price) => {
  try {
    trade.close = price
    trade.netPrice = trade.close - trade.open
    trade.net = trade.netPrice * trade.quantity

    return trade
  } catch (error) {
    throw error
  }
}

run()
