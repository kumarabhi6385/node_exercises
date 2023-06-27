const app = require("./app");
const config = require("../config");

app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(config.port);
  console.log(`Server is running on localhost on port ${config.port}`);
});
