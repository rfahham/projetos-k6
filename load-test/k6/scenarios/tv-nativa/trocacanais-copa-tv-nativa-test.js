import { sleep, group } from 'k6'
import http from 'k6/http'
import { SharedArray } from 'k6/data'
import { getHeaders } from '../utils/get-headers.js'

const users = new SharedArray('users', () => JSON.parse(open('../../test-base/users.json')))
const affiliates = new SharedArray('affiliates', () => JSON.parse(open('../../test-base/affiliates.json')))
const offers = JSON.parse(open('../../test-base/offers.json'))
const broadcastOffers = new SharedArray('broadcastOffers', () => offers.broadcastOffers)

export default () => {
  const userTest = users[Math.floor(Math.random() * users.length)] // Randomly load a user
  const affiliateCode = affiliates[Math.floor(Math.random() * affiliates.length)] // Randomly load a affiliateCode
  const broadcastOffer = broadcastOffers[Math.floor(Math.random() * broadcastOffers.length)] // Randomly load a broadcastOffer

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

  group('https://globoplay.globo.com/ - Troca de canais', () => {
    http.get(
      `http://cloud-jarvis.globo.com/graphql?variables={"id":"${broadcastOffer}","affiliateCode":"${affiliateCode}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"d232f073d9ce007892ac544ec1d82fed7b8c3dd3fc2e88a177b774221f7bcbaa"}}`,
      {
        headers,
        timeout
      }
    )
  })

  sleep(0.1)
}
