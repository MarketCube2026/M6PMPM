const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "cloudflare-dist");

fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });
fs.copyFileSync(path.join(root, "index.html"), path.join(outDir, "index.html"));
fs.writeFileSync(path.join(outDir, "_headers"), "/*\n  Cache-Control: no-store\n", "utf8");

console.log(outDir);
