const mongoose = require("mongoose");
require("./User");
require("./Product");

const schema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    product: {
      type: [
        {
            productID: mongoose.Types.ObjectId,
          count: Number,
          price: Number,
        },
      ],
    },
    status: {
      type: String,
      default: "open",
      required: true,
    },
      totalPrice:{
          type: Number,


      }
  },
  {
    timestamps: true,
  }
);

const model = mongoose.models.Cart || mongoose.model("Cart", schema);

export default model;
