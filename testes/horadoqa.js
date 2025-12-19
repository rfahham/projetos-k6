import http from 'k6/http';

export const options = {
	stages: [
	  { duration: '30s', target: 100 },
	  { duration: '10m', target: 100 },
	  { duration: '20s', target: 0 },
	],
  
  };
export default function () {
	const res = http.get('https://www.horadoqa.com.br/');
	// console.log(res.status)
};
