"use strict"

let indicators = {}

indicators.percentChange = async (candles) => {
  for(let idx in candles) {
    if(typeof(candles[idx - 1]) != "undefined") {
      let delta = candles[idx].close - candles[idx - 1].close

      candles[idx].percentChange = (delta/candles[idx].close) * 100
    } else {
      candles[idx].percentChange = null
    }
  }

  return candles
}

indicators.strategy = async (candles) => {
  for(let idx in candles) {
    if(typeof(candles[idx - 1]) != "undefined") {
      candles[idx].strategy = candles[idx].close > candles[idx - 1].close ? "LONG" : "SHORT"
    } else {
      candles[idx].strategy = null
    }
  }

  return candles
}

module.exports = {
  indicators
}