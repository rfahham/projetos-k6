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
    'x-platform-id': 'web',
    'x-client-version': '3.598.0',
    'x-device-id': 'desktop'
  }

  const authorizationHeaders = {
    authorization: userTest.authorization,
    'x-user-id': userTest.userId
  }

  const headers = getHeaders(baseHeaders, authorizationHeaders)

  const timeout = '300ms'

  group('https://globoplay.globo.com/ - Troca de canais', () => {
    http.get(
      `http://cloud-jarvis.globo.com/graphql?operationName=GetBroadcasts&variables={"id":"${broadcastOffer}","affiliateCode":"${affiliateCode}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"ee3e665daf4bf6baa55ae2577c8f5f2646b97c88001770220f87cb2550d73046"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      'https://cloud-jarvis.globo.com/graphql?operationName=getRemoteConfigs&variables={"scope":"general"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"ab62cbaf8cdcb20d7f671069469d0686aa5436fd09420c52b7a46d900042e700"}}',
      {
        headers,
        timeout
      }
    )

    http.get(
      'http://cloud-jarvis.globo.com/graphql?operationName=getRemoteConfig&variables={"scope":"live"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"3807f835c111a434d5c2600f9e0329b64c2bdbbe908f96d065df9a67b2347a39"}}',
      {
        headers,
        timeout
      }
    )
  })

  sleep(0.1)
}
