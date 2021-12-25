import mongoose from 'mongoose'

const insuranceSchema = mongoose.Schema(
  {
    NIC: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
)

const Insurance = mongoose.model('Insurance', insuranceSchema)

export default Insurance
