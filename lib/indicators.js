"use strict"

const tulind = require("tulind")
const talib = require("talib")
const normalizeArray = require("array-normalize")

let indicators = {}

// Upside/downside gap three methods
indicators.upDownThreeMethods = async candles => {
  try {
    let indicator = await getTalibIndicator(
      "upDownThreeMethods",
      "CDLXSIDEGAP3METHODS",
      candles
    )
    candles = await addIndicatorToCandles(
      "upDownThreeMethods",
      indicator,
      candles
    )

    return candles
  } catch (error) {
    throw error
  }
}

// Upside gap two crows
indicators.upsideGapTwoCrows = async candles => {
  try {
    let indicator = await getTalibIndicator(
      "upsideGapTwoCrows",
      "CDLUPSIDEGAP2CROWS",
      candles
    )
    candles = await addIndicatorToCandles(
      "upsideGapTwoCrows",
      indicator,
      candles
    )

    return candles
  } catch (error) {
    throw error
  }
}

// Unique 3 river
indicators.uniqueThreeRiver = async candles => {
  try {
    let indicator = await getTalibIndicator(
      "uniqueThreeRiver",
      "CDLUNIQUE3RIVER",
      candles
    )
    candles = await addIndicatorToCandles(
      "uniqueThreeRiver",
      indicator,
      candles
    )

    return candles
  } catch (error) {
    throw error
  }
}

// Tristar pattern
indicators.tristar = async candles => {
  try {
    let indicator = await getTalibIndicator("tristar", "CDLTRISTAR", candles)
    candles = await addIndicatorToCandles("tristar", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Thrusting pattern
indicators.thrusting = async candles => {
  try {
    let indicator = await getTalibIndicator(
      "thrusting",
      "CDLTHRUSTING",
      candles
    )
    candles = await addIndicatorToCandles("thrusting", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Tasuki gap
indicators.tasuki = async candles => {
  try {
    let indicator = await getTalibIndicator("tasuki", "CDLTASUKIGAP", candles)
    candles = await addIndicatorToCandles("tasuki", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Takuri (Dragonfly Doji with very long lower shadow)
indicators.takuri = async candles => {
  try {
    let indicator = await getTalibIndicator("takuri", "CDLTAKURI", candles)
    candles = await addIndicatorToCandles("takuri", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Stick sandwich
indicators.stickSandwich = async candles => {
  try {
    let indicator = await getTalibIndicator(
      "stickSandwich",
      "CDLSTICKSANDWICH",
      candles
    )
    candles = await addIndicatorToCandles("stickSandwich", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Stalled pattern
indicators.stalledPattern = async candles => {
  try {
    let indicator = await getTalibIndicator(
      "stalledPattern",
      "CDLSTALLEDPATTERN",
      candles
    )
    candles = await addIndicatorToCandles("stalledPattern", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Spinning top
indicators.spinningTop = async candles => {
  try {
    let indicator = await getTalibIndicator(
      "spinningTop",
      "CDLSPINNINGTOP",
      candles
    )
    candles = await addIndicatorToCandles("spinningTop", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Short line candle
indicators.shortLineCandle = async candles => {
  try {
    let indicator = await getTalibIndicator(
      "shortLineCandle",
      "CDLSHORTLINE",
      candles
    )
    candles = await addIndicatorToCandles("shortLineCandle", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Shooting star
indicators.shootingStar = async candles => {
  try {
    let indicator = await getTalibIndicator(
      "shootingStar",
      "CDLSHOOTINGSTAR",
      candles
    )
    candles = await addIndicatorToCandles("shootingStar", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Separating lines
indicators.separatingLines = async candles => {
  try {
    let indicator = await getTalibIndicator(
      "separatingLines",
      "CDLSEPARATINGLINES",
      candles
    )
    candles = await addIndicatorToCandles("separatingLines", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Rising/Falling Three Methods
indicators.riseFallThreeMethods = async candles => {
  try {
    let indicator = await getTalibIndicator(
      "riseFallThreeMethods",
      "CDLRISEFALL3METHODS",
      candles
    )
    candles = await addIndicatorToCandles(
      "riseFallThreeMethods",
      indicator,
      candles
    )

    return candles
  } catch (error) {
    throw error
  }
}

// Rickshaw man
indicators.rickshawMan = async candles => {
  try {
    let indicator = await getTalibIndicator(
      "rickshawMan",
      "CDLRICKSHAWMAN",
      candles
    )
    candles = await addIndicatorToCandles("rickshawMan", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Piercing pattern
indicators.piercing = async candles => {
  try {
    let indicator = await getTalibIndicator("piercing", "CDLPIERCING", candles)
    candles = await addIndicatorToCandles("piercing", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// On neck pattern
indicators.onNeck = async candles => {
  try {
    let indicator = await getTalibIndicator("onNeck", "CDLONNECK", candles)
    candles = await addIndicatorToCandles("onNeck", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Morning star
indicators.morningStar = async candles => {
  try {
    let indicator = await getTalibIndicator(
      "morningStar",
      "CDLMORNINGSTAR",
      candles
    )
    candles = await addIndicatorToCandles("morningStar", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Morning doji star
indicators.morningDojiStar = async candles => {
  try {
    let indicator = await getTalibIndicator(
      "morningDojiStar",
      "CDLMORNINGDOJISTAR",
      candles
    )
    candles = await addIndicatorToCandles("morningDojiStar", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Mat hold
indicators.matHold = async candles => {
  try {
    let indicator = await getTalibIndicator("matHold", "CDLMATHOLD", candles)
    candles = await addIndicatorToCandles("matHold", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Matching low
indicators.matchingLow = async candles => {
  try {
    let indicator = await getTalibIndicator(
      "matchingLow",
      "CDLMATCHINGLOW",
      candles
    )
    candles = await addIndicatorToCandles("matchingLow", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Marobozu
indicators.maruBozu = async candles => {
  try {
    let indicator = await getTalibIndicator("maruBozu", "CDLMARUBOZU", candles)
    candles = await addIndicatorToCandles("maruBozu", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Long line candle
indicators.longLineCandle = async candles => {
  try {
    let indicator = await getTalibIndicator(
      "longLineCandle",
      "CDLLONGLINE",
      candles
    )
    candles = await addIndicatorToCandles("longLineCandle", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Long-legged doji
indicators.longLeggedDoji = async candles => {
  try {
    let indicator = await getTalibIndicator(
      "longLeggedDoji",
      "CDLLONGLEGGEDDOJI",
      candles
    )
    candles = await addIndicatorToCandles("longLeggedDoji", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Ladder bottom
indicators.ladderBottom = async candles => {
  try {
    let indicator = await getTalibIndicator(
      "ladderBottom",
      "CDLLADDERBOTTOM",
      candles
    )
    candles = await addIndicatorToCandles("ladderBottom", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Kicking - bull/bear determined by the longer marubozu
indicators.kickingByLength = async candles => {
  try {
    let indicator = await getTalibIndicator(
      "kickingByLength",
      "CDLKICKINGBYLENGTH",
      candles
    )
    candles = await addIndicatorToCandles("kickingByLength", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Kicking
indicators.kicking = async candles => {
  try {
    let indicator = await getTalibIndicator("kicking", "CDLKICKING", candles)
    candles = await addIndicatorToCandles("kicking", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Inverted hammer
indicators.invertedHammer = async candles => {
  try {
    let indicator = await getTalibIndicator(
      "invertedHammer",
      "CDLINVERTEDHAMMER",
      candles
    )
    candles = await addIndicatorToCandles("invertedHammer", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// In-neck pattern
indicators.inNeck = async candles => {
  try {
    let indicator = await getTalibIndicator("inNeck", "CDLINNECK", candles)
    candles = await addIndicatorToCandles("inNeck", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Identical Three Crows
indicators.identicalThreeCrows = async candles => {
  try {
    let indicator = await getTalibIndicator(
      "identicalThreeCrows",
      "CDLIDENTICAL3CROWS",
      candles
    )
    candles = await addIndicatorToCandles(
      "identicalThreeCrows",
      indicator,
      candles
    )

    return candles
  } catch (error) {
    throw error
  }
}

// Homing pigeon
indicators.homingPigeon = async candles => {
  try {
    let indicator = await getTalibIndicator(
      "homingPigeon",
      "CDLHOMINGPIGEON",
      candles
    )
    candles = await addIndicatorToCandles("homingPigeon", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Modified hikkake pattern
indicators.hikkakeModified = async candles => {
  try {
    let indicator = await getTalibIndicator(
      "hikkakeModified",
      "CDLHIKKAKEMOD",
      candles
    )
    candles = await addIndicatorToCandles("hikkakeModified", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Hikkake pattern
indicators.hikkake = async candles => {
  try {
    let indicator = await getTalibIndicator("hikkake", "CDLHIKKAKE", candles)
    candles = await addIndicatorToCandles("hikkake", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// High wave candle
indicators.highWave = async candles => {
  try {
    let indicator = await getTalibIndicator("highWave", "CDLHIGHWAVE", candles)
    candles = await addIndicatorToCandles("highWave", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Harami cross pattern
indicators.haramiCross = async candles => {
  try {
    let indicator = await getTalibIndicator(
      "haramiCross",
      "CDLHARAMICROSS",
      candles
    )
    candles = await addIndicatorToCandles("haramiCross", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Harami
indicators.harami = async candles => {
  try {
    let indicator = await getTalibIndicator("harami", "CDLHARAMI", candles)
    candles = await addIndicatorToCandles("harami", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Hanging man
indicators.hangingMan = async candles => {
  try {
    let indicator = await getTalibIndicator(
      "hangingMan",
      "CDLHANGINGMAN",
      candles
    )
    candles = await addIndicatorToCandles("hangingMan", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Hammer
indicators.hammer = async candles => {
  try {
    let indicator = await getTalibIndicator("hammer", "CDLHAMMER", candles)
    candles = await addIndicatorToCandles("hammer", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Gravestone doji
indicators.gravestoneDoji = async candles => {
  try {
    let indicator = await getTalibIndicator(
      "gravestoneDoji",
      "CDLGRAVESTONEDOJI",
      candles
    )
    candles = await addIndicatorToCandles("gravestoneDoji", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Up/Down-gap side-by-side white lines
indicators.gapSideSideWhite = async candles => {
  try {
    let indicator = await getTalibIndicator(
      "gapSideSideWhite",
      "CDLGAPSIDESIDEWHITE",
      candles
    )
    candles = await addIndicatorToCandles(
      "gapSideSideWhite",
      indicator,
      candles
    )

    return candles
  } catch (error) {
    throw error
  }
}

// Up/Down-gap side-by-side white lines
indicators.gapSideSideWhite = async candles => {
  try {
    let indicator = await getTalibIndicator(
      "gapSideSideWhite",
      "CDLGAPSIDESIDEWHITE",
      candles
    )
    candles = await addIndicatorToCandles(
      "gapSideSideWhite",
      indicator,
      candles
    )

    return candles
  } catch (error) {
    throw error
  }
}

// Evening star
indicators.eveningStar = async candles => {
  try {
    let indicator = await getTalibIndicator(
      "eveningStar",
      "CDLEVENINGSTAR",
      candles
    )
    candles = await addIndicatorToCandles("eveningStar", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Evening doji star
indicators.eveningDojiStar = async candles => {
  try {
    let indicator = await getTalibIndicator(
      "eveningDojiStar",
      "CDLEVENINGDOJISTAR",
      candles
    )
    candles = await addIndicatorToCandles("eveningDojiStar", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Engulfing pattern
indicators.engulfingPattern = async candles => {
  try {
    let indicator = await getTalibIndicator(
      "engulfingPattern",
      "CDLENGULFING",
      candles
    )
    candles = await addIndicatorToCandles(
      "engulfingPattern",
      indicator,
      candles
    )

    return candles
  } catch (error) {
    throw error
  }
}

// Dragonfly doji
indicators.dragonflyDoji = async candles => {
  try {
    let indicator = await getTalibIndicator(
      "dragonflyDoji",
      "CDLDRAGONFLYDOJI",
      candles
    )
    candles = await addIndicatorToCandles("dragonflyDoji", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Doji Star
indicators.dojiStar = async candles => {
  try {
    let indicator = await getTalibIndicator("dojiStar", "CDLDOJISTAR", candles)
    candles = await addIndicatorToCandles("dojiStar", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Doji
indicators.doji = async candles => {
  try {
    let indicator = await getTalibIndicator("doji", "CDLDOJI", candles)
    candles = await addIndicatorToCandles("doji", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Counterattack
indicators.counterattack = async candles => {
  try {
    let indicator = await getTalibIndicator(
      "counterattack",
      "CDLCOUNTERATTACK",
      candles
    )
    candles = await addIndicatorToCandles("counterattack", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Concealing Baby Swallow
indicators.concealingBabySwallow = async candles => {
  try {
    let indicator = await getTalibIndicator(
      "concealingBabySwallow",
      "CDLCONCEALBABYSWALL",
      candles
    )
    candles = await addIndicatorToCandles(
      "concealingBabySwallow",
      indicator,
      candles
    )

    return candles
  } catch (error) {
    throw error
  }
}

// Closing Marubozu
indicators.closingMarubozu = async candles => {
  try {
    let indicator = await getTalibIndicator(
      "closingMarubozu",
      "CDLCLOSINGMARUBOZU",
      candles
    )
    candles = await addIndicatorToCandles("closingMarubozu", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Breakaway
indicators.breakaway = async candles => {
  try {
    let indicator = await getTalibIndicator(
      "breakaway",
      "CDLBREAKAWAY",
      candles
    )
    candles = await addIndicatorToCandles("breakaway", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Belt hold
indicators.beltHold = async candles => {
  try {
    let indicator = await getTalibIndicator("beltHold", "CDLBELTHOLD", candles)
    candles = await addIndicatorToCandles("beltHold", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Advance block
indicators.advanceBlock = async candles => {
  try {
    let indicator = await getTalibIndicator(
      "advanceBlock",
      "CDLADVANCEBLOCK",
      candles
    )
    candles = await addIndicatorToCandles("advanceBlock", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Abandoned baby
indicators.abandonedBaby = async candles => {
  try {
    let indicator = await getTalibIndicator(
      "abandonedBaby",
      "CDLABANDONEDBABY",
      candles
    )
    candles = await addIndicatorToCandles("abandonedBaby", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Three white soldiers
indicators.threeWhiteSoldiers = async candles => {
  try {
    let indicator = await getTalibIndicator(
      "threeWhiteSoldiers",
      "CDL3WHITESOLDIERS",
      candles
    )
    candles = await addIndicatorToCandles(
      "threeWhiteSoldiers",
      indicator,
      candles
    )

    return candles
  } catch (error) {
    throw error
  }
}

// Three stars in the south
indicators.threeStarsInTheSouth = async candles => {
  try {
    let indicator = await getTalibIndicator(
      "threeStarsInTheSouth",
      "CDL3STARSINSOUTH",
      candles
    )
    candles = await addIndicatorToCandles(
      "threeStarsInTheSouth",
      indicator,
      candles
    )

    return candles
  } catch (error) {
    throw error
  }
}

// Three outside up/down
indicators.threeOutsideUpDown = async candles => {
  try {
    let indicator = await getTalibIndicator(
      "threeOutsideUpDown",
      "CDL3OUTSIDE",
      candles
    )
    candles = await addIndicatorToCandles(
      "threeOutsideUpDown",
      indicator,
      candles
    )

    return candles
  } catch (error) {
    throw error
  }
}

// Three Line Strike
indicators.threeLineStrike = async candles => {
  try {
    let indicator = await getTalibIndicator(
      "threeLineStrike",
      "CDL3LINESTRIKE",
      candles
    )
    candles = await addIndicatorToCandles("threeLineStrike", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Three Inside up/down
indicators.threeInsideUpDown = async candles => {
  try {
    let indicator = await getTalibIndicator(
      "threeInsideUpDown",
      "CDL3INSIDE",
      candles
    )
    candles = await addIndicatorToCandles(
      "threeInsideUpDown",
      indicator,
      candles
    )

    return candles
  } catch (error) {
    throw error
  }
}

// Two Crows
indicators.twoCrows = async candles => {
  try {
    let indicator = await getTalibIndicator("twoCrows", "CDL2CROWS", candles)
    candles = await addIndicatorToCandles("twoCrows", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Dark Cloud Cover
indicators.darkCloudCover = async candles => {
  try {
    let indicator = await getTalibIndicator(
      "darkCloudCover",
      "CDLDARKCLOUDCOVER",
      candles
    )
    candles = await addIndicatorToCandles("darkCloudCover", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Aroon oscillator
indicators.aroonosc = async candles => {
  try {
    let data = await formatDataForTA(candles)
    let indicator = await getTulipIndicator(
      "aroonosc",
      ["aroonosc"],
      [data.high, data.low],
      [14]
    )

    candles = await addIndicatorToCandles("aroonosc", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Awesome Oscillator
indicators.ao = async candles => {
  try {
    let data = await formatDataForTA(candles)
    let indicator = await getTulipIndicator(
      "ao",
      ["ao"],
      [data.high, data.low],
      []
    )

    indicator["ao"] = normalizeArray(indicator["ao"])
    candles = await addIndicatorToCandles("ao", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Average Directional Movement Rating
indicators.adxr = async candles => {
  try {
    let data = await formatDataForTA(candles)
    let indicator = await getTulipIndicator(
      "adxr",
      ["adxr"],
      [data.high, data.low, data.close],
      [14]
    )

    candles = await addIndicatorToCandles("adxr", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Accumulation/Distribution Oscillator
indicators.adosc = async candles => {
  try {
    let data = await formatDataForTA(candles)
    let indicator = await getTulipIndicator(
      "adosc",
      ["adosc"],
      [data.high, data.low, data.close, data.volume],
      [2, 5]
    )

    indicator["adosc"] = normalizeArray(indicator["adosc"])
    candles = await addIndicatorToCandles("adosc", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Commodity channel index
indicators.cci = async candles => {
  try {
    let data = await formatDataForTA(candles)
    let indicator = await getTulipIndicator(
      "cci",
      ["cci"],
      [data.high, data.low, data.close],
      [20]
    )

    candles = await addIndicatorToCandles("cci", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Chande momentum oscillator
indicators.cmo = async candles => {
  try {
    let data = await formatDataForTA(candles)
    let indicator = await getTulipIndicator("cmo", ["cmo"], [data.close], [20])

    candles = await addIndicatorToCandles("cmo", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Williams %R
indicators.willr = async candles => {
  try {
    let data = await formatDataForTA(candles)
    let indicator = await getTulipIndicator(
      "willr",
      ["willr"],
      [data.high, data.low, data.close],
      [14]
    )

    candles = await addIndicatorToCandles("willr", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Volume Oscillator
indicators.vosc = async candles => {
  try {
    let data = await formatDataForTA(candles)
    let indicator = await getTulipIndicator(
      "vosc",
      ["vosc"],
      [data.volume],
      [14, 28]
    )

    candles = await addIndicatorToCandles("vosc", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Ultimate Oscillator
indicators.ultosc = async candles => {
  try {
    let data = await formatDataForTA(candles)
    let indicator = await getTulipIndicator(
      "ultosc",
      ["ultosc"],
      [data.high, data.low, data.close],
      [7, 14, 28]
    )

    candles = await addIndicatorToCandles("ultosc", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Trix
indicators.trix = async candles => {
  try {
    let data = await formatDataForTA(candles)
    let indicator = await getTulipIndicator("trix", ["trix"], [data.close], [15])

    indicator["trix"] = normalizeArray(indicator["trix"])
    candles = await addIndicatorToCandles("trix", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Average true range
indicators.atr = async candles => {
  try {
    let data = await formatDataForTA(candles)
    let indicator = await getTulipIndicator(
      "atr",
      ["atr"],
      [data.high, data.low, data.close],
      [14]
    )

    indicator["atr"] = normalizeArray(indicator["atr"])
    candles = await addIndicatorToCandles("atr", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Stoch
indicators.stoch = async candles => {
  try {
    let data = await formatDataForTA(candles)
    let indicator = await getTulipIndicator(
      "stoch",
      ["stoch_k", "stoch_d"],
      [data.high, data.low, data.close],
      [14, 3, 14]
    )

    candles = await addIndicatorToCandles("stoch_k", indicator, candles)
    candles = await addIndicatorToCandles("stoch_d", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Relative Strength Index
indicators.rsi = async candles => {
  try {
    let data = await formatDataForTA(candles)
    let indicator = await getTulipIndicator("rsi", ["rsi"], [data.close], [14])

    candles = await addIndicatorToCandles("rsi", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Positive volume index
indicators.pvi = async candles => {
  try {
    let data = await formatDataForTA(candles)
    let indicator = await getTulipIndicator(
      "pvi",
      ["pvi"],
      [data.close, data.volume],
      []
    )

    indicator["pvi"] = normalizeArray(indicator["pvi"])
    candles = await addIndicatorToCandles("pvi", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Percentage Price Oscillator
indicators.ppo = async candles => {
  try {
    let data = await formatDataForTA(candles)
    let indicator = await getTulipIndicator(
      "ppo",
      ["ppo"],
      [data.close],
      [12, 26]
    )

    candles = await addIndicatorToCandles("ppo", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// On balance volume
indicators.obv = async candles => {
  try {
    let data = await formatDataForTA(candles)
    let indicator = await getTulipIndicator(
      "obv",
      ["obv"],
      [data.close, data.volume],
      []
    )

    indicator["obv"] = normalizeArray(indicator["obv"])
    candles = await addIndicatorToCandles("obv", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Momentum
indicators.mom = async candles => {
  try {
    let data = await formatDataForTA(candles)
    let indicator = await getTulipIndicator("mom", ["mom"], [data.close], [12])

    indicator["mom"] = normalizeArray(indicator["mom"])
    candles = await addIndicatorToCandles("mom", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Money Flow Index
indicators.mfi = async candles => {
  try {
    let data = await formatDataForTA(candles)
    let indicator = await getTulipIndicator(
      "mfi",
      ["mfi"],
      [data.high, data.low, data.close, data.volume],
      [14]
    )

    candles = await addIndicatorToCandles("mfi", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// MACD
indicators.macd = async candles => {
  try {
    let data = await formatDataForTA(candles)
    let indicator = await getTulipIndicator(
      "macd",
      ["macd", "macd_signal", "macd_histogram"],
      [data.close],
      [12, 26, 9]
    )

    indicator["macd"] = normalizeArray(indicator["macd"])
    indicator["macd_signal"] = normalizeArray(indicator["macd_signal"])
    indicator["macd_histogram"] = normalizeArray(indicator["macd_histogram"])
    candles = await addIndicatorToCandles("macd", indicator, candles)
    candles = await addIndicatorToCandles("macd_signal", indicator, candles)
    candles = await addIndicatorToCandles("macd_histogram", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Linear Regression Slope
indicators.linregslope = async candles => {
  try {
    let data = await formatDataForTA(candles)
    let indicator = await getTulipIndicator(
      "linregslope",
      ["linregslope"],
      [data.close],
      [12]
    )

    indicator["linregslope"] = normalizeArray(indicator["linregslope"])
    candles = await addIndicatorToCandles("linregslope", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Klinger Volume Oscillator
indicators.kvo = async candles => {
  try {
    let data = await formatDataForTA(candles)
    let indicator = await getTulipIndicator(
      "kvo",
      ["kvo"],
      [data.high, data.low, data.close, data.volume],
      [34, 55]
    )

    indicator["kvo"] = normalizeArray(indicator["kvo"])
    candles = await addIndicatorToCandles("kvo", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Forecast Oscillator
indicators.fosc = async candles => {
  try {
    let data = await formatDataForTA(candles)
    let indicator = await getTulipIndicator("fosc", ["fosc"], [data.close], [10])

    candles = await addIndicatorToCandles("fosc", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Fisher transform
indicators.fisher = async candles => {
  try {
    let data = await formatDataForTA(candles)
    let indicator = await getTulipIndicator(
      "fisher",
      ["fisher", "fisher_signal"],
      [data.high, data.low],
      [10]
    )

    candles = await addIndicatorToCandles("fisher", indicator, candles)
    candles = await addIndicatorToCandles("fisher_signal", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Directional index
indicators.dx = async candles => {
  try {
    let data = await formatDataForTA(candles)
    let indicator = await getTulipIndicator(
      "dx",
      ["dx"],
      [data.high, data.low, data.close],
      [14]
    )

    candles = await addIndicatorToCandles("dx", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Detrended Price Oscillator
indicators.dpo = async candles => {
  try {
    let data = await formatDataForTA(candles)
    let indicator = await getTulipIndicator("dpo", ["dpo"], [data.close], [20])

    indicator["dpo"] = normalizeArray(indicator["dpo"])
    candles = await addIndicatorToCandles("dpo", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Directional Movement
indicators.dm = async candles => {
  try {
    let data = await formatDataForTA(candles)
    let indicator = await getTulipIndicator(
      "dm",
      ["plus_dm", "minus_dm"],
      [data.high, data.low],
      [14]
    )

    indicator["plus_dm"] = normalizeArray(indicator["plus_dm"])
    indicator["minus_dm"] = normalizeArray(indicator["minus_dm"])
    candles = await addIndicatorToCandles("plus_dm", indicator, candles)
    candles = await addIndicatorToCandles("minus_dm", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Directional Indicator
indicators.di = async candles => {
  try {
    let data = await formatDataForTA(candles)
    let indicator = await getTulipIndicator(
      "di",
      ["plus_di", "minus_di"],
      [data.high, data.low, data.close],
      [14]
    )

    indicator["plus_di"] = normalizeArray(indicator["plus_di"])
    indicator["minus_di"] = normalizeArray(indicator["minus_di"])
    candles = await addIndicatorToCandles("plus_di", indicator, candles)
    candles = await addIndicatorToCandles("minus_di", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Chaikins Volatility
indicators.cvi = async candles => {
  try {
    let data = await formatDataForTA(candles)
    let indicator = await getTulipIndicator(
      "cvi",
      ["cvi"],
      [data.high, data.low],
      [10]
    )

    indicator.cvi = normalizeArray(indicator.cvi)
    candles = await addIndicatorToCandles("cvi", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Average Directional Movement Index
indicators.adx = async candles => {
  try {
    let data = await formatDataForTA(candles)
    let indicator = await getTulipIndicator(
      "adx",
      ["adx"],
      [data.high, data.low, data.close],
      [14]
    )

    indicator.adx = normalizeArray(indicator.adx)
    candles = await addIndicatorToCandles("adx", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Absolute price oscillator
indicators.apo = async candles => {
  try {
    let data = await formatDataForTA(candles)
    let indicator = await getTulipIndicator(
      "apo",
      ["apo"],
      [data.close],
      [13, 26]
    )

    indicator.apo = normalizeArray(indicator.apo)

    candles = await addIndicatorToCandles("apo", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Rate of Change Ratio
indicators.rocr = async candles => {
  try {
    let data = await formatDataForTA(candles)
    let indicator = await getTulipIndicator("rocr", ["rocr"], [data.close], [12])

    candles = await addIndicatorToCandles("rocr", indicator, candles)

    return candles
  } catch (error) {
    throw error
  }
}

// Percent Change (prev to current)
indicators.percentChange = async candles => {
  try {
    for (let idx in candles) {
      if (typeof candles[idx - 1] != "undefined") {
        let delta = candles[idx].close - candles[idx - 1].close

        candles[idx].percentChange = delta / candles[idx].close * 100
      } else {
        candles[idx].percentChange = null
      }
    }

    return candles
  } catch (error) {
    throw error
  }
}

// Correct Change (prev to current)
indicators.strategy = async candles => {
  try {
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
  } catch (error) {
    throw error
  }
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

    // shift results forward one, so we make predictions based off of the previous candles\

    for (labelIndex in indicator.labels) {
      indicator[labelIndex].push("")
      indicator[labelIndex].pop()
    }

    return indicator
  } catch (error) {
    throw error
  }
}

// run standard TA-Lib function
const getTalibIndicator = async (label, name, candles) => {
  try {
    let data = await formatDataForTA(candles)

    let indicatorData = new Promise((resolve, reject) => {
      talib.execute(
        {
          name: name,
          startIdx: 0,
          endIdx: data.close.length - 1,
          open: data.open,
          high: data.high,
          low: data.low,
          close: data.close,
          optInPenetration: 0
        },
        (err, result) => {
          resolve(result.result)
        }
      )
    })

    let indicator = await Promise.resolve(indicatorData)

    indicator[label] = indicator.outInteger

    // shift results forward one, so we make predictions based off of the previous candles\
    indicator[label].push("")
    indicator[label].pop()

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
