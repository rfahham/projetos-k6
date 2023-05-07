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
var titles = new _data.SharedArray('titles', function () {
  return JSON.parse(open('../../test-base/titles.json'));
});
var offers = JSON.parse(open('../../test-base/offers.json'));
var recommendedOffers = new _data.SharedArray('recommendedOffers', function () {
  return offers.titleOffers;
});
var _default = function _default() {
  var userTest = users[Math.floor(Math.random() * users.length)]; // Randomly load a user
  var title = titles[Math.floor(Math.random() * titles.length)]; // Randomly load a title
  var recommendedOffer = recommendedOffers[Math.floor(Math.random() * recommendedOffers.length)]; // Randomly load a recommendedOffer

  var titleId = title.titleId,
    seasonId = title.seasonId,
    videoId = title.videoId;
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
  (0, _k.group)("https://globoplay.globo.com/pagina/t/".concat(titleId, "/ - Carregamento inicial da p\xE1gina de t\xEDtulo"), function () {
    _http["default"].get('https://cloud-jarvis.globo.com/graphql?operationName=getSubscriptionServices&variables={}&extensions={"persistedQuery":{"version":1,"sha256Hash":"f89da769d9cd248b067a2dfab41986cc95970db6eae27d2060a1809e3399c816"}}', {
      headers: headers,
      timeout: timeout
    });
    _http["default"].get('https://cloud-jarvis.globo.com/graphql?operationName=getFeaturesRemoteConfigs&variables={}&extensions={"persistedQuery":{"version":1,"sha256Hash":"3cc10df3d672fee99c1ba251efffc50b5eb586a09159ceee6f46d393ea569f8e"}}', {
      headers: headers,
      timeout: timeout
    });
    _http["default"].get("https://cloud-jarvis.globo.com/graphql?operationName=getTitleView&variables={\"titleId\":\"".concat(titleId, "\"}&extensions={\"persistedQuery\":{\"version\":1,\"sha256Hash\":\"edfaf0be35222665db27c8613b722ec06b5abf3f9e4e29728671e9f589b32f60\"}}"), {
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
    _http["default"].get("https://cloud-jarvis.globo.com/graphql?operationName=getContinueWatchingByTitleId&variables={\"titleId\":\"".concat(titleId, "\"}&extensions={\"persistedQuery\":{\"version\":1,\"sha256Hash\":\"b8aa5c7553ec0609ff24b30518981ba29448aa43494ae4a85c27b84936a764ed\"}}"), {
      headers: headers,
      timeout: timeout
    });
    _http["default"].get("https://cloud-jarvis.globo.com/graphql?operationName=getTitleLastFavoritedSync&variables={\"titleId\":\"".concat(titleId, "\"}&extensions={\"persistedQuery\":{\"version\":1,\"sha256Hash\":\"c3182882e1bac93d9b933cd1928ff9c4add4b1d3771a1e2c68b943738ceea1c9\"}}"), {
      headers: headers,
      timeout: timeout
    });
    _http["default"].get("https://cloud-jarvis.globo.com/graphql?operationName=getTitleStructure&variables={\"titleId\":\"".concat(titleId, "\"}&extensions={\"persistedQuery\":{\"version\":1,\"sha256Hash\":\"bedd62b74900a0aa08b2e4d3e9edf5bde763a0f3f56991dce1aba21651f9732b\"}}"), {
      headers: headers,
      timeout: timeout
    });
    _http["default"].get("https://cloud-jarvis.globo.com/graphql?operationName=getSeasons&variables={\"titleId\":\"".concat(titleId, "\"}&extensions={\"persistedQuery\":{\"version\":1,\"sha256Hash\":\"7a32a4aaaf0f561711efdecb2fd23d1204cd00308b65bb704175ef60df50ea54\"}}"), {
      headers: headers,
      timeout: timeout
    });
    _http["default"].get("https://cloud-jarvis.globo.com/graphql?operationName=getSeasonEpisodes&variables={\"titleId\":\"".concat(titleId, "\",\"seasonId\":\"").concat(seasonId, "\",\"page\":1,\"perPage\":6}&extensions={\"persistedQuery\":{\"version\":1,\"sha256Hash\":\"08ac1bdce4ab6c9b3a8f83653e40d0567dfffc6b075b496d2204764ea8787ca3\"}}"), {
      headers: headers,
      timeout: timeout
    });
  });
  (0, _k.group)("https://globoplay.globo.com/v/".concat(videoId, "/ - P\xE1gina de consumo"), function () {
    _http["default"].get("https://cloud-jarvis.globo.com/graphql?operationName=getVideoView&variables={\"videoId\":\"".concat(videoId, "\"}&extensions={\"persistedQuery\":{\"version\":1,\"sha256Hash\":\"3a24912482ee795c86713a755e0b5be7f545a7c16157c1aae8f23bf63edbefab\"}}"), {
      headers: headers,
      timeout: timeout
    });
    _http["default"].get("https://cloud-jarvis.globo.com/graphql?operationName=getEpisodesBySeasonId&variables={\"titleId\":\"".concat(titleId, "\",\"seasonId\":\"").concat(seasonId, "\",\"perPage\":24,\"page\":1}&extensions={\"persistedQuery\":{\"version\":1,\"sha256Hash\":\"d8bcb3ceb3aca3893a722a436fe42b754871983dc4bb7be34a41c66d77423cf6\"}}"), {
      headers: headers,
      timeout: timeout
    });
    _http["default"].get("https://cloud-jarvis.globo.com/graphql?operationName=getSuggestVideoView&variables={\"titleId\":\"".concat(titleId, "\",\"group\":\"VOD_SCREEN\"}&extensions={\"persistedQuery\":{\"version\":1,\"sha256Hash\":\"7b4d92ecaddb5d3110b9f51addfefa12822dba922b6698b43edba6a67d8115e7\"}}"), {
      headers: headers,
      timeout: timeout
    });
    _http["default"].get("https://cloud-jarvis.globo.com/graphql?operationName=getRecommendationOfferById&variables={\"id\":\"".concat(recommendedOffer, "\",\"context\":{\"titleId\":\"").concat(titleId, "\"},\"page\":1,\"perPage\":24}&extensions={\"persistedQuery\":{\"version\":1,\"sha256Hash\":\"840c26da37690373cb611bb01eacb5d8f74d547fa09cbe285b82eb360e8667a1\"}}"), {
      headers: headers,
      timeout: timeout
    });
    _http["default"].get('https://cloud-jarvis.globo.com/graphql?operationName=getSubscriptionServices&variables={}&extensions={"persistedQuery":{"version":1,"sha256Hash":"f89da769d9cd248b067a2dfab41986cc95970db6eae27d2060a1809e3399c816"}}', {
      headers: headers,
      timeout: timeout
    });
    _http["default"].get('https://cloud-jarvis.globo.com/graphql?operationName=getFeaturesRemoteConfigs&variables={}&extensions={"persistedQuery":{"version":1,"sha256Hash":"3cc10df3d672fee99c1ba251efffc50b5eb586a09159ceee6f46d393ea569f8e"}}', {
      headers: headers,
      timeout: timeout
    });
    _http["default"].get("https://cloud-jarvis.globo.com/graphql?operationName=getTitleView&variables={\"titleId\":\"".concat(titleId, "\"}&extensions={\"persistedQuery\":{\"version\":1,\"sha256Hash\":\"edfaf0be35222665db27c8613b722ec06b5abf3f9e4e29728671e9f589b32f60\"}}"), {
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
  });
  (0, _k.sleep)(0.1);
};
exports["default"] = _default;