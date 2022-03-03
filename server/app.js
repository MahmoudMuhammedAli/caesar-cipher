const fs = require("fs");
const express = require("express");
const cors = require("cors");

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Successful response.");
});

app.post("/encrypt", (req, res) => {
  console.log("getting Data");
  console.log(req.body);
  fs.writeFileSync("./testFiles/output.txt", req.body.name);
  function getCommandLine() {
    switch (process.platform) {
      case "darwin":
        return "open";
      case "win32":
        return "start";
      case "win64":
        return "start";
      default:
        return "xdg-open";
    }
  }
  var exec = require("child_process").exec;

  exec(getCommandLine() + " " + "./testFiles/output.txt");
  res.send(req.body.name);
});

app.listen(4242, () => console.log("Example app is listening on port 4242."));
