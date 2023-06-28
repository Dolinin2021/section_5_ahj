import puppeteer from "puppeteer";

describe("Page start", () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 50,
      devtools: true,
    });

    page = await browser.newPage();
  });

  test("start", async () => {
    try {
      await page.goto("http://localhost:52330/src/index.html");
      await page.waitForSelector("body");
    } catch(err) {
      console.log(err.message);
      return false;
    }

  });

  afterEach(async () => {
    await browser.close();
  });
});
