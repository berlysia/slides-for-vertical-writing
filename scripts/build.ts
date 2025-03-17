#!/usr/bin/env node

import { execSync } from "node:child_process";
import { mkdir, rm, cp } from "node:fs/promises";
import { join } from "node:path";

const REPO_URL =
  "https://github.com/berlysia/slide-system-for-vertical-writing";
const TEMP_DIR = "temp-build";

async function main() {
  try {
    // Cleanup any existing temp directory
    await rm(TEMP_DIR, { recursive: true, force: true });

    // Create temp directory
    await mkdir(TEMP_DIR);

    console.log("Cloning repository...");
    execSync(`git clone ${REPO_URL} ${TEMP_DIR} --depth 1`, {
      stdio: "inherit",
    });

    console.log("Copying slides...");
    await cp("slides", join(TEMP_DIR, "slides"), { recursive: true });

    console.log("Installing dependencies...");
    execSync("pnpm install", { stdio: "inherit", cwd: TEMP_DIR });

    console.log("Building slides...");
    execSync("pnpm run build:pages", {
      stdio: "inherit",
      cwd: TEMP_DIR,
    });

    console.log("Build completed successfully!");

    // Copy built pages to current directory
    await cp(join(TEMP_DIR, "pages"), "pages", { recursive: true });
  } catch (error) {
    console.error("Build failed:", error);
    throw error;
  } finally {
    // Cleanup
    console.log("Cleaning up...");
    await rm(TEMP_DIR, { recursive: true, force: true });
  }
}

main();
