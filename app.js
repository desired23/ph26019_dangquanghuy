import express from "express";
import router from "./routes/user.js";
const app = express();
const port = 8088;
app.use(express.json());

app.use("/api", router)

app.listen(port, ()=>{
    console.log(`server chay tren port ${port}`)
})