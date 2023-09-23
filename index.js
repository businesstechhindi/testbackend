const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello from server");
});

app.post("/swapnil", async (req, res) => {
  try {
    console.log(req.body)
    res.cookie("jwt", "8999380645", {
      expires: new Date(Date.now() + 3600000),
      httpOnly: true,
      secure: true,
    });
    res.json({ success: true });
  } catch (err) {
    console.log(err);
  }
});

app.listen(4000, () => {
  console.log("server is running on port 4000");
});
