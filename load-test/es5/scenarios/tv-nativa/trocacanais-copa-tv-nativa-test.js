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
var affiliates = new _data.SharedArray('affiliates', function () {
  return JSON.parse(open('../../test-base/affiliates.json'));
});
var offers = JSON.parse(open('../../test-base/offers.json'));
var broadcastOffers = new _data.SharedArray('broadcastOffers', function () {
  return offers.broadcastOffers;
});
var _default = function _default() {
  var userTest = users[Math.floor(Math.random() * users.length)]; // Randomly load a user
  var affiliateCode = affiliates[Math.floor(Math.random() * affiliates.length)]; // Randomly load a affiliateCode
  var broadcastOffer = broadcastOffers[Math.floor(Math.random() * broadcastOffers.length)]; // Randomly load a broadcastOffer

  var baseHeaders = {
    'x-tenant-id': 'globo-play',
    'x-platform-id': 'samsung-tizen',
    'x-client-version': '3.598.0',
    'x-device-id': 'tv'
  };
  var authorizationHeaders = {
    authorization: userTest.authorization,
    'x-user-id': userTest.userId
  };
  var headers = (0, _getHeaders.getHeaders)(baseHeaders, authorizationHeaders);
  var timeout = '300ms';
  (0, _k.group)('https://globoplay.globo.com/ - Troca de canais', function () {
    _http["default"].get("http://cloud-jarvis.globo.com/graphql?variables={\"id\":\"".concat(broadcastOffer, "\",\"affiliateCode\":\"").concat(affiliateCode, "\"}&extensions={\"persistedQuery\":{\"version\":1,\"sha256Hash\":\"d232f073d9ce007892ac544ec1d82fed7b8c3dd3fc2e88a177b774221f7bcbaa\"}}"), {
      headers: headers,
      timeout: timeout
    });
  });
  (0, _k.sleep)(0.1);
};
exports["default"] = _default;