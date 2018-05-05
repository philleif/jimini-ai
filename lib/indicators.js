"use strict"

let indicators = {}

indicators.long = async (candles) => {
  for(let idx in candles) {
    if(typeof(candles[idx - 1]) != "undefined") {
      candles[idx].long = candles[idx].close > candles[idx - 1].close ? 1 : 0
    } else {
      candles[idx].long = null
    }
  }

  return candles
}

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

module.exports = {
  indicators
}