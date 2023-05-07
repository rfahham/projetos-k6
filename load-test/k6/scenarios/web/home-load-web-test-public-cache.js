import { sleep, group } from 'k6'
import http from 'k6/http'
import { SharedArray } from 'k6/data'
import { getHeaders } from '../utils/get-headers.js'

const users = new SharedArray('users', () => JSON.parse(open('../../test-base/users.json')))
const highlights = new SharedArray('highlights', () => JSON.parse(open('../../test-base/highlights.json')))
const offers = JSON.parse(open('../../test-base/offers.json'))
const titleOffers = new SharedArray('titleOffers', () => offers.titleOffers)
const videoOffers = new SharedArray('videoOffers', () => offers.videoOffers)

export default () => {
  const userTest = users[Math.floor(Math.random() * users.length)] // Randomly load a user
  let highlightOffer = highlights[Math.floor(Math.random() * highlights.length)] // Randomly load a highlightOffer
  let titleOffer = titleOffers[Math.floor(Math.random() * titleOffers.length)] // Randomly load a titleOffer
  let videoOffer = videoOffers[Math.floor(Math.random() * videoOffers.length)] // Randomly load a videoOffer

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

  group('https://globoplay.globo.com/ - Carregamento inicial da home', () => {
    http.get(
      'https://cloud-jarvis.globo.com/graphql?operationName=getFeaturesRemoteConfigs&variables={}&extensions={"persistedQuery":{"version":1,"sha256Hash":"3cc10df3d672fee99c1ba251efffc50b5eb586a09159ceee6f46d393ea569f8e"}}',
      {
        headers,
        timeout
      }
    )

    http.get(
      'https://cloud-jarvis.globo.com/graphql?operationName=getUserRecommendedPage&variables={"basePageId":"home-assinante"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"9ea4990177f5ef59f86f2b85ca1bb15b4c2febffdc695f6792e3cef13ac81775"}}',
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=getOffer&variables={"id":"${titleOffer}","page":1,"perPage":24}&extensions={"persistedQuery":{"version":1,"sha256Hash":"3ac118dcfc9ddb48f7b1869f526e4a3cd4e20cf2d6ba28423912bb23c5e2dd68"}}`,
      {
        headers,
        timeout
      }
    )

    titleOffer = titleOffers[Math.floor(Math.random() * titleOffers.length)]

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=getOffer&variables={"id":"${titleOffer}","page":1,"perPage":24}&extensions={"persistedQuery":{"version":1,"sha256Hash":"3ac118dcfc9ddb48f7b1869f526e4a3cd4e20cf2d6ba28423912bb23c5e2dd68"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=getOfferThumbById&variables={"id":"${videoOffer}","page":1,"perPage":24}&extensions={"persistedQuery":{"version":1,"sha256Hash":"f39d04f48914d44a1ad2898e0abd8a88b35110faeb747aa9d23b7274331dfb28"}}`,
      {
        headers,
        timeout
      }
    )

    videoOffer = videoOffers[Math.floor(Math.random() * videoOffers.length)]

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=getOfferThumbById&variables={"id":"${videoOffer}","page":1,"perPage":24}&extensions={"persistedQuery":{"version":1,"sha256Hash":"f39d04f48914d44a1ad2898e0abd8a88b35110faeb747aa9d23b7274331dfb28"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=getGenericHighlight&variables={"id":"${highlightOffer}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"ad43d3e4e0ebf64d57429e6abb2d4c8badba2c1a26e94763e2229196d8269352"}}`,
      {
        headers,
        timeout
      }
    )

    highlightOffer = highlights[Math.floor(Math.random() * highlights.length)]

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=getGenericHighlight&variables={"id":"${highlightOffer}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"ad43d3e4e0ebf64d57429e6abb2d4c8badba2c1a26e94763e2229196d8269352"}}`,
      {
        headers,
        timeout
      }
    )

    highlightOffer = highlights[Math.floor(Math.random() * highlights.length)]

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=getGenericHighlight&variables={"id":"${highlightOffer}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"ad43d3e4e0ebf64d57429e6abb2d4c8badba2c1a26e94763e2229196d8269352"}}`,
      {
        headers,
        timeout
      }
    )
  })
  sleep(0.1)
}
