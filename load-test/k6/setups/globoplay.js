export { default as homeLoadWebTest } from '../scenarios/web/home-load-web-test.js'
export { default as channelsLoadWebTest } from '../scenarios/web/channels-load-web-test.js'
export { default as vodLoadWebTest } from '../scenarios/web/vod-load-web-test.js'

export { default as homeLoadIOSTest } from '../scenarios/ios/home-load-ios-test.js'
export { default as channelsLoadIOSTest } from '../scenarios/ios/channels-load-ios-test.js'
export { default as vodLoadIOSTest } from '../scenarios/ios/vod-load-ios-test.js'

const TOTAL_VUS = __ENV.TOTAL_VUS || 10
const DURATION_MIXED_TEST = __ENV.DURATION_MIXED_TEST || '10s'

const getVUCount = percentage => Math.floor(TOTAL_VUS * percentage) || 1

const percentageByScenarios = {
  homeLoadWeb: 0.125,
  channelsLoadWeb: 0.125,
  vodLoadWeb: 0.125,
  homeLoadIOS: 0.125,
  channelsLoadIOS: 0.125,
  vodLoadIOS: 0.125
}

export const options = {
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
}
