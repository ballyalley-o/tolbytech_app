import mongoose from 'mongoose'

export const ReviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
      max: 50,
      min: 4,
    },
  },
  { timestamps: true }
)

export const Review = mongoose.model('Review', ReviewSchema)
