"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "homeLoadTvNativaTest", {
  enumerable: true,
  get: function get() {
    return _homeCopaTvNativaTest["default"];
  }
});
Object.defineProperty(exports, "homeLoadTvRokuTest", {
  enumerable: true,
  get: function get() {
    return _homeCopaTvRokuTest["default"];
  }
});
Object.defineProperty(exports, "homeLoadTvWebappTest", {
  enumerable: true,
  get: function get() {
    return _homeCopaTvWebappTest["default"];
  }
});
exports.options = void 0;
Object.defineProperty(exports, "tituloLoadTvNativaTest", {
  enumerable: true,
  get: function get() {
    return _tituloCopaTvNativaTest["default"];
  }
});
Object.defineProperty(exports, "tituloLoadTvRokuTest", {
  enumerable: true,
  get: function get() {
    return _tituloCopaTvRokuTest["default"];
  }
});
Object.defineProperty(exports, "tituloLoadTvWebappTest", {
  enumerable: true,
  get: function get() {
    return _tituloCopaTvWebappTest["default"];
  }
});
Object.defineProperty(exports, "trocacanaisLoadTvNativaTest", {
  enumerable: true,
  get: function get() {
    return _trocacanaisCopaTvNativaTest["default"];
  }
});
Object.defineProperty(exports, "trocacanaisLoadTvRokuTest", {
  enumerable: true,
  get: function get() {
    return _trocacanaisCopaTvRokuTest["default"];
  }
});
Object.defineProperty(exports, "trocacanaisLoadTvWebappTest", {
  enumerable: true,
  get: function get() {
    return _trocacanaisCopaTvWebappTest["default"];
  }
});
var _homeCopaTvNativaTest = _interopRequireDefault(require("../scenarios/tv-nativa/home-copa-tv-nativa-test.js"));
var _tituloCopaTvNativaTest = _interopRequireDefault(require("../scenarios/tv-nativa/titulo-copa-tv-nativa-test.js"));
var _trocacanaisCopaTvNativaTest = _interopRequireDefault(require("../scenarios/tv-nativa/trocacanais-copa-tv-nativa-test.js"));
var _homeCopaTvRokuTest = _interopRequireDefault(require("../scenarios/tv-roku/home-copa-tv-roku-test.js"));
var _tituloCopaTvRokuTest = _interopRequireDefault(require("../scenarios/tv-roku/titulo-copa-tv-roku-test.js"));
var _trocacanaisCopaTvRokuTest = _interopRequireDefault(require("../scenarios/tv-roku/trocacanais-copa-tv-roku-test.js"));
var _homeCopaTvWebappTest = _interopRequireDefault(require("../scenarios/tv-webapp/home-copa-tv-webapp-test.js"));
var _tituloCopaTvWebappTest = _interopRequireDefault(require("../scenarios/tv-webapp/titulo-copa-tv-webapp-test.js"));
var _trocacanaisCopaTvWebappTest = _interopRequireDefault(require("../scenarios/tv-webapp/trocacanais-copa-tv-webapp-test.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var TOTAL_VUS = __ENV.TOTAL_VUS || 1000;
var DURATION_MIXED_TEST = __ENV.DURATION_MIXED_TEST || '300s';
var getVUCount = function getVUCount(percentage) {
  return Math.floor(TOTAL_VUS * percentage) || 1;
};
var percentageByScenarios = {
  homeLoadTvNativa: 0.125,
  tituloLoadTvNativa: 0.125,
  trocacanaisLoadTvNativa: 0.125,
  homeLoadTvRoku: 0.125,
  tituloLoadTvRoku: 0.125,
  trocacanaisLoadTvRoku: 0.125,
  homeLoadTvWebapp: 0.125,
  tituloLoadTvWebapp: 0.125,
  trocacanaisLoadTvWebapp: 0.125
};
var options = {
  vus: 1,
  discardResponseBodies: true,
  scenarios: {
    homeLoadTvNativa: {
      executor: 'constant-vus',
      exec: 'homeLoadTvNativaTest',
      duration: DURATION_MIXED_TEST,
      vus: getVUCount(percentageByScenarios.homeLoadTvNativa)
    },
    tituloLoadTvNativa: {
      executor: 'constant-vus',
      exec: 'tituloLoadTvNativaTest',
      duration: DURATION_MIXED_TEST,
      vus: getVUCount(percentageByScenarios.tituloLoadTvNativa)
    },
    trocacanaisLoadTvNativa: {
      executor: 'constant-vus',
      exec: 'trocacanaisLoadTvNativaTest',
      duration: DURATION_MIXED_TEST,
      vus: getVUCount(percentageByScenarios.trocacanaisLoadTvNativa)
    },
    homeLoadTvRoku: {
      executor: 'constant-vus',
      exec: 'homeLoadTvRokuTest',
      duration: DURATION_MIXED_TEST,
      vus: getVUCount(percentageByScenarios.homeLoadTvRoku)
    },
    tituloLoadTvRoku: {
      executor: 'constant-vus',
      exec: 'tituloLoadTvRokuTest',
      duration: DURATION_MIXED_TEST,
      vus: getVUCount(percentageByScenarios.tituloLoadTvRoku)
    },
    trocacanaisLoadTvRoku: {
      executor: 'constant-vus',
      exec: 'trocacanaisLoadTvRokuTest',
      duration: DURATION_MIXED_TEST,
      vus: getVUCount(percentageByScenarios.trocacanaisLoadTvRoku)
    },
    homeLoadTvWebapp: {
      executor: 'constant-vus',
      exec: 'homeLoadTvWebappTest',
      duration: DURATION_MIXED_TEST,
      vus: getVUCount(percentageByScenarios.homeLoadTvWebapp)
    },
    tituloLoadTvWebapp: {
      executor: 'constant-vus',
      exec: 'tituloLoadTvWebappTest',
      duration: DURATION_MIXED_TEST,
      vus: getVUCount(percentageByScenarios.tituloLoadTvWebapp)
    },
    trocacanaisLoadTvWebapp: {
      executor: 'constant-vus',
      exec: 'trocacanaisLoadTvWebappTest',
      duration: DURATION_MIXED_TEST,
      vus: getVUCount(percentageByScenarios.trocacanaisLoadTvWebapp)
    }
  }
};
exports.options = options;