import asyncHandler from 'express-async-handler'
import Insurance from '../ models/insuranceModel.js'

// @desc    Get blacklisted nic from insuarance
// @route   get /api/insurance
// @access  public
const fraudulentNIC = asyncHandler(async (req, res) => {
  const insuarance = await Insurance.find().select('NIC')
  return res.send(insuarance)
  // console.log(price)
})

export { fraudulentNIC }
