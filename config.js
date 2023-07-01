import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "./.env") });

const config = {
  port: 3000,
  mongourl: process.env.MONGO_DB_URL,
  salt: parseInt(process.env.SALT),
  secret: process.env.SECRET,
  tokenExpiry: "1h",
};

export default config;
