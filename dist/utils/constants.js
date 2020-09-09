"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.DEFAULTS = exports.RC = exports.VERSION = void 0;

var _package = require("../../package.json");

//当前 package.json 的版本号
var VERSION = _package.version; // 用户的根目录

exports.VERSION = VERSION;
var HOME = process.env[process.platform === "win32" ? "USERPROFILE" : "HOME"]; // 配置文件目录

var RC = "".concat(HOME, "/.eosrc"); // RC 配置下载模板的地方，给 github 的 api 使用
// https://api.github.com/users/YvetteLau/repos
// https://api.github.com/${type}/${registry}/repos
// 模板下载地址可配置

exports.RC = RC;
var DEFAULTS = {
  registry: "jiangawait",
  type: "users"
};
exports.DEFAULTS = DEFAULTS;