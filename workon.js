import http from 'k6/http';
import { check, sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
// import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";

export let options = {
  stages: [
    { duration: '20s', target: 100 },
    { duration: '20s', target: 100 },
    { duration: '20s', target: 0 },
  ],
};

export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data)
    // Mostrar o resultado tanto na linha de comando quanto no result.html
    // "result.html": htmlReport(data),
    // stdout: textSummary(data, { indent: " ", enableColors: true }),
  };
}

export default function () {
  let url = "https://workon.apps.tsuru.gcp.i.globo/"
  let result = http.get(url);
  check(result, { 'status was 200': (r) => r.status == 200 });
  sleep(0.1);
}

