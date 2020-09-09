"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _slice = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/slice"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/toConsumableArray"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _commander = _interopRequireDefault(require("commander"));

var _constants = require("./utils/constants");

var _apply = _interopRequireDefault(require("./apply"));

var _chalk = _interopRequireDefault(require("chalk"));

var _context, _context6;

/**
 * goku commands
 */
var actionMap = {
  init: {
    description: "根据指定模板快速生成新项目",
    usages: ["goku init templateName projectName"]
  },
  config: {
    alias: "cfg",
    description: "操作脚手架的配置文件",
    usages: ["goku config set <k> <v>", "goku config get <k>", "goku config remove <k>"]
  }
};
(0, _forEach["default"])(_context = (0, _keys["default"])(actionMap)).call(_context, function (action) {
  _commander["default"].command(action).description(actionMap[action].description).alias(actionMap[action].alias).action(function () {
    var _context2, _context3;

    _apply["default"].apply(void 0, (0, _concat["default"])(_context2 = [action]).call(_context2, (0, _toConsumableArray2["default"])((0, _slice["default"])(_context3 = process.argv).call(_context3, 3))));
  });
});

function help() {
  var _context4;

  console.log("\r\nUsage:");
  (0, _forEach["default"])(_context4 = (0, _keys["default"])(actionMap)).call(_context4, function (action) {
    var _context5;

    (0, _forEach["default"])(_context5 = actionMap[action].usages).call(_context5, function (usage) {
      return console.log("  - " + usage);
    });
  });
  console.log("\r");
}

_commander["default"].usage("<command> [options]");

_commander["default"].on("-h", help);

_commander["default"].on("--help", help);

_commander["default"].version(_constants.VERSION, "-V --version").parse(process.argv); // goku 不带参数时


if (!(0, _slice["default"])(_context6 = process.argv).call(_context6, 2).length) {
  _commander["default"].outputHelp(make_green);
}

function make_green(txt) {
  return _chalk["default"].green(txt);
}