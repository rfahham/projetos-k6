import { sleep, group } from 'k6'
import http from 'k6/http'
import { SharedArray } from 'k6/data'
import { getHeaders } from '../utils/get-headers.js'

const users = new SharedArray('users', () => JSON.parse(open('../../test-base/users.json')))
const affiliateCodeData = new SharedArray('affiliates', () => JSON.parse(open('../../test-base/affiliates.json')))

export default () => {
  const userTest = users[Math.floor(Math.random() * users.length)] // Randomly load a user
  const affiliateCodeTest = affiliateCodeData[Math.floor(Math.random() * affiliateCodeData.length)] // Randomly load a affiliateCode

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

  group('https://globoplay.globo.com/agora-na-tv/ - Carregamento inicial de canais ao vivo', () => {
    http.get(
      'https://cloud-jarvis.globo.com/graphql?operationName=getSubscriptionServices&variables={}&extensions={"persistedQuery":{"version":1,"sha256Hash":"f89da769d9cd248b067a2dfab41986cc95970db6eae27d2060a1809e3399c816"}}',
      {
        headers,
        timeout
      }
    )

    http.get(
      'https://cloud-jarvis.globo.com/graphql?operationName=getFeaturesRemoteConfigs&variables={}&extensions={"persistedQuery":{"version":1,"sha256Hash":"3cc10df3d672fee99c1ba251efffc50b5eb586a09159ceee6f46d393ea569f8e"}}',
      {
        headers,
        timeout
      }
    )

    http.get(
      'https://cloud-jarvis.globo.com/graphql?operationName=getBroadcastList&variables={"epgSlotsLimit":5,"filtersInput":{"affiliateCode":null}}&extensions={"persistedQuery":{"version":1,"sha256Hash":"d8582eae6355b185eb27c9afd7e738838216e0df6a6aa6e2852e0e8ac3bc95f2"}}',
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
      'https://cloud-jarvis.globo.com/graphql?operationName=getMyListTitleIds&variables={"page":1,"perPage":6}&extensions={"persistedQuery":{"version":1,"sha256Hash":"7e8b653ec0eaa69bd4a82455f3b611a5733aadc44dea3409dd6d188b01faebce"}}',
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=getBroadcastList&variables={"epgSlotsLimit":5,"filtersInput":{"affiliateCode":"${affiliateCodeTest}"}}&extensions={"persistedQuery":{"version":1,"sha256Hash":"d8582eae6355b185eb27c9afd7e738838216e0df6a6aa6e2852e0e8ac3bc95f2"}}`,
      {
        headers,
        timeout
      }
    )
  })

  sleep(0.1)
}
