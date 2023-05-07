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
var highlights = new _data.SharedArray('highlights', function () {
  return JSON.parse(open('../../test-base/highlights.json'));
});
var offers = JSON.parse(open('../../test-base/offers.json'));
var titleOffers = new _data.SharedArray('titleOffers', function () {
  return offers.titleOffers;
});
var videoOffers = new _data.SharedArray('videoOffers', function () {
  return offers.videoOffers;
});
var _default = function _default() {
  var userTest = users[Math.floor(Math.random() * users.length)]; // Randomly load a user
  var highlightOffer = highlights[Math.floor(Math.random() * highlights.length)]; // Randomly load a highlightOffer
  var titleOffer = titleOffers[Math.floor(Math.random() * titleOffers.length)]; // Randomly load a titleOffer
  var videoOffer = videoOffers[Math.floor(Math.random() * videoOffers.length)]; // Randomly load a videoOffer

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
  (0, _k.group)('https://globoplay.globo.com/ - Carregamento inicial da home', function () {
    _http["default"].get('https://cloud-jarvis.globo.com/graphql?operationName=getFeaturesRemoteConfigs&variables={}&extensions={"persistedQuery":{"version":1,"sha256Hash":"3cc10df3d672fee99c1ba251efffc50b5eb586a09159ceee6f46d393ea569f8e"}}', {
      headers: headers,
      timeout: timeout
    });
    _http["default"].get('https://cloud-jarvis.globo.com/graphql?operationName=getUserRecommendedPage&variables={"basePageId":"home-assinante"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"9ea4990177f5ef59f86f2b85ca1bb15b4c2febffdc695f6792e3cef13ac81775"}}', {
      headers: headers,
      timeout: timeout
    });
    _http["default"].get("https://cloud-jarvis.globo.com/graphql?operationName=getOffer&variables={\"id\":\"".concat(titleOffer, "\",\"page\":1,\"perPage\":24}&extensions={\"persistedQuery\":{\"version\":1,\"sha256Hash\":\"3ac118dcfc9ddb48f7b1869f526e4a3cd4e20cf2d6ba28423912bb23c5e2dd68\"}}"), {
      headers: headers,
      timeout: timeout
    });
    titleOffer = titleOffers[Math.floor(Math.random() * titleOffers.length)];
    _http["default"].get("https://cloud-jarvis.globo.com/graphql?operationName=getOffer&variables={\"id\":\"".concat(titleOffer, "\",\"page\":1,\"perPage\":24}&extensions={\"persistedQuery\":{\"version\":1,\"sha256Hash\":\"3ac118dcfc9ddb48f7b1869f526e4a3cd4e20cf2d6ba28423912bb23c5e2dd68\"}}"), {
      headers: headers,
      timeout: timeout
    });
    _http["default"].get("https://cloud-jarvis.globo.com/graphql?operationName=getOfferThumbById&variables={\"id\":\"".concat(videoOffer, "\",\"page\":1,\"perPage\":24}&extensions={\"persistedQuery\":{\"version\":1,\"sha256Hash\":\"f39d04f48914d44a1ad2898e0abd8a88b35110faeb747aa9d23b7274331dfb28\"}}"), {
      headers: headers,
      timeout: timeout
    });
    videoOffer = videoOffers[Math.floor(Math.random() * videoOffers.length)];
    _http["default"].get("https://cloud-jarvis.globo.com/graphql?operationName=getOfferThumbById&variables={\"id\":\"".concat(videoOffer, "\",\"page\":1,\"perPage\":24}&extensions={\"persistedQuery\":{\"version\":1,\"sha256Hash\":\"f39d04f48914d44a1ad2898e0abd8a88b35110faeb747aa9d23b7274331dfb28\"}}"), {
      headers: headers,
      timeout: timeout
    });
    _http["default"].get("https://cloud-jarvis.globo.com/graphql?operationName=getGenericHighlight&variables={\"id\":\"".concat(highlightOffer, "\"}&extensions={\"persistedQuery\":{\"version\":1,\"sha256Hash\":\"ad43d3e4e0ebf64d57429e6abb2d4c8badba2c1a26e94763e2229196d8269352\"}}"), {
      headers: headers,
      timeout: timeout
    });
    highlightOffer = highlights[Math.floor(Math.random() * highlights.length)];
    _http["default"].get("https://cloud-jarvis.globo.com/graphql?operationName=getGenericHighlight&variables={\"id\":\"".concat(highlightOffer, "\"}&extensions={\"persistedQuery\":{\"version\":1,\"sha256Hash\":\"ad43d3e4e0ebf64d57429e6abb2d4c8badba2c1a26e94763e2229196d8269352\"}}"), {
      headers: headers,
      timeout: timeout
    });
    highlightOffer = highlights[Math.floor(Math.random() * highlights.length)];
    _http["default"].get("https://cloud-jarvis.globo.com/graphql?operationName=getGenericHighlight&variables={\"id\":\"".concat(highlightOffer, "\"}&extensions={\"persistedQuery\":{\"version\":1,\"sha256Hash\":\"ad43d3e4e0ebf64d57429e6abb2d4c8badba2c1a26e94763e2229196d8269352\"}}"), {
      headers: headers,
      timeout: timeout
    });
  });
  (0, _k.sleep)(0.1);
};
exports["default"] = _default;