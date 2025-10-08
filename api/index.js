import { createRequestHandler } from "@remix-run/node";

// Import the built server
let build;
try {
  build = await import("../build/index.js");
} catch (error) {
  console.error("Failed to import build:", error);
  throw new Error("Build not found. Make sure to run 'npm run build' first.");
}

const requestHandler = createRequestHandler({
  build: build.default || build,
  mode: process.env.NODE_ENV === "development" ? "development" : "production",
});

export default async function handler(req, res) {
  try {
    return await requestHandler(req, res);
  } catch (error) {
    console.error("Handler error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}