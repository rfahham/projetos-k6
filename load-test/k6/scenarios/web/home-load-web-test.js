import { sleep, group } from 'k6'
import http from 'k6/http'
import { SharedArray } from 'k6/data'
import { getHeaders } from '../utils/get-headers.js'

const users = new SharedArray('users', () => JSON.parse(open('../../test-base/users.json')))
const highlights = new SharedArray('highlights', () => JSON.parse(open('../../test-base/highlights.json')))
const offers = JSON.parse(open('../../test-base/offers.json'))
const titleOffers = new SharedArray('titleOffers', () => offers.titleOffers)
const videoOffers = new SharedArray('videoOffers', () => offers.videoOffers)
const categoryOffers = new SharedArray('categoryOffers', () => offers.categoryOffers)
const broadcastOffers = new SharedArray('broadcastOffers', () => offers.broadcastOffers)
const channelsOffer = new SharedArray('channelsOffer', () => offers.channelsOffer)
const externalTitleOffers = new SharedArray('externalTitleOffers', () => offers.externalTitleOffers)
const titles = new SharedArray('titles', () => JSON.parse(open('../../test-base/titles.json')))
const affiliates = new SharedArray('affiliates', () => JSON.parse(open('../../test-base/affiliates.json')))

export default () => {
  const userTest = users[Math.floor(Math.random() * users.length)] // Randomly load a user
  const affiliateCode = affiliates[Math.floor(Math.random() * affiliates.length)] // Randomly load a affiliateCode
  const broadcastOffer = broadcastOffers[Math.floor(Math.random() * broadcastOffers.length)] // Randomly load a broadcastOffer
  const channelOffer = channelsOffer[Math.floor(Math.random() * channelsOffer.length)] // Randomly load a channelOffer
  const externalTitleOffer = externalTitleOffers[Math.floor(Math.random() * externalTitleOffers.length)] // Randomly load a externalTitleOffer
  let highlightOffer = highlights[Math.floor(Math.random() * highlights.length)] // Randomly load a highlightOffer
  let titleOffer = titleOffers[Math.floor(Math.random() * titleOffers.length)] // Randomly load a titleOffer
  let videoOffer = videoOffers[Math.floor(Math.random() * videoOffers.length)] // Randomly load a videoOffer
  const categoryOffer = categoryOffers[Math.floor(Math.random() * categoryOffers.length)] // Randomly load a categoryOffer
  let titleId = titles[Math.floor(Math.random() * titles.length)].titleId // Randomly load a title

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
      'https://cloud-jarvis.globo.com/graphql?operationName=getSmartInterventions&variables={"scope":"HOME","platform":"WEB"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"af37ea9da535f2a5bcd4aa8c6cab1dd054a1d30a11e3a2e33176b118aaa2e260"}}',
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

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=getTitleLastFavoritedSync&variables={"titleId":"${titleId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"c3182882e1bac93d9b933cd1928ff9c4add4b1d3771a1e2c68b943738ceea1c9"}}`,
      {
        headers,
        timeout
      }
    )

    titleId = titles[Math.floor(Math.random() * titles.length)].titleId

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=getTitleLastFavoritedSync&variables={"titleId":"${titleId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"c3182882e1bac93d9b933cd1928ff9c4add4b1d3771a1e2c68b943738ceea1c9"}}`,
      {
        headers,
        timeout
      }
    )

    titleId = titles[Math.floor(Math.random() * titles.length)].titleId

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=getTitleLastFavoritedSync&variables={"titleId":"${titleId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"c3182882e1bac93d9b933cd1928ff9c4add4b1d3771a1e2c68b943738ceea1c9"}}`,
      {
        headers,
        timeout
      }
    )

    titleId = titles[Math.floor(Math.random() * titles.length)].titleId

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=getTitlePreview&variables={"titleId":"${titleId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"ecdb4e3ba318671d41db0619810d626645299705b5d76d6abcbbe65e10e6077f"}}`,
      {
        headers,
        timeout
      }
    )

    titleId = titles[Math.floor(Math.random() * titles.length)].titleId

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=getTitlePreview&variables={"titleId":"${titleId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"ecdb4e3ba318671d41db0619810d626645299705b5d76d6abcbbe65e10e6077f"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      'https://cloud-jarvis.globo.com/graphql?operationName=getContinueWatchingItems&variables={"perPage":6}&extensions={"persistedQuery":{"version":1,"sha256Hash":"4393adedd037d20d78c5dce6ad2b258a7e2c9bea9d93f187d7a74c1d09b56c99"}}',
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

    titleId = titles[Math.floor(Math.random() * titles.length)].titleId

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=getTitlePreview&variables={"titleId":"${titleId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"ecdb4e3ba318671d41db0619810d626645299705b5d76d6abcbbe65e10e6077f"}}`,
      {
        headers,
        timeout
      }
    )

    titleId = titles[Math.floor(Math.random() * titles.length)].titleId

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=getTitlePreview&variables={"titleId":"${titleId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"ecdb4e3ba318671d41db0619810d626645299705b5d76d6abcbbe65e10e6077f"}}`,
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

    http.get(
      'https://cloud-jarvis.globo.com/graphql?operationName=salesNextBestOffer&variables={"limit":1}&extensions={"persistedQuery":{"version":1,"sha256Hash":"54b2fa829760fbac34ccf166db75ff361792a02a03e17318f8436c723ab47fa6"}}',
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=getOfferCategoryById&variables={"id":"${categoryOffer}","page":1,"perPage":24}&extensions={"persistedQuery":{"version":1,"sha256Hash":"7a0790688fcfafd4ca60af2d7a98e3979d1c6fc611b45c6f95ad7dfd813db9da"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=getOfferBroadcastByIdAndAffiliateCode&variables={"id":"${broadcastOffer}","affiliateCode":"${affiliateCode}","page":1,"perPage":24}&extensions={"persistedQuery":{"version":1,"sha256Hash":"dc49680000089f9d898dbac2ec0b24e005fd82414fbcbbd23e9b140c8af657bd"}}`,
      {
        headers,
        timeout
      }
    )
  })

  group('https://globoplay.globo.com/ - Scroll da home', () => {
    titleOffer = titleOffers[Math.floor(Math.random() * titleOffers.length)]

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

    titleOffer = titleOffers[Math.floor(Math.random() * titleOffers.length)]

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=getOffer&variables={"id":"${titleOffer}","page":1,"perPage":10}&extensions={"persistedQuery":{"version":1,"sha256Hash":"3ac118dcfc9ddb48f7b1869f526e4a3cd4e20cf2d6ba28423912bb23c5e2dd68"}}`,
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

    titleOffer = titleOffers[Math.floor(Math.random() * titleOffers.length)]

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

    titleOffer = titleOffers[Math.floor(Math.random() * titleOffers.length)]

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=getOffer&variables={"id":"${titleOffer}","page":1,"perPage":24}&extensions={"persistedQuery":{"version":1,"sha256Hash":"3ac118dcfc9ddb48f7b1869f526e4a3cd4e20cf2d6ba28423912bb23c5e2dd68"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=getOfferChannelById&variables={"id":"${channelOffer}","page":1,"perPage":24}&extensions={"persistedQuery":{"version":1,"sha256Hash":"c492326cf1572a44558a02b24f8bd60d0c5a0e1d9a3e7abf0eec5004c29b26c4"}}`,
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

    titleId = titles[Math.floor(Math.random() * titles.length)].titleId

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=getTitleLastFavoritedSync&variables={"titleId":"${titleId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"c3182882e1bac93d9b933cd1928ff9c4add4b1d3771a1e2c68b943738ceea1c9"}}`,
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

    titleOffer = titleOffers[Math.floor(Math.random() * titleOffers.length)]

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=getOffer&variables={"id":"${titleOffer}","page":1,"perPage":24}&extensions={"persistedQuery":{"version":1,"sha256Hash":"3ac118dcfc9ddb48f7b1869f526e4a3cd4e20cf2d6ba28423912bb23c5e2dd68"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      'https://cloud-jarvis.globo.com/graphql?operationName=getOfferPodcastsById&variables={"id":"6de8506c-ad0c-400e-94ff-ee8fdf2b888a","page":1,"perPage":24}&extensions={"persistedQuery":{"version":1,"sha256Hash":"97d02d1070709c76c18c1bd23e3ec0b0b104a0a71937294535bd8a438a32a1c0"}}',
      {
        headers,
        timeout
      }
    )

    titleOffer = titleOffers[Math.floor(Math.random() * titleOffers.length)]

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=getOffer&variables={"id":"${titleOffer}","page":1,"perPage":10}&extensions={"persistedQuery":{"version":1,"sha256Hash":"3ac118dcfc9ddb48f7b1869f526e4a3cd4e20cf2d6ba28423912bb23c5e2dd68"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=getExternalTitlePosterOfferById&variables={"id":"${externalTitleOffer}","page":1,"perPage":24}&extensions={"persistedQuery":{"version":1,"sha256Hash":"e02b7b76f1109f5b0865307ad1f8b512797036956a23b07a3fa222262e9ba9f5"}}`,
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

    titleId = titles[Math.floor(Math.random() * titles.length)].titleId

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=getTitlePreview&variables={"titleId":"${titleId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"ecdb4e3ba318671d41db0619810d626645299705b5d76d6abcbbe65e10e6077f"}}`,
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
  })

  sleep(0.1)
}
