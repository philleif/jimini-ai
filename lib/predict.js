"use strict"

global.fetch = require("node-fetch") // tfjs will fail with fetch not defined

const tf = require("@tensorflow/tfjs")
require("@tensorflow/tfjs-node")

tf.setBackend("tensorflow")

const predict = async predictObject => {
  try {
    const model = await tf.loadModel("http://localhost:3000/model/model.json")
    const tensor = tf.tensor2d([predictObject], [1,46])
    const prediction = model.predict(tensor)

    console.log(prediction.print())

  } catch (error) {
    throw error
  }
}

module.exports = {
  predict
}