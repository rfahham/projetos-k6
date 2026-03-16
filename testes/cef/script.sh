while true; do
  DATE=$(date)
  STATUS=$(curl -s -o /dev/null -w "%{http_code}" -I \
  "https://login.caixa.gov.br/auth/realms/internet/protocol/openid-connect/auth?client_id=cli-web-lce&redirect_uri=https%3A%2F%2Fwww.loteriasonline.caixa.gov.br%2Fsilce-web%2F%3Fqfqid%3Dxdl51MsEhtshtcslyeA35kMb%26qfts%3D1767269136%26qfa%3Dcaixa%26qfq%3Dloteriasprd%26qfpt%3DQueued%26qfh%3Dc06887ecacf7dd079b690aeb9d70d1e258d371c10394091bc01353f0177fb125%23%2Fhome&state=b80c934b-0a43-45fe-946c-10a10cbccd89&response_mode=fragment&response_type=code&scope=openid&nonce=fb113f66-7a5d-41d0-82fc-4f1da37bea57")

  echo "$DATE - Status: $STATUS"

  if [ "$STATUS" -eq 429 ]; then
    echo "🚨 Status 429 detectado — interrompendo o loop."
    break
  fi

  sleep 5
done
