import dotenv from "dotenv";
import app from "./app.js";
import { connectDB } from "./db/index.js";
dotenv.config({
  path: "./.env",
});
const PORT = process.env.PORT;

connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`listening at ${PORT}`));
  })
  .catch((err) => {
    console.error("❌ Mongo DB connection erro", error);
    process.exit(1);
  });

  