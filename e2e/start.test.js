import puppeteer from "puppeteer";

describe("Page start", () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage();
  });

  test("start", async () => {
    await page.goto("http://localhost:52330/src/index.html");

    await page.waitForSelector("body");
  });

  afterEach(async () => {
    await browser.close();
  });
});