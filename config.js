import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import bunyan from "bunyan";
import formatter from "bunyan-format";

const formatOut = formatter({ color: true });

const log = bunyan.createLogger({
  name: "Skill_Set",
  stream: formatOut,
});

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "./.env") });

const config = {
  port: 3000,
  logger: log,
  mongourl: process.env.MONGO_DB_URL,
  salt: parseInt(process.env.SALT),
  secret: process.env.SECRET,
  tokenExpiry: "1h",
};

export default config;
