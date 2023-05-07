"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "channelsLoadIOSTest", {
  enumerable: true,
  get: function get() {
    return _channelsLoadIosTest["default"];
  }
});
Object.defineProperty(exports, "channelsLoadWebTest", {
  enumerable: true,
  get: function get() {
    return _channelsLoadWebTest["default"];
  }
});
Object.defineProperty(exports, "homeLoadIOSTest", {
  enumerable: true,
  get: function get() {
    return _homeLoadIosTest["default"];
  }
});
Object.defineProperty(exports, "homeLoadWebTest", {
  enumerable: true,
  get: function get() {
    return _homeLoadWebTest["default"];
  }
});
exports.options = void 0;
Object.defineProperty(exports, "vodLoadIOSTest", {
  enumerable: true,
  get: function get() {
    return _vodLoadIosTest["default"];
  }
});
Object.defineProperty(exports, "vodLoadWebTest", {
  enumerable: true,
  get: function get() {
    return _vodLoadWebTest["default"];
  }
});
var _homeLoadWebTest = _interopRequireDefault(require("../scenarios/web/home-load-web-test.js"));
var _channelsLoadWebTest = _interopRequireDefault(require("../scenarios/web/channels-load-web-test.js"));
var _vodLoadWebTest = _interopRequireDefault(require("../scenarios/web/vod-load-web-test.js"));
var _homeLoadIosTest = _interopRequireDefault(require("../scenarios/ios/home-load-ios-test.js"));
var _channelsLoadIosTest = _interopRequireDefault(require("../scenarios/ios/channels-load-ios-test.js"));
var _vodLoadIosTest = _interopRequireDefault(require("../scenarios/ios/vod-load-ios-test.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var TOTAL_VUS = __ENV.TOTAL_VUS || 1000;
var DURATION_MIXED_TEST = __ENV.DURATION_MIXED_TEST || '900s';
var getVUCount = function getVUCount(percentage) {
  return Math.floor(TOTAL_VUS * percentage) || 1;
};
var percentageByScenarios = {
  homeLoadWeb: 0.125,
  channelsLoadWeb: 0.125,
  vodLoadWeb: 0.125,
  homeLoadIOS: 0.125,
  channelsLoadIOS: 0.125,
  vodLoadIOS: 0.125
};
var options = {
  vus: 1,
  discardResponseBodies: true,
  scenarios: {
    homeLoadWeb: {
      executor: 'constant-vus',
      exec: 'homeLoadWebTest',
      duration: DURATION_MIXED_TEST,
      vus: getVUCount(percentageByScenarios.homeLoadWeb)
    },
    channelsLoadWeb: {
      executor: 'constant-vus',
      exec: 'channelsLoadWebTest',
      duration: DURATION_MIXED_TEST,
      vus: getVUCount(percentageByScenarios.channelsLoadWeb)
    },
    vodLoadWeb: {
      executor: 'constant-vus',
      exec: 'vodLoadWebTest',
      duration: DURATION_MIXED_TEST,
      vus: getVUCount(percentageByScenarios.vodLoadWeb)
    },
    homeLoadIOS: {
      executor: 'constant-vus',
      exec: 'homeLoadIOSTest',
      duration: DURATION_MIXED_TEST,
      vus: getVUCount(percentageByScenarios.homeLoadIOS)
    },
    channelsLoadIOS: {
      executor: 'constant-vus',
      exec: 'channelsLoadIOSTest',
      duration: DURATION_MIXED_TEST,
      vus: getVUCount(percentageByScenarios.channelsLoadIOS)
    },
    vodLoadIOS: {
      executor: 'constant-vus',
      exec: 'vodLoadIOSTest',
      duration: DURATION_MIXED_TEST,
      vus: getVUCount(percentageByScenarios.vodLoadIOS)
    }
  }
};
exports.options = options;