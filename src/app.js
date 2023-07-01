import express from "express";
import path from "path";
import categoryRoute from "./category/categoryRoute.js";
import topicRoute from "./topic/topicRoute.js";
import userRoute from "./user/userRoute.js";
import { fileURLToPath } from "url";
import jwt from "jsonwebtoken";
import config from "../config.js";

const log = config.logger;

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = express();

// After below line body parser is no longer required.
// we can use express inbuilt feature.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

userRoute(app);

// JWT setup
app.use((req, res, next) => {
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "JWT"
  ) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, config.secret);
      if (decoded) {
        req.user = decoded;
        next();
      } else {
        req.user = undefined;
        next();
      }
    } catch (err) {
      req.user = undefined;
      next();
    }
  }
});

app.use(express.static(path.resolve(__dirname, "../client")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/html/index.html"));
});

// Register module routes here
userRoute(app);
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
  log.info("In middleware defined globally");
  if (err) {
    log.info(err);
    res
      .status(500)
      .sendFile(path.resolve(__dirname, "../client/html/error.html"));
  }
  return next();
});

export default app;
