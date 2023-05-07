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
  (0, _k.group)("https://globoplay.globo.com/pagina/t/".concat(titleId, "/ - Carregamento inicial da p\xE1gina de t\xEDtulo"), function () {
    _http["default"].get("https://cloud-jarvis.globo.com/graphql?variables={\"titleId\":\"".concat(titleId, "\",\"thumbSize\":360}&extensions={\"persistedQuery\":{\"version\":1,\"sha256Hash\":\"903c7a9d7206984e098708cbaf967dc3a909c6fff8fe50aefb39b3b8307403a0\"}}"), {
      headers: headers,
      timeout: timeout
    });
    _http["default"].get("https://cloud-jarvis.globo.com/graphql?variables={\"titleId\":\"".concat(titleId, "\",\"isAnonymous\":false}&extensions={\"persistedQuery\":{\"version\":1,\"sha256Hash\":\"588fec4d65cfd96d9f448e9723344e46cdd2e45936e38911cd64dfec2933c7e5\"}}"), {
      headers: headers,
      timeout: timeout
    });
    _http["default"].get("https://cloud-jarvis.globo.com/graphql?variables={\"titleId\":\"".concat(titleId, "\",\"isAnonymous\":false}&extensions={\"persistedQuery\":{\"version\":1,\"sha256Hash\":\"614534bd72a08eaccc5198bbe09649eeed58ce463ab996f81b4b3a98eae38b02\"}}"), {
      headers: headers,
      timeout: timeout
    });
    _http["default"].get("https://cloud-jarvis.globo.com/graphql?variables={\"gte\":\"1914-10-01\",\"lte\":\"1914-10-01\",\"titleId\":\"".concat(titleId, "\"}&extensions={\"persistedQuery\":{\"version\":1,\"sha256Hash\":\"07633985d81b065f361c21218789d02dacb70fedee976e1acb45c41586eaca0e\"}}"), {
      headers: headers,
      timeout: timeout
    });
  });
  (0, _k.sleep)(0.1);
};
exports["default"] = _default;