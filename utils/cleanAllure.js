import fs from "fs";
import path from "path";

export default async function globalSetup() {
  const folders = ["allure-results", "allure-report"];

  for (const folder of folders) {
    const folderPath = path.resolve(folder);

    fs.rmSync(folderPath, {
      recursive: true,
      force: true,
    });

    console.log(`Deleted old folder: ${folder}`);
  }
}