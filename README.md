# projetos-k6

Site oficial: https://k6.io

Documentação: https://grafana.com/docs/k6/latest/

Instalação: https://grafana.com/docs/k6/latest/set-up/install-k6/

## Saber a versão

```bash
k6 --version
    k6 v0.51.0 (commit/33d3caa7d1, go1.22.3, linux/amd64)
```

## Criar um script

```bash
k6 new script.js
```

## Executar o k6

```bash
k6 run script.js
```

## Output do K6

    k6 run script.js

            /\      |‾‾| /‾‾/   /‾‾/
       /\  /  \     |  |/  /   /  /
      /  \/    \    |     (   /   ‾‾\
     /          \   |  |\  \ |  (‾)  |
    / __________ \  |__| \__\ \_____/ .io

        execution: local
            script: script.js
            output: -

        scenarios: (100.00%) 1 scenario, 10 max VUs, 1m0s max duration (incl. graceful stop):
                * default: 10 looping VUs for 30s (gracefulStop: 30s)


        data_received..................: 3.0 MB 97 kB/s
        data_sent......................: 29 kB  919 B/s
        http_req_blocked...............: avg=16.88ms  min=2.8µs    med=7.15µs   max=436.19ms p(90)=14.1µs   p(95)=38.58µs
        http_req_connecting............: avg=6.32ms   min=0s       med=0s       max=166.16ms p(90)=0s       p(95)=0s
        http_req_duration..............: avg=177.38ms min=151.3ms  med=158.59ms max=330.01ms p(90)=305ms    p(95)=311.49ms
        { expected_response:true }...: avg=177.38ms min=151.3ms  med=158.59ms max=330.01ms p(90)=305ms    p(95)=311.49ms
        http_req_failed................: 0.00%  ✓ 0      ✗ 258
        http_req_receiving.............: avg=18.62ms  min=43.5µs   med=211.15µs max=164.37ms p(90)=150.37ms p(95)=152.9ms
        http_req_sending...............: avg=53.37µs  min=11.4µs   med=38.75µs  max=842.9µs  p(90)=95.42µs  p(95)=136.07µs
        http_req_tls_handshaking.......: avg=6.36ms   min=0s       med=0s       max=166.35ms p(90)=0s       p(95)=0s
        http_req_waiting...............: avg=158.7ms  min=150.65ms med=157.78ms max=179.61ms p(90)=164.25ms p(95)=166.26ms
        http_reqs......................: 258    8.2552/s
        iteration_duration.............: avg=1.19s    min=1.15s    med=1.15s    max=1.6s     p(90)=1.31s    p(95)=1.31s
        iterations.....................: 258    8.2552/s
        vus............................: 5      min=5    max=10
        vus_max........................: 10     min=10   max=10


    running (0m31.3s), 00/10 VUs, 258 complete and 0 interrupted iterations
    default ✓ [======================================] 10 VUs  30s