import { sleep, group } from 'k6'
import http from 'k6/http'
import { SharedArray } from 'k6/data'
import { getHeaders } from '../utils/get-headers.js'

const users = new SharedArray('users', () => JSON.parse(open('../../test-base/users.json')))
const offers = JSON.parse(open('../../test-base/offers.json'))
const broadcastOffers = new SharedArray('broadcastOffers', () => offers.broadcastOffers)
const titleOffers = new SharedArray('titleOffers', () => offers.titleOffers)
const videoOffers = new SharedArray('videoOffers', () => offers.videoOffers)
const categoryOffers = new SharedArray('categoryOffers', () => offers.categoryOffers)
const affiliates = new SharedArray('affiliates', () => JSON.parse(open('../../test-base/affiliates.json')))
const highlights = new SharedArray('highlights', () => JSON.parse(open('../../test-base/highlights.json')))

export default () => {
  const userTest = users[Math.floor(Math.random() * users.length)] // Randomly load a user
  const highlightOffer = highlights[Math.floor(Math.random() * highlights.length)] // Randomly load a highlightOffer
  const affiliateCode = affiliates[Math.floor(Math.random() * affiliates.length)] // Randomly load a affiliateCode
  let broadcastOffer = broadcastOffers[Math.floor(Math.random() * broadcastOffers.length)] // Randomly load a broadcastOffer
  let titleOffer = titleOffers[Math.floor(Math.random() * titleOffers.length)] // Randomly load a titleOffer
  let videoOffer = videoOffers[Math.floor(Math.random() * videoOffers.length)] // Randomly load a videoOffer
  let categoryOffer = categoryOffers[Math.floor(Math.random() * categoryOffers.length)] // Randomly load a categ

  const baseHeaders = {
    'x-tenant-id': 'globo-play',
    'x-platform-id': 'Workstation',
    'x-client-version': '6.93.0H-rc.1',
    'x-device-id': 'tv'
  }

  const authorizationHeaders = {
    authorization: userTest.authorization,
    'x-user-id': userTest.userId
  }

  const headers = getHeaders(baseHeaders, authorizationHeaders)

  const timeout = '300ms'

  group('https://globoplay.globo.com/ - Carregamento inicial da home', () => {
    http.get(
      'https://cloud-jarvis.globo.com/graphql?operationName=getFeatureFlag&variables={"scope":"home"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"e3f730f62a23a50a34b9fd3804f092e4dea8650f00b38525d6cd711b97b612a6"}}',
      {
        headers,
        timeout
      }
    )

    http.get(
      'https://cloud-jarvis.globo.com/graphql?operationName=getFeatureFlag&variables={"scope":"general"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"e3f730f62a23a50a34b9fd3804f092e4dea8650f00b38525d6cd711b97b612a6"}}',
      {
        headers,
        timeout
      }
    )

    http.get(
      'https://cloud-jarvis.globo.com/graphql?operationName=getLocaleInfo&variables={}&extensions={"persistedQuery":{"version":1,"sha256Hash":"714ecadea512c5a79270d2453a8ef6b32bf3527d9dc67bd26c87b35c77b276af"}}',
      {
        headers,
        timeout
      }
    )

    http.get(
      'https://cloud-jarvis.globo.com/graphql?operationName=getRemoteConfig&variables={"scope":"general"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"3807f835c111a434d5c2600f9e0329b64c2bdbbe908f96d065df9a67b2347a39"}}',
      {
        headers,
        timeout
      }
    )

    http.get(
      'https://cloud-jarvis.globo.com/graphql?operationName=getRemoteConfig&variables={"scope":"general"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"bfc1be1158e3af273d70f9f13bf2f8923cd272cd91dafcc3c15e870ebaa0b105"}}',
      {
        headers,
        timeout
      }
    )

    http.get(
      'https://cloud-jarvis.globo.com/graphql?operationName=getRemoteConfig&variables={"scope":"user"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"3807f835c111a434d5c2600f9e0329b64c2bdbbe908f96d065df9a67b2347a39"}}',
      {
        headers,
        timeout
      }
    )

    http.get(
      'https://cloud-jarvis.globo.com/graphql?variables={}&extensions={"persistedQuery":{"version":1,"sha256Hash":"dbd57a6ed2586e034d9156e71a7e836ec89e1a0edc7b9a75c208cab085cabd55"}}',
      {
        headers,
        timeout
      }
    )

    http.get(
      'https://cloud-jarvis.globo.com/graphql?operationName=getRemoteConfig&variables={"scope":"user"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"3807f835c111a434d5c2600f9e0329b64c2bdbbe908f96d065df9a67b2347a39"}}',
      {
        headers,
        timeout
      }
    )

    http.get(
      'https://cloud-jarvis.globo.com/graphql?operationName=getRemoteConfig&variables={"scope":"user"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"3807f835c111a434d5c2600f9e0329b64c2bdbbe908f96d065df9a67b2347a39"}}',
      {
        headers,
        timeout
      }
    )

    http.get(
      'https://cloud-jarvis.globo.com/graphql?operationName=getRemoteConfig&variables={"scope":"general"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"3807f835c111a434d5c2600f9e0329b64c2bdbbe908f96d065df9a67b2347a39"}}',
      {
        headers,
        timeout
      }
    )

    http.get(
      'https://cloud-jarvis.globo.com/graphql?operationName=getRemoteConfig&variables={"scope":"home"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"3807f835c111a434d5c2600f9e0329b64c2bdbbe908f96d065df9a67b2347a39"}}',
      {
        headers,
        timeout
      }
    )

    http.get(
      'https://cloud-jarvis.globo.com/graphql?operationName=GetSegmentedHome&variables={"pageID":"home-assinante"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"c90203f7ad81c52508bfd5aeb2e9de888ff242bc93fd70df048c911f5fefa893"}}',
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=genericHighlight&variables={"fallbackHighlightId":null,"shouldFetchFallback":false,"coverLandscapeScale":"X720","id":"${highlightOffer}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"36d7d3e8decdbbe890b4a33f170cf6de554a2a73995d1ecfe5023d70b75f3cb0"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=genericHighlight&variables={"fallbackHighlightId":null,"shouldFetchFallback":false,"coverLandscapeScale":"X720","id":"${highlightOffer}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"36d7d3e8decdbbe890b4a33f170cf6de554a2a73995d1ecfe5023d70b75f3cb0"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=genericHighlight&variables={"fallbackHighlightId":null,"shouldFetchFallback":false,"coverLandscapeScale":"X720","id":"${highlightOffer}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"36d7d3e8decdbbe890b4a33f170cf6de554a2a73995d1ecfe5023d70b75f3cb0"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=genericHighlight&variables={"fallbackHighlightId":null,"shouldFetchFallback":false,"coverLandscapeScale":"X720","id":"${highlightOffer}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"36d7d3e8decdbbe890b4a33f170cf6de554a2a73995d1ecfe5023d70b75f3cb0"}}`,
      {
        headers,
        timeout
      }
    )

    broadcastOffer = broadcastOffers[Math.floor(Math.random() * broadcastOffers.length)]

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=GetBroadcastOfferList&variables={"offerId":"${broadcastOffer}","id":"${broadcastOffer}","affiliateCode":"${affiliateCode}","imageScale":"X720"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"876ced0df25cfd03011997fff4dd6b8ea34f4f9371a9412fbe99f34144f0d426"}}`,
      {
        headers,
        timeout
      }
    )

    broadcastOffer = broadcastOffers[Math.floor(Math.random() * broadcastOffers.length)]

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=GetBroadcastOfferList&variables={"offerId":"${broadcastOffer}","id":"${broadcastOffer}","affiliateCode":"${affiliateCode}","imageScale":"X720"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"876ced0df25cfd03011997fff4dd6b8ea34f4f9371a9412fbe99f34144f0d426"}}`,
      {
        headers,
        timeout
      }
    )

    videoOffer = videoOffers[Math.floor(Math.random() * videoOffers.length)]

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=GetOfferVideo&variables={"offerId":"${videoOffer}","titleQuantity":24}&extensions={"persistedQuery":{"version":1,"sha256Hash":"daaee287709fc6783e4005eae7742b1956c56ed37f39964c955811529a119202"}}`,
      {
        headers,
        timeout
      }
    )

    titleOffer = titleOffers[Math.floor(Math.random() * titleOffers.length)]

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=GetOfferTitle&variables={"offerId":"${titleOffer}","titleQuantity":24}&extensions={"persistedQuery":{"version":1,"sha256Hash":"44c0cb383c42b89d51761583acc1b019566871a6f822fc2ccec203a21f02d7ce"}}`,
      {
        headers,
        timeout
      }
    )

    videoOffer = videoOffers[Math.floor(Math.random() * videoOffers.length)]

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=GetOfferVideo&variables={"offerId":"${videoOffer}","titleQuantity":24}&extensions={"persistedQuery":{"version":1,"sha256Hash":"daaee287709fc6783e4005eae7742b1956c56ed37f39964c955811529a119202"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      'https://cloud-jarvis.globo.com/graphql?operationName=GetContinueWatchingItems&variables={"perPage":10}&extensions={"persistedQuery":{"version":1,"sha256Hash":"959780ef7eb55219ebaf259835a8de93d778486f0fca53e2e8bbef8ea1639252"}}',
      {
        headers,
        timeout
      }
    )

    titleOffer = titleOffers[Math.floor(Math.random() * titleOffers.length)]

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=GetOfferTitle&variables={"offerId":"${titleOffer}","titleQuantity":24}&extensions={"persistedQuery":{"version":1,"sha256Hash":"44c0cb383c42b89d51761583acc1b019566871a6f822fc2ccec203a21f02d7ce"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=getGenericHighlight&variables={"coverLandscapeScale":"X720","id":"${highlightOffer}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"3003c702d649883ba61dace22df135086a72cdd221b4b80aab8db59ee03b2828"}}`,
      {
        headers,
        timeout
      }
    )

    categoryOffer = categoryOffers[Math.floor(Math.random() * categoryOffers.length)]

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=GetOfferCategories&variables={"offerId":"${categoryOffer}","titleQuantity":24}&extensions={"persistedQuery":{"version":1,"sha256Hash":"6781f7d641ca405b93ad921788d5e4f817ae099e17602c4a482340737d49ce28"}}`,
      {
        headers,
        timeout
      }
    )

    titleOffer = titleOffers[Math.floor(Math.random() * titleOffers.length)]

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=GetOfferTitle&variables={"offerId":"${titleOffer}","titleQuantity":24}&extensions={"persistedQuery":{"version":1,"sha256Hash":"44c0cb383c42b89d51761583acc1b019566871a6f822fc2ccec203a21f02d7ce"}}`,
      {
        headers,
        timeout
      }
    )

    titleOffer = titleOffers[Math.floor(Math.random() * titleOffers.length)]

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=GetOfferTitle&variables={"offerId":"${titleOffer}","titleQuantity":24}&extensions={"persistedQuery":{"version":1,"sha256Hash":"44c0cb383c42b89d51761583acc1b019566871a6f822fc2ccec203a21f02d7ce"}}`,
      {
        headers,
        timeout
      }
    )

    titleOffer = titleOffers[Math.floor(Math.random() * titleOffers.length)]

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=GetRecommendedOfferList&variables={"offerId":"${titleOffer}","titleQuantity":24}&extensions={"persistedQuery":{"version":1,"sha256Hash":"7bd44f0c2e911f8b584a549e3d0f075fe30d4e624d4985fb7e514d826f59ab3e"}}`,
      {
        headers,
        timeout
      }
    )

    titleOffer = titleOffers[Math.floor(Math.random() * titleOffers.length)]

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=GetOfferTitle&variables={"offerId":"${titleOffer}","titleQuantity":24}&extensions={"persistedQuery":{"version":1,"sha256Hash":"44c0cb383c42b89d51761583acc1b019566871a6f822fc2ccec203a21f02d7ce"}}`,
      {
        headers,
        timeout
      }
    )

    titleOffer = titleOffers[Math.floor(Math.random() * titleOffers.length)]

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=GetOfferTitle&variables={"offerId":"${titleOffer}","titleQuantity":24}&extensions={"persistedQuery":{"version":1,"sha256Hash":"44c0cb383c42b89d51761583acc1b019566871a6f822fc2ccec203a21f02d7ce"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=GetOfferTitle&variables={"coverScale":"X370","logoScale":"X59","offerId":"${titleOffer}","titleQuantity":10}&extensions={"persistedQuery":{"version":1,"sha256Hash":"99714d4535bccb00fb8376c72f6c8757a1f0c915fb6ff4577e6ee10cc9060a55"}}`,
      {
        headers,
        timeout
      }
    )

    titleOffer = titleOffers[Math.floor(Math.random() * titleOffers.length)]

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=GetOfferTitle&variables={"offerId":"${titleOffer}","titleQuantity":24}&extensions={"persistedQuery":{"version":1,"sha256Hash":"44c0cb383c42b89d51761583acc1b019566871a6f822fc2ccec203a21f02d7ce"}}`,
      {
        headers,
        timeout
      }
    )

    titleOffer = titleOffers[Math.floor(Math.random() * titleOffers.length)]

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=GetRecommendedOfferList&variables={"offerId":"${titleOffer}","titleQuantity":24}&extensions={"persistedQuery":{"version":1,"sha256Hash":"7bd44f0c2e911f8b584a549e3d0f075fe30d4e624d4985fb7e514d826f59ab3e"}}`,
      {
        headers,
        timeout
      }
    )

    titleOffer = titleOffers[Math.floor(Math.random() * titleOffers.length)]

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=GetOfferTitle&variables={"offerId":"${titleOffer}","titleQuantity":24}&extensions={"persistedQuery":{"version":1,"sha256Hash":"44c0cb383c42b89d51761583acc1b019566871a6f822fc2ccec203a21f02d7ce"}}`,
      {
        headers,
        timeout
      }
    )

    broadcastOffer = broadcastOffers[Math.floor(Math.random() * broadcastOffers.length)]

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=GetOfferBroadcastChannel&variables={"offerId":"${broadcastOffer}","titleQuantity":24}&extensions={"persistedQuery":{"version":1,"sha256Hash":"a9bc240f6cbd955b098f0563c83e1400cf2bd50933eae71239d2d7addde66d33"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=getGenericHighlight&variables={"coverLandscapeScale":"X720","id":"${highlightOffer}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"3003c702d649883ba61dace22df135086a72cdd221b4b80aab8db59ee03b2828"}}`,
      {
        headers,
        timeout
      }
    )

    titleOffer = titleOffers[Math.floor(Math.random() * titleOffers.length)]

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=GetOfferTitle&variables={"offerId":"${titleOffer}","titleQuantity":24}&extensions={"persistedQuery":{"version":1,"sha256Hash":"44c0cb383c42b89d51761583acc1b019566871a6f822fc2ccec203a21f02d7ce"}}`,
      {
        headers,
        timeout
      }
    )

    titleOffer = titleOffers[Math.floor(Math.random() * titleOffers.length)]

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=GetRecommendedOfferList&variables={"offerId":"${titleOffer}","titleQuantity":24}&extensions={"persistedQuery":{"version":1,"sha256Hash":"7bd44f0c2e911f8b584a549e3d0f075fe30d4e624d4985fb7e514d826f59ab3e"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=GetOfferTitle&variables={"coverScale":"X370","logoScale":"X59","offerId":"${titleOffer}","titleQuantity":10}&extensions={"persistedQuery":{"version":1,"sha256Hash":"99714d4535bccb00fb8376c72f6c8757a1f0c915fb6ff4577e6ee10cc9060a55"}}`,
      {
        headers,
        timeout
      }
    )

    titleOffer = titleOffers[Math.floor(Math.random() * titleOffers.length)]

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=GetOfferTitle&variables={"offerId":"${titleOffer}","titleQuantity":24}&extensions={"persistedQuery":{"version":1,"sha256Hash":"44c0cb383c42b89d51761583acc1b019566871a6f822fc2ccec203a21f02d7ce"}}`,
      {
        headers,
        timeout
      }
    )

    titleOffer = titleOffers[Math.floor(Math.random() * titleOffers.length)]

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=GetRecommendedOfferList&variables={"offerId":"${titleOffer}","titleQuantity":24}&extensions={"persistedQuery":{"version":1,"sha256Hash":"7bd44f0c2e911f8b584a549e3d0f075fe30d4e624d4985fb7e514d826f59ab3e"}}`,
      {
        headers,
        timeout
      }
    )

    titleOffer = titleOffers[Math.floor(Math.random() * titleOffers.length)]

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=GetOfferTitle&variables={"offerId":"${titleOffer}","titleQuantity":24}&extensions={"persistedQuery":{"version":1,"sha256Hash":"44c0cb383c42b89d51761583acc1b019566871a6f822fc2ccec203a21f02d7ce"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=getGenericHighlight&variables={"coverLandscapeScale":"X720","id":"${highlightOffer}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"3003c702d649883ba61dace22df135086a72cdd221b4b80aab8db59ee03b2828"}}`,
      {
        headers,
        timeout
      }
    )

    titleOffer = titleOffers[Math.floor(Math.random() * titleOffers.length)]

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=GetOfferTitle&variables={"offerId":"${titleOffer}","titleQuantity":24}&extensions={"persistedQuery":{"version":1,"sha256Hash":"44c0cb383c42b89d51761583acc1b019566871a6f822fc2ccec203a21f02d7ce"}}`,
      {
        headers,
        timeout
      }
    )

    titleOffer = titleOffers[Math.floor(Math.random() * titleOffers.length)]

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=GetRecommendedOfferList&variables={"offerId":"${titleOffer}","titleQuantity":24}&extensions={"persistedQuery":{"version":1,"sha256Hash":"7bd44f0c2e911f8b584a549e3d0f075fe30d4e624d4985fb7e514d826f59ab3e"}}`,
      {
        headers,
        timeout
      }
    )

    titleOffer = titleOffers[Math.floor(Math.random() * titleOffers.length)]

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=GetOfferTitle&variables={"offerId":"${titleOffer}","titleQuantity":24}&extensions={"persistedQuery":{"version":1,"sha256Hash":"44c0cb383c42b89d51761583acc1b019566871a6f822fc2ccec203a21f02d7ce"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=getGenericHighlight&variables={"coverLandscapeScale":"X720","id":"${highlightOffer}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"3003c702d649883ba61dace22df135086a72cdd221b4b80aab8db59ee03b2828"}}`,
      {
        headers,
        timeout
      }
    )

    titleOffer = titleOffers[Math.floor(Math.random() * titleOffers.length)]

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=GetOfferTitle&variables={"offerId":"${titleOffer}","titleQuantity":24}&extensions={"persistedQuery":{"version":1,"sha256Hash":"44c0cb383c42b89d51761583acc1b019566871a6f822fc2ccec203a21f02d7ce"}}`,
      {
        headers,
        timeout
      }
    )

    titleOffer = titleOffers[Math.floor(Math.random() * titleOffers.length)]

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=GetOfferTitle&variables={"offerId":"${titleOffer}","titleQuantity":24}&extensions={"persistedQuery":{"version":1,"sha256Hash":"44c0cb383c42b89d51761583acc1b019566871a6f822fc2ccec203a21f02d7ce"}}`,
      {
        headers,
        timeout
      }
    )

    categoryOffer = categoryOffers[Math.floor(Math.random() * categoryOffers.length)]

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=GetOfferCategories&variables={"offerId":"${categoryOffer}","titleQuantity":24}&extensions={"persistedQuery":{"version":1,"sha256Hash":"6781f7d641ca405b93ad921788d5e4f817ae099e17602c4a482340737d49ce28"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=getGenericHighlight&variables={"coverLandscapeScale":"X720","id":"${highlightOffer}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"3003c702d649883ba61dace22df135086a72cdd221b4b80aab8db59ee03b2828"}}`,
      {
        headers,
        timeout
      }
    )

    videoOffer = videoOffers[Math.floor(Math.random() * videoOffers.length)]

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=GetOfferVideo&variables={"offerId":"${videoOffer}","titleQuantity":24}&extensions={"persistedQuery":{"version":1,"sha256Hash":"daaee287709fc6783e4005eae7742b1956c56ed37f39964c955811529a119202"}}`,
      {
        headers,
        timeout
      }
    )

    categoryOffer = categoryOffers[Math.floor(Math.random() * categoryOffers.length)]

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=GetOfferCategories&variables={"offerId":"${categoryOffer}","titleQuantity":24}&extensions={"persistedQuery":{"version":1,"sha256Hash":"6781f7d641ca405b93ad921788d5e4f817ae099e17602c4a482340737d49ce28"}}`,
      {
        headers,
        timeout
      }
    )
  })

  sleep(0.1)
}
