"use strict"

const createCsvWriter = require("csv-writer").createObjectCsvWriter
const exchanges = require("./exchanges")

const writeCsv = async (candles) => {
  try {
    let filePath = "data/candles.csv"
    let headers = []

    Object.keys(candles[0]).forEach((key) => {
      headers.push({
        id: key,
        title: key
      })
    })

    let csvWriter = createCsvWriter({
      path: filePath,
      header: headers
    })

    await csvWriter.writeRecords(candles)

    console.log("Wrote csv to", filePath)

  } catch (error) {
    throw error
  }
}

module.exports = {
  writeCsv
}