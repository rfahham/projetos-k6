"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _k = require("k6");
var _http = _interopRequireDefault(require("k6/http"));
var _data = require("k6/data");
var _getHeaders = require("../utils/get-headers.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var users = new _data.SharedArray('users', function () {
  return JSON.parse(open('../../test-base/users.json'));
});
var affiliateCodeData = new _data.SharedArray('affiliates', function () {
  return JSON.parse(open('../../test-base/affiliates.json'));
});
var _default = function _default() {
  var userTest = users[Math.floor(Math.random() * users.length)]; // Randomly load a user
  var affiliateCodeTest = affiliateCodeData[Math.floor(Math.random() * affiliateCodeData.length)]; // Randomly load a affiliateCode

  var baseHeaders = {
    'x-tenant-id': 'globo-play',
    'x-platform-id': 'web',
    'x-client-version': '3.598.0',
    'x-device-id': 'desktop'
  };
  var authorizationHeaders = {
    authorization: userTest.authorization,
    'x-user-id': userTest.userId
  };
  var headers = (0, _getHeaders.getHeaders)(baseHeaders, authorizationHeaders);
  var timeout = '300ms';
  (0, _k.group)('https://globoplay.globo.com/agora-na-tv/ - Carregamento inicial de canais ao vivo', function () {
    _http["default"].get('https://cloud-jarvis.globo.com/graphql?operationName=getSubscriptionServices&variables={}&extensions={"persistedQuery":{"version":1,"sha256Hash":"f89da769d9cd248b067a2dfab41986cc95970db6eae27d2060a1809e3399c816"}}', {
      headers: headers,
      timeout: timeout
    });
    _http["default"].get('https://cloud-jarvis.globo.com/graphql?operationName=getFeaturesRemoteConfigs&variables={}&extensions={"persistedQuery":{"version":1,"sha256Hash":"3cc10df3d672fee99c1ba251efffc50b5eb586a09159ceee6f46d393ea569f8e"}}', {
      headers: headers,
      timeout: timeout
    });
    _http["default"].get('https://cloud-jarvis.globo.com/graphql?operationName=getBroadcastList&variables={"epgSlotsLimit":5,"filtersInput":{"affiliateCode":null}}&extensions={"persistedQuery":{"version":1,"sha256Hash":"d8582eae6355b185eb27c9afd7e738838216e0df6a6aa6e2852e0e8ac3bc95f2"}}', {
      headers: headers,
      timeout: timeout
    });
    _http["default"].get('https://cloud-jarvis.globo.com/graphql?operationName=getRemoteConfigs&variables={"scope":"general"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"ab62cbaf8cdcb20d7f671069469d0686aa5436fd09420c52b7a46d900042e700"}}', {
      headers: headers,
      timeout: timeout
    });
    _http["default"].get('https://cloud-jarvis.globo.com/graphql?operationName=getMyListTitleIds&variables={"page":1,"perPage":6}&extensions={"persistedQuery":{"version":1,"sha256Hash":"7e8b653ec0eaa69bd4a82455f3b611a5733aadc44dea3409dd6d188b01faebce"}}', {
      headers: headers,
      timeout: timeout
    });
    _http["default"].get("https://cloud-jarvis.globo.com/graphql?operationName=getBroadcastList&variables={\"epgSlotsLimit\":5,\"filtersInput\":{\"affiliateCode\":\"".concat(affiliateCodeTest, "\"}}&extensions={\"persistedQuery\":{\"version\":1,\"sha256Hash\":\"d8582eae6355b185eb27c9afd7e738838216e0df6a6aa6e2852e0e8ac3bc95f2\"}}"), {
      headers: headers,
      timeout: timeout
    });
  });
  (0, _k.sleep)(0.1);
};
exports["default"] = _default;