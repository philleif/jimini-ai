"use strict"

global.fetch = require("node-fetch") // tfjs will fail with fetch not defined

const tf = require("@tensorflow/tfjs")
require("@tensorflow/tfjs-node")

tf.setBackend("tensorflow")

const predict = async predictObject => {
  try {
    const model = await tf.loadModel("http://localhost:3000/model/model.json")
    const tensor = tf.tensor(predictObject, [1, predictObject.length])
    const prediction = model.predict(tensor)

    let data = await prediction.data()

    return data > 0.5 ? 1 : 0
  } catch (error) {
    throw error
  }
}

module.exports = {
  predict
}
