import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import orderRouter from "./routes/order.js";

const app = express();
const port = process.env.PORT;
const mongoUrl = process.env.MONGO_URL;

app.use(express.json(), express.urlencoded({ extended: false }), orderRouter);

mongoose
  .connect(mongoUrl, {
    autoIndex: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`app listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("App starting error:", err.stack);
    process.exit(1);
  });
