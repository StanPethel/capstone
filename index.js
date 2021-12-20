const connectDb = require("./db/db");
const usersRouter = require("./routes/users");
const productRouter = require("./routes/product");
const authRoute = require("./middleware/auth");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const express = require("express");
const cors = require("cors");
const app = express();

connectDb();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use('/api/product', productRouter);
app.use(`/api/users`, usersRouter);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
