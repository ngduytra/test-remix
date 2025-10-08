import { createRequestHandler } from "@remix-run/node";

// Import the built server
let build;
try {
  build = await import("../build/index.js");
} catch (error) {
  console.warn("Build not found, using dev mode");
  // Fallback for development
  build = { default: {} };
}

export default createRequestHandler({
  build: build.default || build,
  mode: process.env.NODE_ENV,
});