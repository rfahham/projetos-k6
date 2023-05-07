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
var _default = function _default() {
  var userTest = users[Math.floor(Math.random() * users.length)]; // Randomly load a user
  var title = titles[Math.floor(Math.random() * titles.length)]; // Randomly load a title

  var titleId = title.titleId;
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
    _http["default"].get("https://cloud-jarvis.globo.com/graphql?operationName=getTvProgramLoggedUser&variables={\"titleId\":\"".concat(titleId, "\"}&extensions={\"persistedQuery\":{\"version\":1,\"sha256Hash\":\"84c74089d1003c8e8814e5bfac5cda77d9c7086295be89fe188a3c07ce0cffbe\"}}"), {
      headers: headers,
      timeout: timeout
    });
    _http["default"].get("https://cloud-jarvis.globo.com/graphql?operationName=TitleUser&variables={\"titleId\":\"".concat(titleId, "\",\"thumbsize\":464}&extensions={\"persistedQuery\":{\"version\":1,\"sha256Hash\":\"789986fb00513e4139e63cf0ccb212c7519644f2618477aba66696d7121d8f71\"}}"), {
      headers: headers,
      timeout: timeout
    });
    _http["default"].get("https://cloud-jarvis.globo.com/graphql?operationName=getCurrentEPGActive&variables={\"titleId\":\"".concat(titleId, "\"}&extensions={\"persistedQuery\":{\"version\":1,\"sha256Hash\":\"205b760979eaad810c5d8878a914903f8a11cf5aa692b8f196854a60c010c831\"}}"), {
      headers: headers,
      timeout: timeout
    });
    _http["default"].get("https://cloud-jarvis.globo.com/graphql?operationName=getTvProgram&variables={\"titleId\":\"".concat(titleId, "\",\"landscapeScale\":\"X464\",\"thumbsize\":90}&extensions={\"persistedQuery\":{\"version\":1,\"sha256Hash\":\"e93a3b603ac604e8b3a50345aba0b0bc45f0340fa2b8c32e732a83fa1b0a7abd\"}}"), {
      headers: headers,
      timeout: timeout
    });
    _http["default"].get("https://cloud-jarvis.globo.com/graphql?operationName=getCommonTrails&variables={\"titleId\":\"".concat(titleId, "\",\"page\":1,\"perPage\":16,\"thumbsize\":90}&extensions={\"persistedQuery\":{\"version\":1,\"sha256Hash\":\"850f834dfa393dc31384ddf76237692a84c2855ff7efd7c1c494de0e878068ab\"}}"), {
      headers: headers,
      timeout: timeout
    });
    _http["default"].get("https://cloud-jarvis.globo.com/graphql?operationName=getTvMoreTopHits&variables={\"titleId\":\"".concat(titleId, "\",\"page\":2,\"perPage\":16,\"thumbsize\":90}&extensions={\"persistedQuery\":{\"version\":1,\"sha256Hash\":\"d14cf532672cbd952e0ad3c95881b5af7c36f924fe83e2d89e4cec69137ceb30\"}}"), {
      headers: headers,
      timeout: timeout
    });
  });
  (0, _k.sleep)(0.1);
};
exports["default"] = _default;