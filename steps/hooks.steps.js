import { createBdd } from "playwright-bdd";
import { test } from "../fixtures/fixtures.js";

const { After } = createBdd(test);

After(async ({ page }) => {
  await page.screenshot({
    path: "screenshots/failed.png",
    fullPage: true,
  });
});
