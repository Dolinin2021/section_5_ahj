import puppeteer from "puppeteer";

describe("Page start", () => {
  let browser;
  let page;

  beforeEach(async () => {
    jest.setTimeout(20000);
    browser = await puppeteer.launch({
      // headless: false,
      // slowMo: 50,
      // devtools: true,
    });

    page = await browser.newPage();
  });

  test("button click", async () => {
    try {
      await page.goto("http://localhost:9000");
      const button = await page.$(".button-tooltip ");
      await button.click();
      await page.waitForSelector(".container");
    } catch (err) {
      console.log(err.message);
      return false;
    }
  });

  afterEach(async () => {
    await browser.close();
  });
});
