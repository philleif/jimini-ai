"use strict"

let indicators = {}

indicators.long = async (candles) => {
  for(let idx in candles) {
    if(typeof(candles[idx - 1]) != "undefined") {
      candles[idx].long = candles[idx].close > candles[idx - 1].close
    } else {
      candles[idx].long = null
    }
  }

  return candles
}

module.exports = {
  indicators
}