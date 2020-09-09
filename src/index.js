import program from "commander";
import { VERSION } from "./utils/constants";
import apply from "./apply";
import chalk from "chalk";

/**
 * goku commands
 */
const actionMap = {
  init: {
    description: "根据指定模板快速生成新项目",
    usages: ["goku init templateName projectName"],
  },
  config: {
    alias: "cfg",
    description: "操作脚手架的配置文件",
    usages: [
      "goku config set <k> <v>",
      "goku config get <k>",
      "goku config remove <k>",
    ],
  },
};

Object.keys(actionMap).forEach((action) => {
  program
    .command(action)
    .description(actionMap[action].description)
    .alias(actionMap[action].alias)
    .action(() => {
      apply(action, ...process.argv.slice(3));
    });
});

function help() {
  console.log("\r\nUsage:");
  Object.keys(actionMap).forEach((action) => {
    actionMap[action].usages.forEach((usage) => console.log("  - " + usage));
  });
  console.log("\r");
}

program.usage("<command> [options]");
program.on("-h", help);
program.on("--help", help);
program.version(VERSION, "-V --version").parse(process.argv);

// goku 不带参数时
if (!process.argv.slice(2).length) {
  program.outputHelp(make_green);
}
function make_green(txt) {
  return chalk.green(txt);
}
