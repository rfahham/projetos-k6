import { sleep } from 'k6'
import http from 'k6/http'

export const options = {
      stages: [
        { target: 10, duration: '10s' },
        { target: 50, duration: '10s' },
        { target: 0, duration: '10s' },
      ]
}

export function stages() {
  let response

  // home globo.com
  response = http.get('https://www.globo.com/')

  // Automatically added sleep
  sleep(1)
}
