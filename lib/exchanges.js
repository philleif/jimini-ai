"use strict"

require("dotenv").config()

const axios = require("axios")

const fetchCandles = async (pairs, timeframe) => {
  try {
    let allCandles = []

    for (let pair of pairs) {
      let response = await axios.get(
        `https://api.bitfinex.com/v2/candles/trade:${timeframe}:${pair}/hist?limit=500`
      )

      allCandles = allCandles.concat(
        response.data.reduceRight((result, candle) => {
          result.push({
            mts: candle[0],
            open: candle[1],
            close: candle[2],
            high: candle[3],
            low: candle[4],
            volume: candle[5],
            pair: pair,
            timeframe: timeframe
          })

          return result
        }, [])
      )
    }

    return allCandles
  } catch (error) {
    throw error
  }
}

module.exports = {
  fetchCandles
}
