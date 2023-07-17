# projetos-k6

## Visualizar resultados

$ cat arquivo.json | jq '.metrics | {"p95": .http_req_duration.values."p(95)", "rate": .iterations.values.rate, "failed_rate": .http_req_failed.values.rate}'
