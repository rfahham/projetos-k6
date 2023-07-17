// Parallel requests in k6

import { check } from 'k6';
import http from 'k6/http';

const domain = 'https://test.k6.io';

export default function () {
    let responses = http.batch([
        ['GET', domain + '/'],
        ['GET', domain + '/static/css/site.css'],
        ['GET', domain + '/static/js/prisms.js'],
        ['GET', domain + '/static/favicon.ico']
    ])
  check(responses[0], {
    'Homepage successfully loaded': (r) => r.body.includes("Collection of simple web-pages suitable for load testing"),
  });
}


// https://github.com/grafana/k6-learn/blob/main/Modules/III-k6-Intermediate/05-Parallel-requests-in-k6.md