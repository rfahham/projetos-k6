import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '10s', target: 10 },
    { duration: '60s', target: 20 },
    { duration: '10s', target: 0 },
  ],
};

function url1() {
  const res = http.get('https://globo.com/');
  check(res, { 'status was 200': (r) => r.status == 200 });
  console.log('Response time was ' + String(res.timings.duration) + ' ms');
  console.log('Response size: ' + String(res.body.length) + ' bytes');
  console.log('Status code was ' + String(res.status));
  console.log('-----------------------------------');
  sleep(1);
}

function url2() {
  const res = http.get('https://www.btgpactual.com/');
  check(res, { 'status was 200': (r) => r.status == 200 });
  console.log('Response time was ' + String(res.timings.duration) + ' ms');
  console.log('Response size: ' + String(res.body.length) + ' bytes');
  console.log('Status code was ' + String(res.status));
  console.log('-----------------------------------');
  sleep(1);
}

function url3() {
  const res = http.get('https://www.itau.com.br/');
  check(res, { 'status was 200': (r) => r.status == 200 });
  console.log('Response time was ' + String(res.timings.duration) + ' ms');
  console.log('Response size: ' + String(res.body.length) + ' bytes');
  console.log('Status code was ' + String(res.status));
  console.log('-----------------------------------');
  sleep(1);
}

function url4() {
  const res = http.get('https://www.olx.com.br');
  check(res, { 'status was 200': (r) => r.status == 200 });
  console.log('Response time was ' + String(res.timings.duration) + ' ms');
  console.log('Response size: ' + String(res.body.length) + ' bytes');
  console.log('Status code was ' + String(res.status));
  console.log('-----------------------------------');
  sleep(1);
}

export default function testSuite() {
  url1();
  url2();
  url3();
  url4();
}