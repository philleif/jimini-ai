"use strict"

const parse = require("csv-parse/lib/sync")
const fs = require("fs")

const run = async () => {
  try {
    let net = 0 // net profit
    let tradeAmount = 100 // trade size in dollars
    let trades = []
    let openTrade = false
    let csv = fs.readFileSync("./data/candles.csv")
    // read in CSV of trades
    let candles = parse(csv)

    console.log(candles)

    // for each row:

    // make object with the indicators we want

    // get trade prediction on that object

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
