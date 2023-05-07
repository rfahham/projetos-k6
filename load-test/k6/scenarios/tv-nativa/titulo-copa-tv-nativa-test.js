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
    'x-platform-id': 'samsung-tizen',
    'x-client-version': '3.598.0',
    'x-device-id': 'tv'
  }

  const authorizationHeaders = {
    authorization: userTest.authorization,
    'x-user-id': userTest.userId
  }

  const headers = getHeaders(baseHeaders, authorizationHeaders)

  const timeout = '300ms'

  group(`https://globoplay.globo.com/pagina/t/${titleId}/ - Carregamento inicial da página de título`, () => {
    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"titleId":"${titleId}","thumbSize":360}&extensions={"persistedQuery":{"version":1,"sha256Hash":"903c7a9d7206984e098708cbaf967dc3a909c6fff8fe50aefb39b3b8307403a0"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"titleId":"${titleId}","isAnonymous":false}&extensions={"persistedQuery":{"version":1,"sha256Hash":"588fec4d65cfd96d9f448e9723344e46cdd2e45936e38911cd64dfec2933c7e5"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"titleId":"${titleId}","isAnonymous":false}&extensions={"persistedQuery":{"version":1,"sha256Hash":"614534bd72a08eaccc5198bbe09649eeed58ce463ab996f81b4b3a98eae38b02"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"gte":"1914-10-01","lte":"1914-10-01","titleId":"${titleId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"07633985d81b065f361c21218789d02dacb70fedee976e1acb45c41586eaca0e"}}`,
      {
        headers,
        timeout
      }
    )
  })

  sleep(0.1)
}
