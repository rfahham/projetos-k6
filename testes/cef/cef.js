import http from 'k6/http';
import { check, sleep } from 'k6';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';

export const options = {
    stages: [
        { duration: '30s', target: 10 },   // ramp-up
        { duration: '1m30s', target: 10 }, // carga constante
        { duration: '20s', target: 0 },    // ramp-down
    ],
    thresholds: {
        http_req_failed: ['rate<0.01'],
        http_req_duration: ['p(95)<10000'],
    },
};

export default function () {
    const login =
        'https://login.caixa.gov.br/auth/realms/internet/protocol/openid-connect/auth' +
        '?client_id=cli-web-lce' +
        '&redirect_uri=https%3A%2F%2Fwww.loteriasonline.caixa.gov.br%2Fsilce-web%2F%23%2Fhome' +
        '&state=cd07c3ea-7219-46f5-8063-1be81174a549' +
        '&response_mode=fragment' +
        '&response_type=code' +
        '&scope=openid' +
        '&nonce=b9f521c8-4f00-428f-9209-4382f4851797';
    
        const produtos = 'https://www.loteriasonline.caixa.gov.br/silce-web/?qfqid=xdl51MsEhtshtcslyeA35kMb&qfts=1767269136&qfa=caixa&qfq=loteriasprd&qfpt=Queued&qfh=c06887ecacf7dd079b690aeb9d70d1e258d371c10394091bc01353f0177fb125#/home';

    const res = http.get(produtos);
    console.log('Status code was ' + String(res.status));

    check(res, {
        'status is 200': (r) => r.status === 200,
    });

    sleep(1);
}

// 🔹 Geração do relatório HTML
export function handleSummary(data) {
    return {
        'report-performance.html': htmlReport(data),
    };
}
