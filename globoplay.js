import { sleep } from 'k6'
import http from 'k6/http'

export const options = {
  stages: [
    { duration: '10s', target: 10 },
    { duration: '10s', target: 20 },
    { duration: '10s', target: 0 },
  ],
};

export function stages() {
  let response

  // home globoplay
  response = http.get('https://globoplay.globo.com/')

  // Automatically added sleep
  sleep(1)
}

