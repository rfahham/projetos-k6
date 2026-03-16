import http from 'k6/http';
import { check } from 'k6';

const BASE_URL = 'https://www.quintoandar.com.br/';

// Aumentando gradualmente o número de usuários virtuais para simular um aumento de tráfego no site
export const options = {
    stages: [
      { duration: '30s', target: 100 },
      { duration: '30s', target: 200 },
      { duration: '30s', target: 300 },
      { duration: '30s', target: 400 }, // Corte do site
      { duration: '30s', target: 500 },
      { duration: '30s', target: 0 },
    ],
  
  };
export default function () {
    const res = http.get(BASE_URL);
    check(res, { 'status was 200': (r) => r.status == 200 });
    console.log('Response time was ' + String(res.timings.duration) + ' ms');
    console.log('Response size: ' + String(res.body.length) + ' bytes');
    console.log('Status code was ' + String(res.status));
    // console.log('URL: ' + String(res.url));
    // console.log('Protocol: ' + String(res.proto));
    // console.log('Quantiidade de Vus: ' + String(__VU));
    console.log('-----------------------------------');

};

