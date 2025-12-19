import http from 'k6/http';

export const options = {
  vus: 1,
  duration: '30s',
};

export default function () {

    const request = http.get('http://test.k6.io');
    
    console.log('Status Code: ', request.status)
    
};
