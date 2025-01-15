import path from "node:path";
import { spawn } from "node:child_process";

const appsDir = path.resolve("apps");
const serverPath = path.join(appsDir, "server");
spawn("npm run", ["--prefix", serverPath, "dev"], {
  stdio: "inherit",
  shell: true,
});
