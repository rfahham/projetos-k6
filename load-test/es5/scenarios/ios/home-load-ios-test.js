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
var offers = JSON.parse(open('../../test-base/offers.json'));
var titleOffers = new _data.SharedArray('titleOffers', function () {
  return offers.titleOffers;
});
var highlights = new _data.SharedArray('highlights', function () {
  return JSON.parse(open('../../test-base/highlights.json'));
});
var affiliates = new _data.SharedArray('affiliates', function () {
  return JSON.parse(open('../../test-base/affiliates.json'));
});
var broadcastOffers = new _data.SharedArray('broadcastOffers', function () {
  return offers.broadcastOffers;
});
var videoOffers = new _data.SharedArray('videoOffers', function () {
  return offers.videoOffers;
});
var channelsOffer = new _data.SharedArray('channelsOffer', function () {
  return offers.channelsOffer;
});
var categoryOffers = new _data.SharedArray('categoryOffers', function () {
  return offers.categoryOffers;
});
var externalTitleOffers = new _data.SharedArray('externalTitleOffers', function () {
  return offers.externalTitleOffers;
});
var _default = function _default() {
  var userTest = users[Math.floor(Math.random() * users.length)]; // Randomly load a user
  var affiliateCode = affiliates[Math.floor(Math.random() * affiliates.length)]; // Randomly load a affiliateCode
  var channelOffer = channelsOffer[Math.floor(Math.random() * channelsOffer.length)]; // Randomly load a channelOffer
  var externalTitleOffer = externalTitleOffers[Math.floor(Math.random() * externalTitleOffers.length)]; // Randomly load a externalTitleOffer
  var broadcastOffer = broadcastOffers[Math.floor(Math.random() * broadcastOffers.length)]; // Randomly load a broadcastOffer
  var titleOffer = titleOffers[Math.floor(Math.random() * titleOffers.length)]; // Randomly load a titleOffer
  var highlightOffer = highlights[Math.floor(Math.random() * highlights.length)]; // Randomly load a highlightOffer
  var videoOffer = videoOffers[Math.floor(Math.random() * videoOffers.length)]; // Randomly load a videoOffer
  var categoryOffer = categoryOffers[Math.floor(Math.random() * categoryOffers.length)]; // Randomly load a categoryOffer

  var baseHeaders = {
    'x-client-version': '4.42.1',
    'x-tenant-id': 'globo-play',
    'x-platform-id': 'Apple',
    'x-device-id': 'mobile'
  };
  var authorizationHeaders = {
    authorization: userTest.authorization,
    'x-user-id': userTest.userId
  };
  var headers = (0, _getHeaders.getHeaders)(baseHeaders, authorizationHeaders);
  var timeout = '300ms';
  (0, _k.group)('IOS Home', function () {
    _http["default"].get("https://cloud-jarvis.globo.com/graphql/?extensions={\"persistedQuery\":{\"sha256Hash\":\"28378b3b3e7340afe0f349e4476c3a48ee148ca4d841b408f6982de54da43be1\",\"version\":1}}&id=28378b3b3e7340afe0f349e4476c3a48ee148ca4d841b408f6982de54da43be1&operationName=getTitleOffer&variables={\"coverLandscapeScales\":\"X1080\",\"coverPortraitScales\":\"X1152\",\"id\":\"".concat(titleOffer, "\",\"page\":1,\"perPage\":6,\"posterLandscapeScales\":\"X624\",\"posterMobileScales\":\"X3\",\"posterTabletScales\":\"X3\",\"shapePosterScales\":\"X336\",\"titleID\":null,\"tvPosterScales\":\"X3\"}"), {
      headers: headers,
      timeout: timeout
    });
    _http["default"].get('https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"d59a3fa87b5205beb73ae0445db60adc9a32836337135ce2991cfa19d40496e3","version":1}}&id=d59a3fa87b5205beb73ae0445db60adc9a32836337135ce2991cfa19d40496e3&operationName=getLocale', {
      headers: headers,
      timeout: timeout
    });
    _http["default"].get('https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"021fc1d82f2a17f46c3de3cdbf4df33041d27f9c67d9016559089a74508750ce","version":1}}&id=021fc1d82f2a17f46c3de3cdbf4df33041d27f9c67d9016559089a74508750ce&operationName=getRemoteConfig&variables={"group":"APPLE_MOBILE","scope":"general"}', {
      headers: headers,
      timeout: timeout
    });
    _http["default"].get('https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"021fc1d82f2a17f46c3de3cdbf4df33041d27f9c67d9016559089a74508750ce","version":1}}&id=021fc1d82f2a17f46c3de3cdbf4df33041d27f9c67d9016559089a74508750ce&operationName=getRemoteConfig&variables={"group":"APPLE_MOBILE","scope":"title"}', {
      headers: headers,
      timeout: timeout
    });
    _http["default"].get('https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"021fc1d82f2a17f46c3de3cdbf4df33041d27f9c67d9016559089a74508750ce","version":1}}&id=021fc1d82f2a17f46c3de3cdbf4df33041d27f9c67d9016559089a74508750ce&operationName=getRemoteConfig&variables={"group":"APPLE_MOBILE","scope":"live"}', {
      headers: headers,
      timeout: timeout
    });
    _http["default"].get('https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"021fc1d82f2a17f46c3de3cdbf4df33041d27f9c67d9016559089a74508750ce","version":1}}&id=021fc1d82f2a17f46c3de3cdbf4df33041d27f9c67d9016559089a74508750ce&operationName=getRemoteConfig&variables={"group":"APPLE_MOBILE","scope":"sales"}', {
      headers: headers,
      timeout: timeout
    });
    _http["default"].get('https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"021fc1d82f2a17f46c3de3cdbf4df33041d27f9c67d9016559089a74508750ce","version":1}}&id=021fc1d82f2a17f46c3de3cdbf4df33041d27f9c67d9016559089a74508750ce&operationName=getRemoteConfig&variables={"group":"APPLE_MOBILE","scope":"home"}', {
      headers: headers,
      timeout: timeout
    });
    _http["default"].get('https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"021fc1d82f2a17f46c3de3cdbf4df33041d27f9c67d9016559089a74508750ce","version":1}}&id=021fc1d82f2a17f46c3de3cdbf4df33041d27f9c67d9016559089a74508750ce&operationName=getRemoteConfig&variables={"group":"APPLE_MOBILE","scope":"bbb"}', {
      headers: headers,
      timeout: timeout
    });
    _http["default"].get('https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"021fc1d82f2a17f46c3de3cdbf4df33041d27f9c67d9016559089a74508750ce","version":1}}&id=021fc1d82f2a17f46c3de3cdbf4df33041d27f9c67d9016559089a74508750ce&operationName=getRemoteConfig&variables={"group":"APPLE_MOBILE","scope":"podcast"}', {
      headers: headers,
      timeout: timeout
    });
    _http["default"].get('https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"021fc1d82f2a17f46c3de3cdbf4df33041d27f9c67d9016559089a74508750ce","version":1}}&id=021fc1d82f2a17f46c3de3cdbf4df33041d27f9c67d9016559089a74508750ce&operationName=getRemoteConfig&variables={"group":"APPLE_MOBILE","scope":"search"}', {
      headers: headers,
      timeout: timeout
    });
    _http["default"].get('https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"021fc1d82f2a17f46c3de3cdbf4df33041d27f9c67d9016559089a74508750ce","version":1}}&id=021fc1d82f2a17f46c3de3cdbf4df33041d27f9c67d9016559089a74508750ce&operationName=getRemoteConfig&variables={"group":"APPLE_MOBILE","scope":"grouper"}', {
      headers: headers,
      timeout: timeout
    });
    _http["default"].get('https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"021fc1d82f2a17f46c3de3cdbf4df33041d27f9c67d9016559089a74508750ce","version":1}}&id=021fc1d82f2a17f46c3de3cdbf4df33041d27f9c67d9016559089a74508750ce&operationName=getRemoteConfig&variables={"group":"APPLE_MOBILE","scope":"user-account"}', {
      headers: headers,
      timeout: timeout
    });
    _http["default"].get('https://cloud-jarvis.globo.com/graphql/?extensions={"persistedQuery":{"sha256Hash":"2d5e7baee8ae64c6dbeef9b7ec706345fe2919423d562a90f4938c143d213a2b","version":1}}&id=2d5e7baee8ae64c6dbeef9b7ec706345fe2919423d562a90f4938c143d213a2b&operationName=getEmptyStateOffer&variables={"group":"D2GO_EMPTY_STATE","perPage":5}', {
      headers: headers,
      timeout: timeout
    });
    _http["default"].get('https://cloud-jarvis.globo.com/graphql/?extensions={"persistedQuery":{"sha256Hash":"2023b7a4c2ec33db3f6c1ba1c00b7c87346d3fbcf31e0c9c1fa940f629390ba7","version":1}}&id=2023b7a4c2ec33db3f6c1ba1c00b7c87346d3fbcf31e0c9c1fa940f629390ba7&operationName=getHome&variables={"filter":{"subscriptionType":"ANONYMOUS","type":"HOME"},"id":"home"}', {
      headers: headers,
      timeout: timeout
    });
    _http["default"].get("https://cloud-jarvis.globo.com/graphql/?extensions={\"persistedQuery\":{\"sha256Hash\":\"28ce118987cd63f87f24877975d4f27c2f12ebce65a62daa2e3d9e4597298c2f\",\"version\":1}}&id=28ce118987cd63f87f24877975d4f27c2f12ebce65a62daa2e3d9e4597298c2f&operationName=getGenericHighlight&variables={\"cover4x5WidthsRecommends\":\"X1074\",\"cover16x9WidthsRecommends\":\"X1888\",\"cover21x9WidthsRecommends\":\"X1616\",\"coverLandscapeScale\":\"X1080\",\"coverPortraitScale\":\"X1152\",\"highlightCover4x5Widths\":\"X1074\",\"highlightCover16x9Focus\":\"RIGHT\",\"highlightCover16x9Widths\":\"X1888\",\"highlightCover21x9Widths\":\"X1616\",\"highlightImageMobileScales\":\"X3\",\"highlightImageTabletScales\":\"X3\",\"highlightImageTvScales\":\"X1_5\",\"highlightLogoMobileScales\":\"X3\",\"highlightLogoTabletScales\":\"X1\",\"highlightLogoTvScales\":\"X3\",\"highlightOfferImageMobileScales\":\"X3\",\"highlightOfferImageTabletScales\":\"X3\",\"id\":\"".concat(highlightOffer, "\",\"imageQuality\":\"X100\",\"logoHighlightLogoHeightsScale\":\"X108\"}"), {
      headers: headers,
      timeout: timeout
    });
    highlightOffer = highlights[Math.floor(Math.random() * highlights.length)];
    _http["default"].get("https://cloud-jarvis.globo.com/graphql/?extensions={\"persistedQuery\":{\"sha256Hash\":\"28ce118987cd63f87f24877975d4f27c2f12ebce65a62daa2e3d9e4597298c2f\",\"version\":1}}&id=28ce118987cd63f87f24877975d4f27c2f12ebce65a62daa2e3d9e4597298c2f&operationName=getGenericHighlight&variables={\"cover4x5WidthsRecommends\":\"X1074\",\"cover16x9WidthsRecommends\":\"X1888\",\"cover21x9WidthsRecommends\":\"X1616\",\"coverLandscapeScale\":\"X1080\",\"coverPortraitScale\":\"X1152\",\"highlightCover4x5Widths\":\"X1074\",\"highlightCover16x9Focus\":\"RIGHT\",\"highlightCover16x9Widths\":\"X1888\",\"highlightCover21x9Widths\":\"X1616\",\"highlightImageMobileScales\":\"X3\",\"highlightImageTabletScales\":\"X3\",\"highlightImageTvScales\":\"X1_5\",\"highlightLogoMobileScales\":\"X3\",\"highlightLogoTabletScales\":\"X1\",\"highlightLogoTvScales\":\"X3\",\"highlightOfferImageMobileScales\":\"X3\",\"highlightOfferImageTabletScales\":\"X3\",\"id\":\"".concat(highlightOffer, "\",\"imageQuality\":\"X100\",\"logoHighlightLogoHeightsScale\":\"X108\"}"), {
      headers: headers,
      timeout: timeout
    });
    highlightOffer = highlights[Math.floor(Math.random() * highlights.length)];
    _http["default"].get("https://cloud-jarvis.globo.com/graphql/?extensions={\"persistedQuery\":{\"sha256Hash\":\"28ce118987cd63f87f24877975d4f27c2f12ebce65a62daa2e3d9e4597298c2f\",\"version\":1}}&id=28ce118987cd63f87f24877975d4f27c2f12ebce65a62daa2e3d9e4597298c2f&operationName=getGenericHighlight&variables={\"cover4x5WidthsRecommends\":\"X1074\",\"cover16x9WidthsRecommends\":\"X1888\",\"cover21x9WidthsRecommends\":\"X1616\",\"coverLandscapeScale\":\"X1080\",\"coverPortraitScale\":\"X1152\",\"highlightCover4x5Widths\":\"X1074\",\"highlightCover16x9Focus\":\"RIGHT\",\"highlightCover16x9Widths\":\"X1888\",\"highlightCover21x9Widths\":\"X1616\",\"highlightImageMobileScales\":\"X3\",\"highlightImageTabletScales\":\"X3\",\"highlightImageTvScales\":\"X1_5\",\"highlightLogoMobileScales\":\"X3\",\"highlightLogoTabletScales\":\"X1\",\"highlightLogoTvScales\":\"X3\",\"highlightOfferImageMobileScales\":\"X3\",\"highlightOfferImageTabletScales\":\"X3\",\"id\":\"".concat(highlightOffer, "\",\"imageQuality\":\"X100\",\"logoHighlightLogoHeightsScale\":\"X108\"}"), {
      headers: headers,
      timeout: timeout
    });
    highlightOffer = highlights[Math.floor(Math.random() * highlights.length)];
    _http["default"].get("https://cloud-jarvis.globo.com/graphql/?extensions={\"persistedQuery\":{\"sha256Hash\":\"28ce118987cd63f87f24877975d4f27c2f12ebce65a62daa2e3d9e4597298c2f\",\"version\":1}}&id=28ce118987cd63f87f24877975d4f27c2f12ebce65a62daa2e3d9e4597298c2f&operationName=getGenericHighlight&variables={\"cover4x5WidthsRecommends\":\"X1074\",\"cover16x9WidthsRecommends\":\"X1888\",\"cover21x9WidthsRecommends\":\"X1616\",\"coverLandscapeScale\":\"X1080\",\"coverPortraitScale\":\"X1152\",\"highlightCover4x5Widths\":\"X1074\",\"highlightCover16x9Focus\":\"RIGHT\",\"highlightCover16x9Widths\":\"X1888\",\"highlightCover21x9Widths\":\"X1616\",\"highlightImageMobileScales\":\"X3\",\"highlightImageTabletScales\":\"X3\",\"highlightImageTvScales\":\"X1_5\",\"highlightLogoMobileScales\":\"X3\",\"highlightLogoTabletScales\":\"X1\",\"highlightLogoTvScales\":\"X3\",\"highlightOfferImageMobileScales\":\"X3\",\"highlightOfferImageTabletScales\":\"X3\",\"id\":\"".concat(highlightOffer, "\",\"imageQuality\":\"X100\",\"logoHighlightLogoHeightsScale\":\"X108\"}"), {
      headers: headers,
      timeout: timeout
    });
    highlightOffer = highlights[Math.floor(Math.random() * highlights.length)];
    _http["default"].get("https://cloud-jarvis.globo.com/graphql/?extensions={\"persistedQuery\":{\"sha256Hash\":\"28ce118987cd63f87f24877975d4f27c2f12ebce65a62daa2e3d9e4597298c2f\",\"version\":1}}&id=28ce118987cd63f87f24877975d4f27c2f12ebce65a62daa2e3d9e4597298c2f&operationName=getGenericHighlight&variables={\"cover4x5WidthsRecommends\":\"X1074\",\"cover16x9WidthsRecommends\":\"X1888\",\"cover21x9WidthsRecommends\":\"X1616\",\"coverLandscapeScale\":\"X1080\",\"coverPortraitScale\":\"X1152\",\"highlightCover4x5Widths\":\"X1074\",\"highlightCover16x9Focus\":\"RIGHT\",\"highlightCover16x9Widths\":\"X1888\",\"highlightCover21x9Widths\":\"X1616\",\"highlightImageMobileScales\":\"X3\",\"highlightImageTabletScales\":\"X3\",\"highlightImageTvScales\":\"X1_5\",\"highlightLogoMobileScales\":\"X3\",\"highlightLogoTabletScales\":\"X1\",\"highlightLogoTvScales\":\"X3\",\"highlightOfferImageMobileScales\":\"X3\",\"highlightOfferImageTabletScales\":\"X3\",\"id\":\"".concat(highlightOffer, "\",\"imageQuality\":\"X100\",\"logoHighlightLogoHeightsScale\":\"X108\"}"), {
      headers: headers,
      timeout: timeout
    });
    titleOffer = titleOffers[Math.floor(Math.random() * titleOffers.length)];
    _http["default"].get("https://cloud-jarvis.globo.com/graphql/?extensions={\"persistedQuery\":{\"sha256Hash\":\"28378b3b3e7340afe0f349e4476c3a48ee148ca4d841b408f6982de54da43be1\",\"version\":1}}&id=28378b3b3e7340afe0f349e4476c3a48ee148ca4d841b408f6982de54da43be1&operationName=getTitleOffer&variables={\"coverLandscapeScales\":\"X1080\",\"coverPortraitScales\":\"X1152\",\"id\":\"".concat(titleOffer, "\",\"page\":1,\"perPage\":6,\"posterLandscapeScales\":\"X624\",\"posterMobileScales\":\"X3\",\"posterTabletScales\":\"X3\",\"shapePosterScales\":\"X336\",\"titleID\":null,\"tvPosterScales\":\"X3\"}"), {
      headers: headers,
      timeout: timeout
    });
    _http["default"].get("https://cloud-jarvis.globo.com/graphql/?extensions={\"persistedQuery\":{\"sha256Hash\":\"ea7b76dc57b2ed9e08540336b391f4decc11c50f5174c0e2c18357100d6e2027\",\"version\":1}}&id=ea7b76dc57b2ed9e08540336b391f4decc11c50f5174c0e2c18357100d6e2027&operationName=getLocalizedOffer&variables={\"affiliateCode\":\"".concat(affiliateCode, "\",\"id\":\"").concat(broadcastOffer, "\",\"imageOnAirScale\":\"X1080\",\"landscapeScale\":\"X1080\",\"page\":1,\"perPage\":20,\"portraitScale\":\"X1152\",\"trimmedLogoScale\":\"X168\"}"), {
      headers: headers,
      timeout: timeout
    });
    _http["default"].get("https://cloud-jarvis.globo.com/graphql/?extensions={\"persistedQuery\":{\"sha256Hash\":\"bcf9c7b30a47c0b19753055ebf274de905ada376e45f515fd87261b1f192bb8a\",\"version\":1}}&id=bcf9c7b30a47c0b19753055ebf274de905ada376e45f515fd87261b1f192bb8a&operationName=getVideoOffer&variables={\"format\":null,\"id\":\"".concat(videoOffer, "\",\"imageOnAirScale\":\"X1080\",\"landscapeScale\":\"X1080\",\"logoMobileScales\":\"X3\",\"logoTabletScales\":\"X3\",\"logoTVScales\":null,\"page\":1,\"perPage\":6,\"portraitScale\":\"X1152\",\"thumbSize\":720,\"trimmedLogoScale\":\"X168\"}"), {
      headers: headers,
      timeout: timeout
    });
    titleOffer = titleOffers[Math.floor(Math.random() * titleOffers.length)];
    _http["default"].get("https://cloud-jarvis.globo.com/graphql/?extensions={\"persistedQuery\":{\"sha256Hash\":\"28378b3b3e7340afe0f349e4476c3a48ee148ca4d841b408f6982de54da43be1\",\"version\":1}}&id=28378b3b3e7340afe0f349e4476c3a48ee148ca4d841b408f6982de54da43be1&operationName=getTitleOffer&variables={\"coverLandscapeScales\":\"X1080\",\"coverPortraitScales\":\"X1152\",\"id\":\"".concat(titleOffer, "\",\"page\":1,\"perPage\":6,\"posterLandscapeScales\":\"X624\",\"posterMobileScales\":\"X3\",\"posterTabletScales\":\"X3\",\"shapePosterScales\":\"X336\",\"titleID\":null,\"tvPosterScales\":\"X3\"}"), {
      headers: headers,
      timeout: timeout
    });
    videoOffer = videoOffers[Math.floor(Math.random() * videoOffers.length)];
    _http["default"].get("https://cloud-jarvis.globo.com/graphql/?extensions={\"persistedQuery\":{\"sha256Hash\":\"bcf9c7b30a47c0b19753055ebf274de905ada376e45f515fd87261b1f192bb8a\",\"version\":1}}&id=bcf9c7b30a47c0b19753055ebf274de905ada376e45f515fd87261b1f192bb8a&operationName=getVideoOffer&variables={\"format\":null,\"id\":\"".concat(videoOffer, "\",\"imageOnAirScale\":\"X1080\",\"landscapeScale\":\"X1080\",\"logoMobileScales\":\"X3\",\"logoTabletScales\":\"X3\",\"logoTVScales\":null,\"page\":1,\"perPage\":6,\"portraitScale\":\"X1152\",\"thumbSize\":720,\"trimmedLogoScale\":\"X168\"}"), {
      headers: headers,
      timeout: timeout
    });
    videoOffer = videoOffers[Math.floor(Math.random() * videoOffers.length)];
    _http["default"].get("https://cloud-jarvis.globo.com/graphql/?extensions={\"persistedQuery\":{\"sha256Hash\":\"bcf9c7b30a47c0b19753055ebf274de905ada376e45f515fd87261b1f192bb8a\",\"version\":1}}&id=bcf9c7b30a47c0b19753055ebf274de905ada376e45f515fd87261b1f192bb8a&operationName=getVideoOffer&variables={\"format\":null,\"id\":\"".concat(videoOffer, "\",\"imageOnAirScale\":\"X1080\",\"landscapeScale\":\"X1080\",\"logoMobileScales\":\"X3\",\"logoTabletScales\":\"X3\",\"logoTVScales\":null,\"page\":1,\"perPage\":6,\"portraitScale\":\"X1152\",\"thumbSize\":720,\"trimmedLogoScale\":\"X168\"}"), {
      headers: headers,
      timeout: timeout
    });
    titleOffer = titleOffers[Math.floor(Math.random() * titleOffers.length)];
    _http["default"].get("https://cloud-jarvis.globo.com/graphql/?extensions={\"persistedQuery\":{\"sha256Hash\":\"28378b3b3e7340afe0f349e4476c3a48ee148ca4d841b408f6982de54da43be1\",\"version\":1}}&id=28378b3b3e7340afe0f349e4476c3a48ee148ca4d841b408f6982de54da43be1&operationName=getTitleOffer&variables={\"coverLandscapeScales\":\"X1080\",\"coverPortraitScales\":\"X1152\",\"id\":\"".concat(titleOffer, "\",\"page\":1,\"perPage\":6,\"posterLandscapeScales\":\"X624\",\"posterMobileScales\":\"X3\",\"posterTabletScales\":\"X3\",\"shapePosterScales\":\"X336\",\"titleID\":null,\"tvPosterScales\":\"X3\"}"), {
      headers: headers,
      timeout: timeout
    });
    videoOffer = videoOffers[Math.floor(Math.random() * videoOffers.length)];
    _http["default"].get("https://cloud-jarvis.globo.com/graphql/?extensions={\"persistedQuery\":{\"sha256Hash\":\"bcf9c7b30a47c0b19753055ebf274de905ada376e45f515fd87261b1f192bb8a\",\"version\":1}}&id=bcf9c7b30a47c0b19753055ebf274de905ada376e45f515fd87261b1f192bb8a&operationName=getVideoOffer&variables={\"format\":null,\"id\":\"".concat(videoOffer, "\",\"imageOnAirScale\":\"X1080\",\"landscapeScale\":\"X1080\",\"logoMobileScales\":\"X3\",\"logoTabletScales\":\"X3\",\"logoTVScales\":null,\"page\":1,\"perPage\":6,\"portraitScale\":\"X1152\",\"thumbSize\":720,\"trimmedLogoScale\":\"X168\"}"), {
      headers: headers,
      timeout: timeout
    });
    _http["default"].get("https://cloud-jarvis.globo.com/graphql/?extensions={\"persistedQuery\":{\"sha256Hash\":\"41857a134d59e4f5339d6d479e5959753f2c15ee26d9deed24bc50477803e3cb\",\"version\":1}}&id=41857a134d59e4f5339d6d479e5959753f2c15ee26d9deed24bc50477803e3cb&operationName=getChannelsLogoOffer&variables={\"logoScale\":\"X168\",\"offerid\":\"".concat(channelOffer, "\",\"page\":1,\"perPage\":6}"), {
      headers: headers,
      timeout: timeout
    });
    highlightOffer = highlights[Math.floor(Math.random() * highlights.length)];
    _http["default"].get("https://cloud-jarvis.globo.com/graphql/?extensions={\"persistedQuery\":{\"sha256Hash\":\"28ce118987cd63f87f24877975d4f27c2f12ebce65a62daa2e3d9e4597298c2f\",\"version\":1}}&id=28ce118987cd63f87f24877975d4f27c2f12ebce65a62daa2e3d9e4597298c2f&operationName=getGenericHighlight&variables={\"cover4x5WidthsRecommends\":\"X1074\",\"cover16x9WidthsRecommends\":\"X1888\",\"cover21x9WidthsRecommends\":\"X1616\",\"coverLandscapeScale\":\"X1080\",\"coverPortraitScale\":\"X1152\",\"highlightCover4x5Widths\":\"X1074\",\"highlightCover16x9Focus\":\"RIGHT\",\"highlightCover16x9Widths\":\"X1888\",\"highlightCover21x9Widths\":\"X1616\",\"highlightImageMobileScales\":\"X3\",\"highlightImageTabletScales\":\"X3\",\"highlightImageTvScales\":\"X1_5\",\"highlightLogoMobileScales\":\"X3\",\"highlightLogoTabletScales\":\"X1\",\"highlightLogoTvScales\":\"X3\",\"highlightOfferImageMobileScales\":\"X3\",\"highlightOfferImageTabletScales\":\"X3\",\"id\":\"".concat(highlightOffer, "\",\"imageQuality\":\"X100\",\"logoHighlightLogoHeightsScale\":\"X108\"}"), {
      headers: headers,
      timeout: timeout
    });
    _http["default"].get("https://cloud-jarvis.globo.com/graphql/?extensions={\"persistedQuery\":{\"sha256Hash\":\"74c8326e24e9cdba4176b5cf34f6234bcfca0c13249d2cb8810d5ebfb246ff2f\",\"version\":1}}&id=74c8326e24e9cdba4176b5cf34f6234bcfca0c13249d2cb8810d5ebfb246ff2f&operationName=getCategoriesBackgroundOffer&variables={\"coverScales\":\"X276\",\"offerid\":\"".concat(categoryOffer, "\",\"page\":1,\"perPage\":6}"), {
      headers: headers,
      timeout: timeout
    });
    broadcastOffer = broadcastOffers[Math.floor(Math.random() * broadcastOffers.length)];
    _http["default"].get("https://cloud-jarvis.globo.com/graphql/?extensions={\"persistedQuery\":{\"sha256Hash\":\"ea7b76dc57b2ed9e08540336b391f4decc11c50f5174c0e2c18357100d6e2027\",\"version\":1}}&id=ea7b76dc57b2ed9e08540336b391f4decc11c50f5174c0e2c18357100d6e2027&operationName=getLocalizedOffer&variables={\"affiliateCode\":\"".concat(affiliateCode, "\",\"id\":\"").concat(broadcastOffer, "\",\"imageOnAirScale\":\"X1080\",\"landscapeScale\":\"X1080\",\"page\":1,\"perPage\":20,\"portraitScale\":\"X1152\",\"trimmedLogoScale\":\"X168\"}"), {
      headers: headers,
      timeout: timeout
    });
    videoOffer = videoOffers[Math.floor(Math.random() * videoOffers.length)];
    _http["default"].get("https://cloud-jarvis.globo.com/graphql/?extensions={\"persistedQuery\":{\"sha256Hash\":\"bcf9c7b30a47c0b19753055ebf274de905ada376e45f515fd87261b1f192bb8a\",\"version\":1}}&id=bcf9c7b30a47c0b19753055ebf274de905ada376e45f515fd87261b1f192bb8a&operationName=getVideoOffer&variables={\"format\":null,\"id\":\"".concat(videoOffer, "\",\"imageOnAirScale\":\"X1080\",\"landscapeScale\":\"X1080\",\"logoMobileScales\":\"X3\",\"logoTabletScales\":\"X3\",\"logoTVScales\":null,\"page\":1,\"perPage\":6,\"portraitScale\":\"X1152\",\"thumbSize\":720,\"trimmedLogoScale\":\"X168\"}"), {
      headers: headers,
      timeout: timeout
    });
    titleOffer = titleOffers[Math.floor(Math.random() * titleOffers.length)];
    _http["default"].get("https://cloud-jarvis.globo.com/graphql/?extensions={\"persistedQuery\":{\"sha256Hash\":\"28378b3b3e7340afe0f349e4476c3a48ee148ca4d841b408f6982de54da43be1\",\"version\":1}}&id=28378b3b3e7340afe0f349e4476c3a48ee148ca4d841b408f6982de54da43be1&operationName=getTitleOffer&variables={\"coverLandscapeScales\":\"X1080\",\"coverPortraitScales\":\"X1152\",\"id\":\"".concat(titleOffer, "\",\"page\":1,\"perPage\":6,\"posterLandscapeScales\":\"X624\",\"posterMobileScales\":\"X3\",\"posterTabletScales\":\"X3\",\"shapePosterScales\":\"X336\",\"titleID\":null,\"tvPosterScales\":\"X3\"}"), {
      headers: headers,
      timeout: timeout
    });
    videoOffer = videoOffers[Math.floor(Math.random() * videoOffers.length)];
    _http["default"].get("https://cloud-jarvis.globo.com/graphql/?extensions={\"persistedQuery\":{\"sha256Hash\":\"bcf9c7b30a47c0b19753055ebf274de905ada376e45f515fd87261b1f192bb8a\",\"version\":1}}&id=bcf9c7b30a47c0b19753055ebf274de905ada376e45f515fd87261b1f192bb8a&operationName=getVideoOffer&variables={\"format\":null,\"id\":\"".concat(videoOffer, "\",\"imageOnAirScale\":\"X1080\",\"landscapeScale\":\"X1080\",\"logoMobileScales\":\"X3\",\"logoTabletScales\":\"X3\",\"logoTVScales\":null,\"page\":1,\"perPage\":6,\"portraitScale\":\"X1152\",\"thumbSize\":720,\"trimmedLogoScale\":\"X168\"}"), {
      headers: headers,
      timeout: timeout
    });
    titleOffer = titleOffers[Math.floor(Math.random() * titleOffers.length)];
    _http["default"].get("https://cloud-jarvis.globo.com/graphql/?extensions={\"persistedQuery\":{\"sha256Hash\":\"28378b3b3e7340afe0f349e4476c3a48ee148ca4d841b408f6982de54da43be1\",\"version\":1}}&id=28378b3b3e7340afe0f349e4476c3a48ee148ca4d841b408f6982de54da43be1&operationName=getTitleOffer&variables={\"coverLandscapeScales\":\"X1080\",\"coverPortraitScales\":\"X1152\",\"id\":\"".concat(titleOffer, "\",\"page\":1,\"perPage\":6,\"posterLandscapeScales\":\"X624\",\"posterMobileScales\":\"X3\",\"posterTabletScales\":\"X3\",\"shapePosterScales\":\"X336\",\"titleID\":null,\"tvPosterScales\":\"X3\"}"), {
      headers: headers,
      timeout: timeout
    });
    videoOffer = videoOffers[Math.floor(Math.random() * videoOffers.length)];
    _http["default"].get("https://cloud-jarvis.globo.com/graphql/?extensions={\"persistedQuery\":{\"sha256Hash\":\"bcf9c7b30a47c0b19753055ebf274de905ada376e45f515fd87261b1f192bb8a\",\"version\":1}}&id=bcf9c7b30a47c0b19753055ebf274de905ada376e45f515fd87261b1f192bb8a&operationName=getVideoOffer&variables={\"format\":null,\"id\":\"".concat(videoOffer, "\",\"imageOnAirScale\":\"X1080\",\"landscapeScale\":\"X1080\",\"logoMobileScales\":\"X3\",\"logoTabletScales\":\"X3\",\"logoTVScales\":null,\"page\":1,\"perPage\":6,\"portraitScale\":\"X1152\",\"thumbSize\":720,\"trimmedLogoScale\":\"X168\"}"), {
      headers: headers,
      timeout: timeout
    });
    titleOffer = titleOffers[Math.floor(Math.random() * titleOffers.length)];
    _http["default"].get("https://cloud-jarvis.globo.com/graphql/?extensions={\"persistedQuery\":{\"sha256Hash\":\"1caf08d93c8acc87ddf547c23662e04629aa851785e8f1d4566d9de603840ea3\",\"version\":1}}&id=1caf08d93c8acc87ddf547c23662e04629aa851785e8f1d4566d9de603840ea3&operationName=getRankedTitleOffer&variables={\"coverPortrait\":\"X1152\",\"id\":\"".concat(titleOffer, "\",\"page\":1,\"perPage\":10}"), {
      headers: headers,
      timeout: timeout
    });
    titleOffer = titleOffers[Math.floor(Math.random() * titleOffers.length)];
    _http["default"].get("https://cloud-jarvis.globo.com/graphql/?extensions={\"persistedQuery\":{\"sha256Hash\":\"28378b3b3e7340afe0f349e4476c3a48ee148ca4d841b408f6982de54da43be1\",\"version\":1}}&id=28378b3b3e7340afe0f349e4476c3a48ee148ca4d841b408f6982de54da43be1&operationName=getTitleOffer&variables={\"coverLandscapeScales\":\"X1080\",\"coverPortraitScales\":\"X1152\",\"id\":\"".concat(titleOffer, "\",\"page\":1,\"perPage\":6,\"posterLandscapeScales\":\"X624\",\"posterMobileScales\":\"X3\",\"posterTabletScales\":\"X3\",\"shapePosterScales\":\"X336\",\"titleID\":null,\"tvPosterScales\":\"X3\"}"), {
      headers: headers,
      timeout: timeout
    });
    titleOffer = titleOffers[Math.floor(Math.random() * titleOffers.length)];
    _http["default"].get("https://cloud-jarvis.globo.com/graphql/?extensions={\"persistedQuery\":{\"sha256Hash\":\"28378b3b3e7340afe0f349e4476c3a48ee148ca4d841b408f6982de54da43be1\",\"version\":1}}&id=28378b3b3e7340afe0f349e4476c3a48ee148ca4d841b408f6982de54da43be1&operationName=getTitleOffer&variables={\"coverLandscapeScales\":\"X1080\",\"coverPortraitScales\":\"X1152\",\"id\":\"".concat(titleOffer, "\",\"page\":1,\"perPage\":6,\"posterLandscapeScales\":\"X624\",\"posterMobileScales\":\"X3\",\"posterTabletScales\":\"X3\",\"shapePosterScales\":\"X336\",\"titleID\":null,\"tvPosterScales\":\"X3\"}"), {
      headers: headers,
      timeout: timeout
    });
    titleOffer = titleOffers[Math.floor(Math.random() * titleOffers.length)];
    _http["default"].get("https://cloud-jarvis.globo.com/graphql/?extensions={\"persistedQuery\":{\"sha256Hash\":\"28378b3b3e7340afe0f349e4476c3a48ee148ca4d841b408f6982de54da43be1\",\"version\":1}}&id=28378b3b3e7340afe0f349e4476c3a48ee148ca4d841b408f6982de54da43be1&operationName=getTitleOffer&variables={\"coverLandscapeScales\":\"X1080\",\"coverPortraitScales\":\"X1152\",\"id\":\"".concat(titleOffer, "\",\"page\":1,\"perPage\":6,\"posterLandscapeScales\":\"X624\",\"posterMobileScales\":\"X3\",\"posterTabletScales\":\"X3\",\"shapePosterScales\":\"X336\",\"titleID\":null,\"tvPosterScales\":\"X3\"}"), {
      headers: headers,
      timeout: timeout
    });
    categoryOffer = categoryOffers[Math.floor(Math.random() * categoryOffers.length)];
    _http["default"].get("https://cloud-jarvis.globo.com/graphql/?extensions={\"persistedQuery\":{\"sha256Hash\":\"74c8326e24e9cdba4176b5cf34f6234bcfca0c13249d2cb8810d5ebfb246ff2f\",\"version\":1}}&id=74c8326e24e9cdba4176b5cf34f6234bcfca0c13249d2cb8810d5ebfb246ff2f&operationName=getCategoriesBackgroundOffer&variables={\"coverScales\":\"X276\",\"offerid\":\"".concat(categoryOffer, "\",\"page\":1,\"perPage\":6}"), {
      headers: headers,
      timeout: timeout
    });
    titleOffer = titleOffers[Math.floor(Math.random() * titleOffers.length)];
    _http["default"].get("https://cloud-jarvis.globo.com/graphql/?extensions={\"persistedQuery\":{\"sha256Hash\":\"1caf08d93c8acc87ddf547c23662e04629aa851785e8f1d4566d9de603840ea3\",\"version\":1}}&id=1caf08d93c8acc87ddf547c23662e04629aa851785e8f1d4566d9de603840ea3&operationName=getRankedTitleOffer&variables={\"coverPortrait\":\"X1152\",\"id\":\"".concat(titleOffer, "\",\"page\":1,\"perPage\":10}"), {
      headers: headers,
      timeout: timeout
    });
    titleOffer = titleOffers[Math.floor(Math.random() * titleOffers.length)];
    _http["default"].get("https://cloud-jarvis.globo.com/graphql/?extensions={\"persistedQuery\":{\"sha256Hash\":\"28378b3b3e7340afe0f349e4476c3a48ee148ca4d841b408f6982de54da43be1\",\"version\":1}}&id=28378b3b3e7340afe0f349e4476c3a48ee148ca4d841b408f6982de54da43be1&operationName=getTitleOffer&variables={\"coverLandscapeScales\":\"X1080\",\"coverPortraitScales\":\"X1152\",\"id\":\"".concat(titleOffer, "\",\"page\":1,\"perPage\":6,\"posterLandscapeScales\":\"X624\",\"posterMobileScales\":\"X3\",\"posterTabletScales\":\"X3\",\"shapePosterScales\":\"X336\",\"titleID\":null,\"tvPosterScales\":\"X3\"}"), {
      headers: headers,
      timeout: timeout
    });
    titleOffer = titleOffers[Math.floor(Math.random() * titleOffers.length)];
    _http["default"].get("https://cloud-jarvis.globo.com/graphql/?extensions={\"persistedQuery\":{\"sha256Hash\":\"28378b3b3e7340afe0f349e4476c3a48ee148ca4d841b408f6982de54da43be1\",\"version\":1}}&id=28378b3b3e7340afe0f349e4476c3a48ee148ca4d841b408f6982de54da43be1&operationName=getTitleOffer&variables={\"coverLandscapeScales\":\"X1080\",\"coverPortraitScales\":\"X1152\",\"id\":\"".concat(titleOffer, "\",\"page\":1,\"perPage\":6,\"posterLandscapeScales\":\"X624\",\"posterMobileScales\":\"X3\",\"posterTabletScales\":\"X3\",\"shapePosterScales\":\"X336\",\"titleID\":null,\"tvPosterScales\":\"X3\"}"), {
      headers: headers,
      timeout: timeout
    });
    _http["default"].get("https://cloud-jarvis.globo.com/graphql/?extensions={\"persistedQuery\":{\"sha256Hash\":\"1d741980383148946366aa903cfb7de7e4243c7f32f71529200e25541e7b7387\",\"version\":1}}&id=1d741980383148946366aa903cfb7de7e4243c7f32f71529200e25541e7b7387&operationName=getLiveBroadcast&variables={\"cover4x5Widths\":\"X1074\",\"cover16x9Widths\":\"X1888\",\"cover21x9Widths\":\"X1616\",\"filter\":{\"affiliateCode\":\"".concat(affiliateCode, "\"},\"imageQuality\":\"X100\",\"landscapeScale\":\"X1080\",\"mediaId\":\"6120663\",\"portraitScale\":\"X1152\",\"scaleOnAir\":\"X1080\",\"scaleTrimmedLogo\":\"X168\"}"), {
      headers: headers,
      timeout: timeout
    });
    titleOffer = titleOffers[Math.floor(Math.random() * titleOffers.length)];
    _http["default"].get("https://cloud-jarvis.globo.com/graphql/?extensions={\"persistedQuery\":{\"sha256Hash\":\"28378b3b3e7340afe0f349e4476c3a48ee148ca4d841b408f6982de54da43be1\",\"version\":1}}&id=28378b3b3e7340afe0f349e4476c3a48ee148ca4d841b408f6982de54da43be1&operationName=getTitleOffer&variables={\"coverLandscapeScales\":\"X1080\",\"coverPortraitScales\":\"X1152\",\"id\":\"".concat(titleOffer, "\",\"page\":1,\"perPage\":6,\"posterLandscapeScales\":\"X624\",\"posterMobileScales\":\"X3\",\"posterTabletScales\":\"X3\",\"shapePosterScales\":\"X336\",\"titleID\":null,\"tvPosterScales\":\"X3\"}"), {
      headers: headers,
      timeout: timeout
    });
    _http["default"].get("https://cloud-jarvis.globo.com/graphql/?extensions={\"persistedQuery\":{\"sha256Hash\":\"9e71c5d0debd3f16c1cc21e94915c20abcf928df2ae613869f1f0fecd71308f5\",\"version\":1}}&id=9e71c5d0debd3f16c1cc21e94915c20abcf928df2ae613869f1f0fecd71308f5&operationName=getExternalTitle&variables={\"offerId\":\"".concat(externalTitleOffer, "\",\"page\":1,\"perPage\":6,\"posterScales\":\"X648\"}"), {
      headers: headers,
      timeout: timeout
    });
    highlightOffer = highlights[Math.floor(Math.random() * highlights.length)];
    _http["default"].get("https://cloud-jarvis.globo.com/graphql/?extensions={\"persistedQuery\":{\"sha256Hash\":\"28ce118987cd63f87f24877975d4f27c2f12ebce65a62daa2e3d9e4597298c2f\",\"version\":1}}&id=28ce118987cd63f87f24877975d4f27c2f12ebce65a62daa2e3d9e4597298c2f&operationName=getGenericHighlight&variables={\"cover4x5WidthsRecommends\":\"X1074\",\"cover16x9WidthsRecommends\":\"X1888\",\"cover21x9WidthsRecommends\":\"X1616\",\"coverLandscapeScale\":\"X1080\",\"coverPortraitScale\":\"X1152\",\"highlightCover4x5Widths\":\"X1074\",\"highlightCover16x9Focus\":\"RIGHT\",\"highlightCover16x9Widths\":\"X1888\",\"highlightCover21x9Widths\":\"X1616\",\"highlightImageMobileScales\":\"X3\",\"highlightImageTabletScales\":\"X3\",\"highlightImageTvScales\":\"X1_5\",\"highlightLogoMobileScales\":\"X3\",\"highlightLogoTabletScales\":\"X1\",\"highlightLogoTvScales\":\"X3\",\"highlightOfferImageMobileScales\":\"X3\",\"highlightOfferImageTabletScales\":\"X3\",\"id\":\"".concat(highlightOffer, "\",\"imageQuality\":\"X100\",\"logoHighlightLogoHeightsScale\":\"X108\"}"), {
      headers: headers,
      timeout: timeout
    });
    externalTitleOffer = externalTitleOffers[Math.floor(Math.random() * externalTitleOffers.length)];
    _http["default"].get("https://cloud-jarvis.globo.com/graphql/?extensions={\"persistedQuery\":{\"sha256Hash\":\"9e71c5d0debd3f16c1cc21e94915c20abcf928df2ae613869f1f0fecd71308f5\",\"version\":1}}&id=9e71c5d0debd3f16c1cc21e94915c20abcf928df2ae613869f1f0fecd71308f5&operationName=getExternalTitle&variables={\"offerId\":\"".concat(externalTitleOffer, "\",\"page\":1,\"perPage\":6,\"posterScales\":\"X648\"}"), {
      headers: headers,
      timeout: timeout
    });
    videoOffer = videoOffers[Math.floor(Math.random() * videoOffers.length)];
    _http["default"].get("https://cloud-jarvis.globo.com/graphql/?extensions={\"persistedQuery\":{\"sha256Hash\":\"bcf9c7b30a47c0b19753055ebf274de905ada376e45f515fd87261b1f192bb8a\",\"version\":1}}&id=bcf9c7b30a47c0b19753055ebf274de905ada376e45f515fd87261b1f192bb8a&operationName=getVideoOffer&variables={\"format\":null,\"id\":\"".concat(videoOffer, "\",\"imageOnAirScale\":\"X1080\",\"landscapeScale\":\"X1080\",\"logoMobileScales\":\"X3\",\"logoTabletScales\":\"X3\",\"logoTVScales\":null,\"page\":1,\"perPage\":6,\"portraitScale\":\"X1152\",\"thumbSize\":720,\"trimmedLogoScale\":\"X168\"}"), {
      headers: headers,
      timeout: timeout
    });
    categoryOffer = categoryOffers[Math.floor(Math.random() * categoryOffers.length)];
    _http["default"].get("https://cloud-jarvis.globo.com/graphql/?extensions={\"persistedQuery\":{\"sha256Hash\":\"74c8326e24e9cdba4176b5cf34f6234bcfca0c13249d2cb8810d5ebfb246ff2f\",\"version\":1}}&id=74c8326e24e9cdba4176b5cf34f6234bcfca0c13249d2cb8810d5ebfb246ff2f&operationName=getCategoriesBackgroundOffer&variables={\"coverScales\":\"X276\",\"offerid\":\"".concat(categoryOffer, "\",\"page\":1,\"perPage\":6}"), {
      headers: headers,
      timeout: timeout
    });
    highlightOffer = highlights[Math.floor(Math.random() * highlights.length)];
    _http["default"].get("https://cloud-jarvis.globo.com/graphql/?extensions={\"persistedQuery\":{\"sha256Hash\":\"28ce118987cd63f87f24877975d4f27c2f12ebce65a62daa2e3d9e4597298c2f\",\"version\":1}}&id=28ce118987cd63f87f24877975d4f27c2f12ebce65a62daa2e3d9e4597298c2f&operationName=getGenericHighlight&variables={\"cover4x5WidthsRecommends\":\"X1074\",\"cover16x9WidthsRecommends\":\"X1888\",\"cover21x9WidthsRecommends\":\"X1616\",\"coverLandscapeScale\":\"X1080\",\"coverPortraitScale\":\"X1152\",\"highlightCover4x5Widths\":\"X1074\",\"highlightCover16x9Focus\":\"RIGHT\",\"highlightCover16x9Widths\":\"X1888\",\"highlightCover21x9Widths\":\"X1616\",\"highlightImageMobileScales\":\"X3\",\"highlightImageTabletScales\":\"X3\",\"highlightImageTvScales\":\"X1_5\",\"highlightLogoMobileScales\":\"X3\",\"highlightLogoTabletScales\":\"X1\",\"highlightLogoTvScales\":\"X3\",\"highlightOfferImageMobileScales\":\"X3\",\"highlightOfferImageTabletScales\":\"X3\",\"id\":\"".concat(highlightOffer, "\",\"imageQuality\":\"X100\",\"logoHighlightLogoHeightsScale\":\"X108\"}"), {
      headers: headers,
      timeout: timeout
    });
    _http["default"].get('https://cloud-jarvis.globo.com/graphql/?extensions={"persistedQuery":{"sha256Hash":"1881b6a318a9392fa7cf00c250f9a9eb211cd7522767a83179ec5652252f83fb","version":1}}&id=1881b6a318a9392fa7cf00c250f9a9eb211cd7522767a83179ec5652252f83fb&operationName=getPodcastOffer&variables={"id":"6de8506c-ad0c-400e-94ff-ee8fdf2b888a","page":1,"perPage":6,"posterScales":"x504"}', {
      headers: headers,
      timeout: timeout
    });
  });
  (0, _k.sleep)(0.1);
};
exports["default"] = _default;