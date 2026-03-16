import http from 'k6/http'
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '10s', target: 10 },
    { duration: '10s', target: 10 },
    { duration: '10s', target: 0 },
  ],
};

export default function () {
  const res = http.get('https://globo.com/');
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(0.1); 
}
