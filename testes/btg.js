import http from 'k6/http';
import { check } from 'k6';

export const options = {
	stages: [
	  { duration: '30s', target: 10 },
	  { duration: '30s', target: 100 },
	  { duration: '20s', target: 0 },
	],
  
  };
export default function () {
	const res = http.get('https://www.btgpactual.com/');
    check(res, { 'status was 200': (r) => r.status == 200 });
	// console.log(res.status)
};

