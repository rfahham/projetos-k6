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
    Stages: {
      executor: 'ramping-vus',
      gracefulStop: '30s',
      stages: [
        { target: 1, duration: '10s' },
        { target: 1, duration: '10s' },
        { target: 0, duration: '10s' },
      ],
      gracefulRampDown: '30s',
      exec: 'stages',
    },
  },
}

export function stages() {
  let response

  // home globoplay
  response = http.get('https://globoplay.globo.com/')

  // Automatically added sleep
  sleep(1)
}

