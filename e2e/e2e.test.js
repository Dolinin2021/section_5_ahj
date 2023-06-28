import puppetteer from "puppeteer";
import { fork } from "child_process";

jest.setTimeout(40000);
describe("Popovers", () => {
  let browser;
  let page;
  let server;

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on("error", reject);
      server.on("message", (message) => {
        if (message === "ok") {
          resolve();
        }
      });
    });

    browser = await puppetteer.launch({
      headless: false, // show gui
      slowMo: 250,
      devtools: true, // show devTools
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

  afterAll(async () => {
    await browser.close();
    server.kill();
  });
});
