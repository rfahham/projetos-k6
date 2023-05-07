import { sleep, group } from 'k6'
import http from 'k6/http'
import { SharedArray } from 'k6/data'
import { getHeaders } from '../utils/get-headers.js'

const users = new SharedArray('users', () => JSON.parse(open('../../test-base/users.json')))
const offers = JSON.parse(open('../../test-base/offers.json'))
const titleOffers = new SharedArray('titleOffers', () => offers.titleOffers)
const affiliates = new SharedArray('affiliates', () => JSON.parse(open('../../test-base/affiliates.json')))
const highlights = new SharedArray('highlights', () => JSON.parse(open('../../test-base/highlights.json')))

export default () => {
  const userTest = users[Math.floor(Math.random() * users.length)] // Randomly load a user
  const titleOffer = titleOffers[Math.floor(Math.random() * titleOffers.length)] // Randomly load a titleOffer
  const affiliateCode = affiliates[Math.floor(Math.random() * affiliates.length)] // Randomly load a affiliateCode
  const highlightId = highlights[Math.floor(Math.random() * highlights.length)] // Randomly load a highlights

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

  group('https://globoplay.globo.com/ - Carregamento inicial da home', () => {
    http.get(
      'http://cloud-jarvis.globo.com/graphql?variables={"scope":"sales"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"69e838842be54e6028da1aa5851e6b205905fcd66bb065c5d6772197d9c9ae32"}}',
      {
        headers,
        timeout
      }
    )

    http.get(
      'http://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"version":1,"sha256Hash":"b9e9e2cd1407fd0c8d27d76064ea4b17c303ad846342547f9ac2913db9ec04db"}}',
      {
        headers,
        timeout
      }
    )

    http.get(
      'http://cloud-jarvis.globo.com/graphql?query=query%7B%20remoteConfigs%28group%3ASMART_TV%2C%20scope%3A%22general%22%29%20%7B%20resources%20%7B%20...%20on%20JSONConfig%20%7B%20key%20value%20%7D%20%7D%20%7D%20%7D',
      {
        headers,
        timeout
      }
    )

    http.get(
      'https://cloud-jarvis.globo.com/graphql?variables={"scope":"user"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"69e838842be54e6028da1aa5851e6b205905fcd66bb065c5d6772197d9c9ae32"}}',
      {
        headers,
        timeout
      }
    )

    http.get(
      'https://cloud-jarvis.globo.com/graphql?variables={"scope":"general"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"69e838842be54e6028da1aa5851e6b205905fcd66bb065c5d6772197d9c9ae32"}}',
      {
        headers,
        timeout
      }
    )

    http.get(
      'https://cloud-jarvis.globo.com/graphql?variables={"scope":"bbb"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"69e838842be54e6028da1aa5851e6b205905fcd66bb065c5d6772197d9c9ae32"}}',
      {
        headers,
        timeout
      }
    )

    http.get(
      'https://cloud-jarvis.globo.com/graphql?variables={"scope":"nativo-home"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"69e838842be54e6028da1aa5851e6b205905fcd66bb065c5d6772197d9c9ae32"}}',
      {
        headers,
        timeout
      }
    )

    http.get(
      'https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"version":1,"sha256Hash":"631652bffd77838c86517c9ebd19a741e534e2e1278f36dfc59cefc8fb7cc4bf"}}',
      {
        headers,
        timeout
      }
    )

    http.get(
      'https://cloud-jarvis.globo.com/graphql?variables={"perPage":40,"page":1,"parentCategoryId":""}&extensions={"persistedQuery":{"version":1,"sha256Hash":"077c2b4f82a6baeb420a183d02fac55a9e615b654587868141c0e50cfb35ed60"}}',
      {
        headers,
        timeout
      }
    )

    http.get(
      'http://cloud-jarvis.globo.com/graphql?variables={"id":"home-assinante","type":"HOME"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"03fbc6166f4f7543a0ad233bfd40376ac3786dcedcd3ad17ab363bb2e2514553"}}',
      {
        headers,
        timeout
      }
    )

    http.get(
      `http://cloud-jarvis.globo.com/graphql?variables={"isAnonymous":false,"highlightId":"${highlightId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"944821ad6025740e8de4fcb388bacd71d5c4494c00169b3e28b6adadca2f1e51"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"isAnonymous":false,"highlightId":"${highlightId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"944821ad6025740e8de4fcb388bacd71d5c4494c00169b3e28b6adadca2f1e51"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"isAnonymous":false,"highlightId":"${highlightId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"944821ad6025740e8de4fcb388bacd71d5c4494c00169b3e28b6adadca2f1e51"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"isAnonymous":false,"highlightId":"${highlightId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"944821ad6025740e8de4fcb388bacd71d5c4494c00169b3e28b6adadca2f1e51"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"isAnonymous":false,"highlightId":"${highlightId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"944821ad6025740e8de4fcb388bacd71d5c4494c00169b3e28b6adadca2f1e51"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"isAnonymous":false,"highlightId":"${highlightId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"944821ad6025740e8de4fcb388bacd71d5c4494c00169b3e28b6adadca2f1e51"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"id":"${titleOffer}","thumbSize":360,"page":1,"perPage":24,"isAnonymous":false}&extensions={"persistedQuery":{"version":1,"sha256Hash":"6e01101c39e8621b65b01e3e046958749f351b75352c1e60a5ce18eb068522f5"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"id":"${titleOffer}","thumbSize":360,"page":1,"perPage":24,"isAnonymous":false}&extensions={"persistedQuery":{"version":1,"sha256Hash":"6e01101c39e8621b65b01e3e046958749f351b75352c1e60a5ce18eb068522f5"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      'https://cloud-jarvis.globo.com/graphql?variables={"page":1,"perPage":36}&extensions={"persistedQuery":{"version":1,"sha256Hash":"a4cb2a26c7deb7f754e0136860f9a1b25dc21fe90bc71111969d024e6ebf696e"}}',
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"id":"${titleOffer}","thumbSize":360,"page":1,"perPage":24,"isAnonymous":false}&extensions={"persistedQuery":{"version":1,"sha256Hash":"f8e8e25aeba3b119608235abfa0f61c29f7775cd6e37d0355cf6b40bb664b458"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"id":"${titleOffer}","thumbSize":360,"page":1,"perPage":24,"isAnonymous":false}&extensions={"persistedQuery":{"version":1,"sha256Hash":"f8e8e25aeba3b119608235abfa0f61c29f7775cd6e37d0355cf6b40bb664b458"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"id":"${titleOffer}","thumbSize":360,"page":1,"perPage":24,"isAnonymous":false}&extensions={"persistedQuery":{"version":1,"sha256Hash":"f8e8e25aeba3b119608235abfa0f61c29f7775cd6e37d0355cf6b40bb664b458"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"id":"${titleOffer}","thumbSize":360,"page":1,"perPage":6,"affiliateCode":"${affiliateCode}","isAnonymous":false}&extensions={"persistedQuery":{"version":1,"sha256Hash":"5c52812915e9a11173584b6bce07ed78df206f3dca3b2ff8f801a211932ea3ac"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"id":"${titleOffer}","thumbSize":360,"page":1,"perPage":24,"isAnonymous":false}&extensions={"persistedQuery":{"version":1,"sha256Hash":"6e01101c39e8621b65b01e3e046958749f351b75352c1e60a5ce18eb068522f5"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"isAnonymous":false,"highlightId":"${highlightId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"944821ad6025740e8de4fcb388bacd71d5c4494c00169b3e28b6adadca2f1e51"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"isAnonymous":false,"highlightId":"${highlightId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"944821ad6025740e8de4fcb388bacd71d5c4494c00169b3e28b6adadca2f1e51"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"isAnonymous":false,"highlightId":"${highlightId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"944821ad6025740e8de4fcb388bacd71d5c4494c00169b3e28b6adadca2f1e51"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"isAnonymous":false,"highlightId":"${highlightId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"944821ad6025740e8de4fcb388bacd71d5c4494c00169b3e28b6adadca2f1e51"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"isAnonymous":false,"highlightId":"${highlightId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"944821ad6025740e8de4fcb388bacd71d5c4494c00169b3e28b6adadca2f1e51"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"id":"${titleOffer}","thumbSize":360,"page":1,"perPage":24,"isAnonymous":false}&extensions={"persistedQuery":{"version":1,"sha256Hash":"7ec34fbf5a3d6d15acca415d396f22d6d83d8e7c85f8663714a82571ee627a3c"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `http://cloud-jarvis.globo.com/graphql?variables={"id":"${titleOffer}","thumbSize":360,"page":1,"perPage":24,"isAnonymous":false}&extensions={"persistedQuery":{"version":1,"sha256Hash":"7ec34fbf5a3d6d15acca415d396f22d6d83d8e7c85f8663714a82571ee627a3c"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"isAnonymous":false,"highlightId":"${highlightId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"944821ad6025740e8de4fcb388bacd71d5c4494c00169b3e28b6adadca2f1e51"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"isAnonymous":false,"highlightId":"${highlightId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"944821ad6025740e8de4fcb388bacd71d5c4494c00169b3e28b6adadca2f1e51"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"id":"${titleOffer}","thumbSize":360,"page":1,"perPage":6,"isAnonymous":false}&extensions={"persistedQuery":{"version":1,"sha256Hash":"a4bf82a063f360a63c65fb1126e58617969c603ad4d86ec73c4cbfbb3ffbdee7"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"isAnonymous":false,"highlightId":"${highlightId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"944821ad6025740e8de4fcb388bacd71d5c4494c00169b3e28b6adadca2f1e51"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      'https://cloud-jarvis.globo.com/graphql?variables={"page":1,"perPage":36}&extensions={"persistedQuery":{"version":1,"sha256Hash":"a4cb2a26c7deb7f754e0136860f9a1b25dc21fe90bc71111969d024e6ebf696e"}}',
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"id":"${titleOffer}","thumbSize":360,"page":1,"perPage":24,"isAnonymous":false}&extensions={"persistedQuery":{"version":1,"sha256Hash":"6e01101c39e8621b65b01e3e046958749f351b75352c1e60a5ce18eb068522f5"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"isAnonymous":false,"highlightId":"${highlightId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"944821ad6025740e8de4fcb388bacd71d5c4494c00169b3e28b6adadca2f1e51"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"isAnonymous":false,"highlightId":"${highlightId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"944821ad6025740e8de4fcb388bacd71d5c4494c00169b3e28b6adadca2f1e51"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"isAnonymous":false,"highlightId":"${highlightId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"944821ad6025740e8de4fcb388bacd71d5c4494c00169b3e28b6adadca2f1e51"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"isAnonymous":false,"highlightId":"${highlightId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"944821ad6025740e8de4fcb388bacd71d5c4494c00169b3e28b6adadca2f1e51"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"id":"${titleOffer}","thumbSize":360,"page":1,"perPage":24,"isAnonymous":false}&extensions={"persistedQuery":{"version":1,"sha256Hash":"034835f3ed5a6298f32f75ae4b543ecddb41625489e798a8c0948ec23f3ed7b4"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"isAnonymous":false,"highlightId":"${highlightId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"944821ad6025740e8de4fcb388bacd71d5c4494c00169b3e28b6adadca2f1e51"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"isAnonymous":false,"highlightId":"${highlightId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"944821ad6025740e8de4fcb388bacd71d5c4494c00169b3e28b6adadca2f1e51"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"id":"${titleOffer}","thumbSize":360,"page":1,"perPage":10,"isAnonymous":false}&extensions={"persistedQuery":{"version":1,"sha256Hash":"e9a896ca0fd79b78095f51f5964fde612967b303f01a01e87f4b616abf2fd148"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"isAnonymous":false,"highlightId":"${highlightId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"944821ad6025740e8de4fcb388bacd71d5c4494c00169b3e28b6adadca2f1e51"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"id":"${titleOffer}","thumbSize":360,"page":1,"perPage":24,"isAnonymous":false}&extensions={"persistedQuery":{"version":1,"sha256Hash":"6e01101c39e8621b65b01e3e046958749f351b75352c1e60a5ce18eb068522f5"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"id":"${titleOffer}","thumbSize":360,"page":1,"perPage":24,"isAnonymous":false}&extensions={"persistedQuery":{"version":1,"sha256Hash":"6e01101c39e8621b65b01e3e046958749f351b75352c1e60a5ce18eb068522f5"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"isAnonymous":false,"highlightId":"${highlightId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"944821ad6025740e8de4fcb388bacd71d5c4494c00169b3e28b6adadca2f1e51"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"id":"${titleOffer}","thumbSize":360,"page":1,"perPage":24,"isAnonymous":false}&extensions={"persistedQuery":{"version":1,"sha256Hash":"6e01101c39e8621b65b01e3e046958749f351b75352c1e60a5ce18eb068522f5"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"isAnonymous":false,"highlightId":"${highlightId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"944821ad6025740e8de4fcb388bacd71d5c4494c00169b3e28b6adadca2f1e51"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"id":"${titleOffer}","thumbSize":360,"page":1,"perPage":24,"isAnonymous":false}&extensions={"persistedQuery":{"version":1,"sha256Hash":"034835f3ed5a6298f32f75ae4b543ecddb41625489e798a8c0948ec23f3ed7b4"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"isAnonymous":false,"highlightId":"${highlightId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"944821ad6025740e8de4fcb388bacd71d5c4494c00169b3e28b6adadca2f1e51"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"isAnonymous":false,"highlightId":"${highlightId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"944821ad6025740e8de4fcb388bacd71d5c4494c00169b3e28b6adadca2f1e51"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"id":"${titleOffer}","thumbSize":360,"page":1,"perPage":24,"isAnonymous":false}&extensions={"persistedQuery":{"version":1,"sha256Hash":"6e01101c39e8621b65b01e3e046958749f351b75352c1e60a5ce18eb068522f5"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"isAnonymous":false,"highlightId":"${highlightId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"944821ad6025740e8de4fcb388bacd71d5c4494c00169b3e28b6adadca2f1e51"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"id":"${titleOffer}","thumbSize":360,"page":1,"perPage":24,"isAnonymous":false}&extensions={"persistedQuery":{"version":1,"sha256Hash":"dab63957d0c06b960557ff52e5f8df87542983bdcfccdd319b022624d2f02439"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"isAnonymous":false,"highlightId":"${highlightId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"944821ad6025740e8de4fcb388bacd71d5c4494c00169b3e28b6adadca2f1e51"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"isAnonymous":false,"highlightId":"${highlightId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"944821ad6025740e8de4fcb388bacd71d5c4494c00169b3e28b6adadca2f1e51"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"id":"${titleOffer}","thumbSize":360,"page":1,"perPage":24,"isAnonymous":false}&extensions={"persistedQuery":{"version":1,"sha256Hash":"6e01101c39e8621b65b01e3e046958749f351b75352c1e60a5ce18eb068522f5"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"isAnonymous":false,"highlightId":"${highlightId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"944821ad6025740e8de4fcb388bacd71d5c4494c00169b3e28b6adadca2f1e51"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"id":"${titleOffer}","thumbSize":360,"page":1,"perPage":24,"isAnonymous":false}&extensions={"persistedQuery":{"version":1,"sha256Hash":"034835f3ed5a6298f32f75ae4b543ecddb41625489e798a8c0948ec23f3ed7b4"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"isAnonymous":false,"highlightId":"${highlightId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"944821ad6025740e8de4fcb388bacd71d5c4494c00169b3e28b6adadca2f1e51"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"id":"${titleOffer}","thumbSize":360,"page":1,"perPage":10,"isAnonymous":false}&extensions={"persistedQuery":{"version":1,"sha256Hash":"e9a896ca0fd79b78095f51f5964fde612967b303f01a01e87f4b616abf2fd148"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"isAnonymous":false,"highlightId":"${highlightId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"944821ad6025740e8de4fcb388bacd71d5c4494c00169b3e28b6adadca2f1e51"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"id":"${titleOffer}","thumbSize":360,"page":1,"perPage":24,"isAnonymous":false}&extensions={"persistedQuery":{"version":1,"sha256Hash":"034835f3ed5a6298f32f75ae4b543ecddb41625489e798a8c0948ec23f3ed7b4"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"isAnonymous":false,"highlightId":"${highlightId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"944821ad6025740e8de4fcb388bacd71d5c4494c00169b3e28b6adadca2f1e51"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"id":"${titleOffer}","thumbSize":360,"page":1,"perPage":24,"isAnonymous":false}&extensions={"persistedQuery":{"version":1,"sha256Hash":"6e01101c39e8621b65b01e3e046958749f351b75352c1e60a5ce18eb068522f5"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"isAnonymous":false,"highlightId":"${highlightId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"944821ad6025740e8de4fcb388bacd71d5c4494c00169b3e28b6adadca2f1e51"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"isAnonymous":false,"highlightId":"${highlightId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"944821ad6025740e8de4fcb388bacd71d5c4494c00169b3e28b6adadca2f1e51"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"id":"${titleOffer}","thumbSize":360,"page":1,"perPage":24,"isAnonymous":false}&extensions={"persistedQuery":{"version":1,"sha256Hash":"6e01101c39e8621b65b01e3e046958749f351b75352c1e60a5ce18eb068522f5"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"isAnonymous":false,"highlightId":"${highlightId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"944821ad6025740e8de4fcb388bacd71d5c4494c00169b3e28b6adadca2f1e51"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"id":"${titleOffer}","thumbSize":360,"page":1,"perPage":24,"isAnonymous":false}&extensions={"persistedQuery":{"version":1,"sha256Hash":"034835f3ed5a6298f32f75ae4b543ecddb41625489e798a8c0948ec23f3ed7b4"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"isAnonymous":false,"highlightId":"${highlightId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"944821ad6025740e8de4fcb388bacd71d5c4494c00169b3e28b6adadca2f1e51"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"id":"${titleOffer}","thumbSize":360,"page":1,"perPage":24,"isAnonymous":false}&extensions={"persistedQuery":{"version":1,"sha256Hash":"6e01101c39e8621b65b01e3e046958749f351b75352c1e60a5ce18eb068522f5"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"isAnonymous":false,"highlightId":"${highlightId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"944821ad6025740e8de4fcb388bacd71d5c4494c00169b3e28b6adadca2f1e51"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"isAnonymous":false,"highlightId":"${highlightId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"944821ad6025740e8de4fcb388bacd71d5c4494c00169b3e28b6adadca2f1e51"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"id":"${titleOffer}","thumbSize":360,"page":1,"perPage":24,"isAnonymous":false}&extensions={"persistedQuery":{"version":1,"sha256Hash":"6e01101c39e8621b65b01e3e046958749f351b75352c1e60a5ce18eb068522f5"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"isAnonymous":false,"highlightId":"${highlightId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"944821ad6025740e8de4fcb388bacd71d5c4494c00169b3e28b6adadca2f1e51"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"id":"${titleOffer}","thumbSize":360,"page":1,"perPage":24,"isAnonymous":false}&extensions={"persistedQuery":{"version":1,"sha256Hash":"6e01101c39e8621b65b01e3e046958749f351b75352c1e60a5ce18eb068522f5"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"isAnonymous":false,"highlightId":"${highlightId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"944821ad6025740e8de4fcb388bacd71d5c4494c00169b3e28b6adadca2f1e51"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"isAnonymous":false,"highlightId":"${highlightId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"944821ad6025740e8de4fcb388bacd71d5c4494c00169b3e28b6adadca2f1e51"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"isAnonymous":false,"highlightId":"${highlightId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"944821ad6025740e8de4fcb388bacd71d5c4494c00169b3e28b6adadca2f1e51"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"id":"${titleOffer}","thumbSize":360,"page":1,"perPage":24,"isAnonymous":false}&extensions={"persistedQuery":{"version":1,"sha256Hash":"7ec34fbf5a3d6d15acca415d396f22d6d83d8e7c85f8663714a82571ee627a3c"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"isAnonymous":false,"highlightId":"${highlightId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"944821ad6025740e8de4fcb388bacd71d5c4494c00169b3e28b6adadca2f1e51"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"isAnonymous":false,"highlightId":"${highlightId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"944821ad6025740e8de4fcb388bacd71d5c4494c00169b3e28b6adadca2f1e51"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?variables={"isAnonymous":false,"highlightId":"${highlightId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"944821ad6025740e8de4fcb388bacd71d5c4494c00169b3e28b6adadca2f1e51"}}`,
      {
        headers,
        timeout
      }
    )
  })

  sleep(0.1)
}
