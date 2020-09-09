"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.downloadLocal = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _rc = require("./rc");

var _downloadGitRepo = _interopRequireDefault(require("download-git-repo"));

var downloadLocal = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(templateName, projectName) {
    var _context;

    var config, api;
    return _regenerator["default"].wrap(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _rc.getAll)();

          case 2:
            config = _context2.sent;
            api = (0, _concat["default"])(_context = "".concat(config.registry, "/")).call(_context, templateName);
            return _context2.abrupt("return", new _promise["default"](function (resolve, reject) {
              (0, _downloadGitRepo["default"])(api, projectName, function (err) {
                if (err) {
                  reject(err);
                }

                resolve();
              });
            }));

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee);
  }));

  return function downloadLocal(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.downloadLocal = downloadLocal;