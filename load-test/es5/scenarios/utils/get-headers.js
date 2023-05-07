"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHeaders = void 0;
var getHeaders = function getHeaders(baseHeaders) {
  var additionalHeaders = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return Object.assign(baseHeaders, additionalHeaders);
};
exports.getHeaders = getHeaders;