const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
import { Browser } from "puppeteer";

puppeteer.use(StealthPlugin());

const {executablePath} = require('puppeteer');

const url = "https://www.facebook.com/";

function sleep(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

const main = async () => {
  const browser: Browser = await puppeteer.launch({ headless: false, executablePath: executablePath()});
  const page = await browser.newPage();
  await page.goto(url);
  await page.type('[name="email"]', 'filho@puppeteer.com');
  await page.type('[name="pass"]', 'puppeteeruso');
  await page.click('[name="login"]');

  await sleep(30000);

  await browser.close();
};

main();
