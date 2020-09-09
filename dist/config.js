"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _rc = require("./utils/rc");

// 管理 .eosrc 文件 (当前用户目录下)
var config = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(action, key, value) {
    var result, _context, obj;

    return _regenerator["default"].wrap(function _callee$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.t0 = action;
            _context3.next = _context3.t0 === "get" ? 3 : _context3.t0 === "set" ? 15 : _context3.t0 === "remove" ? 17 : 19;
            break;

          case 3:
            if (!key) {
              _context3.next = 10;
              break;
            }

            _context3.next = 6;
            return (0, _rc.get)(key);

          case 6:
            result = _context3.sent;
            console.log(result);
            _context3.next = 14;
            break;

          case 10:
            _context3.next = 12;
            return (0, _rc.getAll)();

          case 12:
            obj = _context3.sent;
            (0, _forEach["default"])(_context = (0, _keys["default"])(obj)).call(_context, function (key) {
              var _context2;

              console.log((0, _concat["default"])(_context2 = "".concat(key, "=")).call(_context2, obj[key]));
            });

          case 14:
            return _context3.abrupt("break", 20);

          case 15:
            (0, _rc.set)(key, value);
            return _context3.abrupt("break", 20);

          case 17:
            (0, _rc.remove)(key);
            return _context3.abrupt("break", 20);

          case 19:
            return _context3.abrupt("break", 20);

          case 20:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee);
  }));

  return function config(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = config;