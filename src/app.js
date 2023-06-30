import express from "express";
import path from "path";
import categoryRoute from "./category/categoryRoute.js";
import topicRoute from "./topic/topicRoute.js";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = express();

// After below line body parser is no longer required.
// we can use express inbuilt feature.
app.use(express.json());

app.use(express.static(path.resolve(__dirname, "../client")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/html/index.html"));
});

// Register module routes here
categoryRoute(app);
topicRoute(app);

// return page not found error
app.use((req, res) => {
  res
    .status(404)
    .sendFile(path.resolve(__dirname, "../client/html/error.html"));
});

// return page not found error
app.use((err, req, res, next) => {
  console.log("In middleware");
  if (err) {
    console.log(err);
    res
      .status(500)
      .sendFile(path.resolve(__dirname, "../client/html/error.html"));
  }
  return next();
});

export default app;
