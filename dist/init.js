"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _get = require("./utils/get");

var _ora = _interopRequireDefault(require("ora"));

var _inquirer = _interopRequireDefault(require("inquirer"));

var _fs = _interopRequireDefault(require("fs"));

var _chalk = _interopRequireDefault(require("chalk"));

var _logSymbols = _interopRequireDefault(require("log-symbols"));

var init = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(templateName, projectName) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            //项目不存在
            if (!_fs["default"].existsSync(projectName)) {
              //命令行交互
              _inquirer["default"].prompt([{
                name: "description",
                message: "Please enter the project description: "
              }, {
                name: "author",
                message: "Please enter the author name: "
              }]).then( /*#__PURE__*/function () {
                var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(answer) {
                  var loading;
                  return _regenerator["default"].wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          //下载模板 选择模板
                          //通过配置文件，获取模板信息
                          loading = (0, _ora["default"])("downloading template ...");
                          loading.start();
                          (0, _get.downloadLocal)(templateName, projectName).then(function () {
                            loading.succeed();
                            var fileName = "".concat(projectName, "/package.json");

                            if (_fs["default"].existsSync(fileName)) {
                              var data = _fs["default"].readFileSync(fileName).toString();

                              var json = JSON.parse(data);
                              json.name = projectName;
                              json.author = answer.author;
                              json.description = answer.description; //修改项目文件夹中 package.json 文件

                              _fs["default"].writeFileSync(fileName, (0, _stringify["default"])(json, null, "\t"), "utf-8");

                              console.log(_logSymbols["default"].success, _chalk["default"].green("Project initialization finished!"));
                            }
                          }, function () {
                            loading.fail();
                          });

                        case 3:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x3) {
                  return _ref2.apply(this, arguments);
                };
              }());
            } else {
              //项目已经存在
              console.log(_logSymbols["default"].error, _chalk["default"].red("The project already exists"));
            }

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function init(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = init;