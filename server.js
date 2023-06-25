import express from "express";
import config from "config";

const port = config.get("server.port");
const host = config.get("server.host");

const app = express();

app.use(express.static("./public"));
app.use("/", express.static("./public/html"));

// return page not found error
app.use((req, res) => {
  res.sendFile("pagenotfound.html", { root: "./public/html" });
});

const server = app.listen(port, host, (err) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server is running on ${host}: ${server.address().port}`);
});
