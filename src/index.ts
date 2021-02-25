import * as dotenv from "dotenv";
dotenv.config();
const express = require("express");
const redis = require("redis");

const app = express();
const client = redis.createClient({
  host: "redis-server",
  port: 6379
});
client.set("visits", 0);
const appPort: string = process.env.APP_PORT;

app.get("/", (req: any, res: { send: (arg0: string) => void; }) => {
    process.exit(0);
    client.get("visits", (err: any, visits: string) => {
        res.send(`Number of visits is ${visits}`);
        client.set("visits", parseInt(visits) + 1)
    });
});

app.listen(parseInt(appPort) || 8081, () => {
  console.log(`App server listening on port: ${parseInt(appPort) || 8081}`);
});