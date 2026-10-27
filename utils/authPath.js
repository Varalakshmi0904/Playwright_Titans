import path from "path";

// One saved login session per browser, e.g. storageState/auth.firefox.json
export const authFileFor = (browser) =>
  path.resolve("storageState", `auth.${browser}.json`);