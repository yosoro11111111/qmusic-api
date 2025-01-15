import fs from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";
import { checkbox } from "@inquirer/prompts";
import { setTimeout } from "node:timers/promises";

// 获取都有哪些项目
const ignoreDir = [".DS_Store"];
const appsDir = path.resolve("apps");
const apps = fs
  .readdirSync(appsDir, { withFileTypes: true })
  .filter((it) => !ignoreDir.includes(it.name));

// 根据用户选择，启动指定项目
const prompt = checkbox({
  message: "选择需要启动的项目？",
  instructions: "😍空格选，回车启动💏",
  choices: apps.map((item) => ({ name: item.name, value: item.name })),
});

// 等待用户选择，否则设置默认值（主要应对服务器部署）
const ac = new AbortController();
prompt.finally(() => ac.abort()).catch(() => {});

const defaultValue = setTimeout(3000, "timeout", {
  signal: ac.signal,
}).then(() => {
  prompt.cancel();
  return ["server"];
});
const answer = await Promise.race([defaultValue, prompt]);

// 启动选择的项目
answer.forEach((appName) => {
  const app = apps.find((it) => it.name === appName);
  if (ignoreDir.includes(app.name)) return false;
  const appPath = path.resolve(app.parentPath, app.name);
  spawn("npm run", ["--prefix", appPath, "dev"], {
    stdio: "inherit",
    shell: true,
  });
});
