const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema

const torneovideogameSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true, 
      requrie: true,
      maxlength: 32,
    },
    description: {
      type: String,
      trim: true,
      require: true,
      maxlength: 2000
    },
    price: {
      type: String,
      trim: true,
      require: true,
      maxlength: 100,
    },
    category: {
      type: ObjectId,
      ref: 'Category',
      require: true
    },
    quantity: {
      type: Number,
    },
    photo: {
      data: Buffer,
      contentType: String
    }
  },
  {timestamps: true}
);

module.exports = mongoose.model("Torneo", torneovideogameSchema);

