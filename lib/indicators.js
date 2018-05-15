"use strict"

let tulind = require("tulind")

let indicators = {}

// average directional index
indicators.adx = async candles => {
  try {
    let data = await formatDataForTA(candles)

    let indicator = await getTulipIndicator(
      "adx", // indicator name
      ["adx"], // indicator label
      [data.high, data.low, data.close],
      [5] // options
    )

    candles = await addIndicatorToCandles("adx", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Percent Change (prev to current)
indicators.percentChange = async candles => {
  for (let idx in candles) {
    if (typeof candles[idx - 1] != "undefined") {
      let delta = candles[idx].close - candles[idx - 1].close

      candles[idx].percentChange = delta / candles[idx].close * 100
    } else {
      candles[idx].percentChange = null
    }
  }

  return candles
}

// Correct Change (prev to current)
indicators.strategy = async candles => {
  for (let idx in candles) {
    if (typeof candles[idx - 1] != "undefined") {
      candles[idx].strategy =
        candles[idx].close > candles[idx - 1].close ? "LONG" : "SHORT"
      candles[idx].strategyCode =
        candles[idx].close > candles[idx - 1].close ? "1" : "0"
    } else {
      candles[idx].strategy = null
    }
  }

  return candles
}

// incorporate data from indicator into main candles object
const addIndicatorToCandles = async (name, indicator, candles) => {
  try {
    let offset = candles.length - indicator[name].length

    indicator[name] = fixOffset(offset, indicator[name])

    for (let candle in candles) {
      candles[candle][name] = indicator[name][candle]
    }

    return candles
  } catch (error) {
    throw error
  }
}

// Use tulip to get indicator data
const getTulipIndicator = async (ind, labels, data, options) => {
  try {
    let indicator = {}

    tulind.indicators[ind].indicator(data, options, (err, results) => {
      for (let i = 0; i < results.length; i++) {
        indicator[labels[i]] = results[i]
      }
    })

    return indicator
  } catch (error) {
    throw error
  }
}

// add empty cells to array
const fixOffset = function(offset, arr) {
  for (let i = 0; i < offset; i++) {
    arr.unshift("")
  }

  return arr
}

// format data into a form TALib and Tulip like
const formatDataForTA = async candles => {
  try {
    let data = candles.reduce(
      (prev, candle) => {
        prev.high.push(candle.high)
        prev.low.push(candle.low)
        prev.close.push(candle.close)
        prev.volume.push(candle.volume)

        return prev
      },
      {
        high: [],
        low: [],
        close: [],
        volume: []
      }
    )

    return data
  } catch (error) {
    throw error
  }
}

module.exports = {
  indicators
}
