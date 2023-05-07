import { sleep, group } from 'k6'
import http from 'k6/http'
import { SharedArray } from 'k6/data'
import { getHeaders } from '../utils/get-headers.js'

const users = new SharedArray('users', () => JSON.parse(open('../../test-base/users.json')))
const titles = new SharedArray('titles', () => JSON.parse(open('../../test-base/titles.json')))

export default () => {
  const userTest = users[Math.floor(Math.random() * users.length)] // Randomly load a user
  const title = titles[Math.floor(Math.random() * titles.length)] // Randomly load a title

  const { titleId } = title

  const baseHeaders = {
    'x-tenant-id': 'globo-play',
    'x-platform-id': 'tv',
    'x-client-version': '1.32.0-R',
    'x-device-id': 'roku'
  }

  const authorizationHeaders = {
    authorization: userTest.authorization,
    'x-user-id': userTest.userId
  }

  const headers = getHeaders(baseHeaders, authorizationHeaders)

  const timeout = '300ms'

  group(`https://globoplay.globo.com/pagina/t/${titleId}/ - Carregamento inicial da página de título`, () => {
    http.get(
      `https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"2289908a3c85967a703562b08b3c650096ac0fb96208544e6b6de749c52ff519","version":1}}&variables={"titleId":"${titleId}"}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"32fe58d7ffd6743ef9f95c49a55a0a3ee6df3aec32a80a1d24753d32b1e8adff","version":1}}&variables={"scale":"X1080","titleId":"${titleId}"}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"91007498103f9da6ca509278c1103b7434c2ff129c7a5764d34089d8f8982804","version":1}}&variables={"titleId":"${titleId}"}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"6e9a667a5b72ffb7fe4f0d7e6b7338e93c1621145b94785a0086d934f7544188","version":1}}&variables={"titleId":"${titleId}"}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"19d4cf7dff47d990365c0f2d38475b00b24615a57ce49f9136e21291f0b80079","version":1}}&variables={"page":1,"perPage":12,"titleId":"${titleId}"}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"8e9256cd2c9dea1164054b5f6a03803c9c7a87d323b15efad7185fe0aef38c91","version":1}}&variables={"titleId":"${titleId}"}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"5bf330e352fa0fa3f6a70ae385763b00494de4ae8e36e843db1929863d2677e8","version":1}}&variables={"titleId":"${titleId}"}`,
      {
        headers,
        timeout
      }
    )
  })

  sleep(0.1)
}
