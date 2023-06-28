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

  test("button click", async () => {
    jest.setTimeout(20000);
    await page.goto("http://localhost:52330/src/index.html");
    const button = await page.$(".button-tooltip ");
    await button.click();

    await page.waitForSelector(".container");
  });

  afterEach(async () => {
    await browser.close();
  });
});
