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
var highlights = new _data.SharedArray('highlights', function () {
  return JSON.parse(open('../../test-base/highlights.json'));
});
var offers = JSON.parse(open('../../test-base/offers.json'));
var titleOffers = new _data.SharedArray('titleOffers', function () {
  return offers.titleOffers;
});
var _default = function _default() {
  var user = users[Math.floor(Math.random() * users.length)]; // Randomly load a user
  var affiliateCode = affiliates[Math.floor(Math.random() * affiliates.length)]; // Randomly load a affiliateCode
  var highlightOffer = highlights[Math.floor(Math.random() * highlights.length)]; // Randomly load a highlightOffer
  var titleOffer = titleOffers[Math.floor(Math.random() * titleOffers.length)]; // Randomly load a titleOffer

  var baseHeaders = {
    'x-client-version': '4.42.1',
    'x-tenant-id': 'globo-play',
    'x-platform-id': 'Apple',
    'x-device-id': 'mobile'
  };
  var authorizationHeaders = {
    authorization: user.authorization,
    'x-user-id': user.userId
  };
  var headers = (0, _getHeaders.getHeaders)(baseHeaders, authorizationHeaders);
  var timeout = '300ms';
  (0, _k.group)('IOS Channels', function () {
    _http["default"].get("https://cloud-jarvis.globo.com/graphql/?extensions={\"persistedQuery\":{\"sha256Hash\":\"aecbccc0f820b303f1436b515255c3822e3506bdf5833de5d14879e2cb55d993\",\"version\":1}}&id=aecbccc0f820b303f1436b515255c3822e3506bdf5833de5d14879e2cb55d993&operationName=getBroadcasts&variables={\"epgSlotsLimit\":5,\"filtersInput\":{\"affiliateCode\":\"".concat(affiliateCode, "\"},\"scale\":\"X210\",\"scaleOnAir\":\"X1080\",\"scaleTrimmedLogo\":null}"), {
      headers: headers,
      timeout: timeout
    });
    _http["default"].get('https://cloud-jarvis.globo.com/graphql/?extensions={"persistedQuery":{"sha256Hash":"10579a71b3fb8187bb68008f5dd9beafb5a15d35dea26aeaedfab7e1b3f5d704","version":1}}&id=10579a71b3fb8187bb68008f5dd9beafb5a15d35dea26aeaedfab7e1b3f5d704&operationName=getRecommendedPage&variables={"basePageId":"home-assinante"}', {
      headers: headers,
      timeout: timeout
    });
    _http["default"].get("https://cloud-jarvis.globo.com/graphql/?extensions={\"persistedQuery\":{\"sha256Hash\":\"28ce118987cd63f87f24877975d4f27c2f12ebce65a62daa2e3d9e4597298c2f\",\"version\":1}}&id=28ce118987cd63f87f24877975d4f27c2f12ebce65a62daa2e3d9e4597298c2f&operationName=getGenericHighlight&variables={\"cover4x5WidthsRecommends\":\"X1074\",\"cover16x9WidthsRecommends\":\"X1888\",\"cover21x9WidthsRecommends\":\"X1616\",\"coverLandscapeScale\":\"X1080\",\"coverPortraitScale\":\"X1152\",\"highlightCover4x5Widths\":\"X1074\",\"highlightCover16x9Focus\":\"RIGHT\",\"highlightCover16x9Widths\":\"X1888\",\"highlightCover21x9Widths\":\"X1616\",\"highlightImageMobileScales\":\"X3\",\"highlightImageTabletScales\":\"X3\",\"highlightImageTvScales\":\"X1_5\",\"highlightLogoMobileScales\":\"X3\",\"highlightLogoTabletScales\":\"X1\",\"highlightLogoTvScales\":\"X3\",\"highlightOfferImageMobileScales\":\"X3\",\"highlightOfferImageTabletScales\":\"X3\",\"id\":\"".concat(highlightOffer, "\",\"imageQuality\":\"X100\",\"logoHighlightLogoHeightsScale\":\"X108\"}"), {
      headers: headers,
      timeout: timeout
    });
    _http["default"].get('https://cloud-jarvis.globo.com/graphql/?extensions={"persistedQuery":{"sha256Hash":"ec02bbc2811c68d44f69874b408188c3fb6931fa2272906591385f9ffc4ff253","version":1}}&id=ec02bbc2811c68d44f69874b408188c3fb6931fa2272906591385f9ffc4ff253&operationName=userLastWatchedVideos&variables={"perPage":6}', {
      headers: headers,
      timeout: timeout
    });
    _http["default"].get("https://cloud-jarvis.globo.com/graphql/?extensions={\"persistedQuery\":{\"sha256Hash\":\"28378b3b3e7340afe0f349e4476c3a48ee148ca4d841b408f6982de54da43be1\",\"version\":1}}&id=28378b3b3e7340afe0f349e4476c3a48ee148ca4d841b408f6982de54da43be1&operationName=getTitleOffer&variables={\"coverLandscapeScales\":\"X1080\",\"coverPortraitScales\":\"X1152\",\"id\":\"".concat(titleOffer, "\",\"page\":1,\"perPage\":6,\"posterLandscapeScales\":\"X624\",\"posterMobileScales\":\"X3\",\"posterTabletScales\":\"X3\",\"shapePosterScales\":\"X336\",\"titleID\":null,\"tvPosterScales\":\"X3\"}"), {
      headers: headers,
      timeout: timeout
    });
    _http["default"].get('https://cloud-jarvis.globo.com/graphql/?extensions={"persistedQuery":{"sha256Hash":"8f1fb70645048923377cc8e339b3b08ff8794c5fb973a343da9060e0c52bda0a","version":1}}&id=8f1fb70645048923377cc8e339b3b08ff8794c5fb973a343da9060e0c52bda0a&operationName=getMyList&variables={"page":1,"perPage":6,"posterMobileScales":"X3","posterTabletScales":"X3","tvPosterScales":null}', {
      headers: headers,
      timeout: timeout
    });
  });
  (0, _k.sleep)(0.1);
};
exports["default"] = _default;