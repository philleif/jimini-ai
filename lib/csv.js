"use strict"

const createCsvWriter = require("csv-writer").createObjectCsvWriter
const exchanges = require("./exchanges")

const writeCsv = async (candles, includeHeaders = true) => {
  try {
    let filePath = "data/candles.csv"
    let headers = []

    Object.keys(candles[0]).forEach(key => {
      if (includeHeaders) {
        headers.push({
          id: key,
          title: key
        })
      } else {
        headers.push(key)
      }
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

const cleanCsv = async data => {
  try {
    for (let row in data) {
      for (let value of Object.values(data[row])) {
        if (value === null) {
          delete data[row]
        }
      }
    }

    data = data.filter(val => {
      return val !== undefined
    })

    return data
  } catch (error) {
    throw error
  }
}

module.exports = {
  writeCsv,
  cleanCsv
}
