"use strict"

require("dotenv").config()

const axios = require("axios")
const BFX = require("bitfinex-api-node")

const fetchCandles = async (pair, timeframe) => {
  try {
    let response = await axios.get(
      `https://api.bitfinex.com/v2/candles/trade:${timeframe}:${pair}/hist?limit=500`
    )

    return response.data
  } catch (error) {
    throw error
  }
}


module.exports = {
  fetchCandles
}