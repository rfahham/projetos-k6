import { sleep } from 'k6'
import http from 'k6/http'

export const options = {
  ext: {
    loadimpact: {
      distribution: { 'amazon:br:sao paulo': { loadZone: 'amazon:br:sao paulo', percent: 100 } },
      apm: [],
    },
  },
  thresholds: {},
  scenarios: {
    stages: {
      executor: 'ramping-vus',
      gracefulStop: '30s',
      stages: [
        { target: 10, duration: '10s' },
        { target: 50, duration: '10s' },
        { target: 0, duration: '10s' },
      ],
      startVUs: 0,
      gracefulRampDown: '30s',
      exec: 'stages',
    },
  },
}

export function stages() {
  let response

  // home globo.com
  response = http.get('https://www.globo.com/')

  // Automatically added sleep
  sleep(1)
}

