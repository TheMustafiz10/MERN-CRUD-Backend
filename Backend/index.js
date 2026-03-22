import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import bodyParser from "body-parser";
import route from "./routes/userRoute.js";

const app= express();

app.use(bodyParser.json());

dotenv.config();
const PORT=process.env.PORT || 5000;
const MONGO_URL= process.env.MONGO_URL;


mongoose
  .connect(MONGO_URL)
  .then(()=> {
       console.log("Database is connected successfully.")
       app.listen(PORT, ()=>{
          console.log(`Server is running on ${PORT}`);
          console.log(`Started at: ${new Date().toLocaleString()}`);

       })
  })
  .catch((error) => {
    console.log("Failed to start server:", error);
    process.exit(1);
  });


  app.use("/api/user", route);


  app.get("/health", (req, res)=>{
    res.status(200).json({Status: "Ok", database: "Connected"});
  })