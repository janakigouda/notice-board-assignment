const express = require("express");
require("dotenv").config();
const cors=require("cors");
const connect=require("./src/config/db");
const userRoute = require("./src/user/user.router");
const userNoticesRoute=require("./src/userNotices/userNotice.router");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/users",userRoute);
app.use("/userNotice",userNoticesRoute);
app.get("/", (req, res) => res.send("hello"));

const PORT=process.env.PORT || 8080;
app.listen(PORT, async() => {
    await connect();
    console.log(`server started on port ${PORT}`);
});
