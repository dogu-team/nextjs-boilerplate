// const fu = require('find-up');
// const Dotenv = require('dotenv');
// const fs = require('fs');
// const yargs = require('yargs');
// const yh = reuiqre('yargs/helpers');
import fs from "fs";
import { findUp } from "find-up";
import * as Dotenv from "dotenv";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const requiredEnvKeys = [];

async function parseDotenv() {
  const envFilePath = await findUp(`.env`);
  if (envFilePath === undefined) {
    const message = `.env file not found`;
    console.error(`[prerun] ${message}`);
    throw new Error(message);
  }

  const parsedEnv = Dotenv.config({ path: envFilePath }).parsed || {};

  // compare env keys
  const existKeys = Object.keys(parsedEnv);
  const difference = requiredEnvKeys.filter((x) => !existKeys.includes(x));

  if (difference.length > 0) {
    throw new Error(
      `[prerun] Env validation failed. ${difference.join()} should exist.`
    );
  }

  return parsedEnv;
}

function writeEnv(parsedEnv) {
  const scriptFilePath = `${fs.realpathSync(process.cwd())}/public/__ENV.js`;
  const content = `window.__ENV = ${JSON.stringify(parsedEnv)}`;
  fs.writeFileSync(scriptFilePath, content);
  console.info(
    `[prerun] Write environment to ${scriptFilePath} content: ${content}`
  );
}

async function copyEnv(appEnv) {
  const envFilePath = await findUp(`.env`);
  const dotenvFilePath = `${fs.realpathSync(process.cwd())}/.env`;

  fs.copyFileSync(envFilePath, dotenvFilePath);
}

async function writeRobotsText(runType) {
  const robotsTxtFilePath = `${fs.realpathSync(
    process.cwd()
  )}/public/robots.txt`;
  const content =
    runType === "production"
      ? `User-agent: *\nAllow: /`
      : `User-agent: *\nDisallow: /`;
  fs.writeFileSync(robotsTxtFilePath, content);
  console.info(
    `[prerun] Write robots.txt to ${robotsTxtFilePath} content: ${content}`
  );
}

yargs(hideBin(process.argv))
  .command(
    "start",
    "Create Next.js runtime environment js and write robots.txt",
    function builder(y) {
      return y.option("env", {
        alias: "e",
        type: "string",
        description: "Environment name(ex: production, development)",
      });
    },
    async function handler(args) {
      const appEnv = "";
      console.info(`[env] App environment: ${appEnv}`);

      const parsedEnv = await parseDotenv();
      writeEnv(parsedEnv);
      await copyEnv(appEnv);
      writeRobotsText(parsedEnv.DOGU_RUN_TYPE);

      return parsedEnv;
    }
  )
  .parse();
