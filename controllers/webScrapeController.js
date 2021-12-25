import asyncHandler from 'express-async-handler'
import Cheerio from 'cheerio'
import axios from 'axios'
import _ from 'lodash'

// @desc    Get prices from expidia
// @route   get /api/prices
// @access  public
const getPrices = asyncHandler(async (req, res) => {
  try {
    let vehicles = []
    const url = 'https://www.kayak.com/Cheap-Colombo-Car-Rentals.36384.cars.ksp'
    const response = await axios.get(url)

    const $ = await Cheerio.load(response.data)
    //get car models to array
    const model = []
    $('.rUzP-name').each((index, element) => model.push($(element).text()))

    //get prices
    const price = []
    $('.rUzP-price').each((index, element) => price.push($(element).text()))

    let data = _.zipWith(model, price, (model, price) => ({
      model,
      price,
    }))

    data.map((obj) => {
      if (obj.price !== '') {
        vehicles.push(obj)
      }
    })
    return res.send(vehicles)
    // console.log(price)
  } catch (error) {
    console.log(error.message)
    res.status(500).send('Server error')
  }
})

export { getPrices }
