import { sleep, group } from 'k6'
import http from 'k6/http'
import { SharedArray } from 'k6/data'
import { getHeaders } from '../utils/get-headers.js'

const users = new SharedArray('users', () => JSON.parse(open('../../test-base/users.json')))
const offers = JSON.parse(open('../../test-base/offers.json'))
const titleOffers = new SharedArray('titleOffers', () => offers.titleOffers)
const categoryOffers = new SharedArray('categoryOffers', () => offers.categoryOffers)
const affiliates = new SharedArray('affiliates', () => JSON.parse(open('../../test-base/affiliates.json')))
const broadcastOffers = new SharedArray('broadcastOffers', () => offers.broadcastOffers)

export default () => {
  const userTest = users[Math.floor(Math.random() * users.length)] // Randomly load a user
  const titleOffer = titleOffers[Math.floor(Math.random() * titleOffers.length)] // Randomly load a titleOffer
  const affiliateCode = affiliates[Math.floor(Math.random() * affiliates.length)] // Randomly load a affiliateCode
  const broadcastOffer = broadcastOffers[Math.floor(Math.random() * broadcastOffers.length)] // Randomly load a broadcastOffer
  let categoryOffer = categoryOffers[Math.floor(Math.random() * categoryOffers.length)] // Randomly load a categ

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

  group('https://globoplay.globo.com/ - Carregamento inicial da home', () => {
    http.get(
      'https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"128baef95323f082f3f45841b0c81be719a7e6eff5f44035be41bd0ba79af525","version":1}}&variables={}',
      {
        headers,
        timeout
      }
    )

    http.get(
      'https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"d5f3ba16f5c93bb78d1ae4109615d3b7aeabb53dd8899011cec049bd3d72b214","version":1}}&variables={"group":"SMART_TV","scope":"general"}',
      {
        headers,
        timeout
      }
    )

    http.get(
      'https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"d5f3ba16f5c93bb78d1ae4109615d3b7aeabb53dd8899011cec049bd3d72b214","version":1}}&variables={"group":"SMART_TV","scope":"sales"}',
      {
        headers,
        timeout
      }
    )

    http.get(
      'https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"d5f3ba16f5c93bb78d1ae4109615d3b7aeabb53dd8899011cec049bd3d72b214","version":1}}&variables={"group":"SMART_TV","scope":"user"}',
      {
        headers,
        timeout
      }
    )

    http.get(
      'https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"d5f3ba16f5c93bb78d1ae4109615d3b7aeabb53dd8899011cec049bd3d72b214","version":1}}&variables={"group":"SMART_TV","scope":"bbb"}',
      {
        headers,
        timeout
      }
    )

    http.get(
      'https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"d5f3ba16f5c93bb78d1ae4109615d3b7aeabb53dd8899011cec049bd3d72b214","version":1}}&variables={"group":"SMART_TV","scope":"roku"}',
      {
        headers,
        timeout
      }
    )

    http.get(
      'https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"a1e614ef704f7a3a2a5a25bc49021a92b6bf51be6e0dfea8f218d3c9d010d361","version":1}}&variables={"id":"home-assinante","scale":"X1080"}',
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"a7cc4b150df52ce38c0e5f0a5833b9ed1e12d148d89fec816ee096059e569705","version":1}}&variables={"id":"${titleOffer}"}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"a7cc4b150df52ce38c0e5f0a5833b9ed1e12d148d89fec816ee096059e569705","version":1}}&variables={"id":"${titleOffer}"}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"a7cc4b150df52ce38c0e5f0a5833b9ed1e12d148d89fec816ee096059e569705","version":1}}&variables={"id":"${titleOffer}"}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"a7cc4b150df52ce38c0e5f0a5833b9ed1e12d148d89fec816ee096059e569705","version":1}}&variables={"id":"${titleOffer}"}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"a7cc4b150df52ce38c0e5f0a5833b9ed1e12d148d89fec816ee096059e569705","version":1}}&variables={"id":"${titleOffer}"}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"e2ca92d0dcf2cf22c41fb3881ae708c37976a03281ea7b7bb3b4fa86ca181082","version":1}}&variables={"id":"${titleOffer}","perPage":12,"scale":"X1080"}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"e2ca92d0dcf2cf22c41fb3881ae708c37976a03281ea7b7bb3b4fa86ca181082","version":1}}&variables={"id":"${titleOffer}","perPage":12,"scale":"X1080"}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"adfbaeb2b080241a309538b30ec05135409cd83178166e67ac70451eced1c6ce","version":1}}&variables={"backgroundSize":1080,"id":"${titleOffer}","logoSize":"X42","perPage":12,"thumbSize":360}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"adfbaeb2b080241a309538b30ec05135409cd83178166e67ac70451eced1c6ce","version":1}}&variables={"backgroundSize":1080,"id":"${titleOffer}","logoSize":"X42","perPage":12,"thumbSize":360}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      'https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"840f0565927635b7109db994d200ebbb98af2e540b6efa99c01f8b6e6dfd1102","version":1}}&variables={"bgThumbSize":1080,"page":1,"perPage":6,"thumbSize":360}',
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"e2ca92d0dcf2cf22c41fb3881ae708c37976a03281ea7b7bb3b4fa86ca181082","version":1}}&variables={"id":"${titleOffer}","perPage":12,"scale":"X1080"}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      'https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"ba3afba7261357047a08aafa44160f34ecff493fe862f117266c827dc12ba3f1","version":1}}&variables={"page":1,"perPage":12,"scale":"X1080"}',
      {
        headers,
        timeout
      }
    )

    categoryOffer = categoryOffers[Math.floor(Math.random() * categoryOffers.length)]

    http.get(
      `https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"0f008680382d7659f870a9d9a3f280c9557c71b47a4e742dbf62a2e0024ef7da","version":1}}&variables={"backgroundSize":"X720","offerid":"${categoryOffer}","page":1,"perPage":12}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"ad3846e8f0017d25736125d9e1668c56b2ef0d6297bf66d2783ef87302d2fed2","version":1}}&variables={"id":"${broadcastOffer}","affiliateCode":"${affiliateCode}","backgroundSize":"X1080","id":"a53d0d2c-8500-42fa-857c-8a8a2a2f175b","page":1,"perPage":12}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"e2ca92d0dcf2cf22c41fb3881ae708c37976a03281ea7b7bb3b4fa86ca181082","version":1}}&variables={"id":"${titleOffer}","perPage":12,"scale":"X1080"}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"e2ca92d0dcf2cf22c41fb3881ae708c37976a03281ea7b7bb3b4fa86ca181082","version":1}}&variables={"id":"${titleOffer}","perPage":12,"scale":"X1080"}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"e2ca92d0dcf2cf22c41fb3881ae708c37976a03281ea7b7bb3b4fa86ca181082","version":1}}&variables={"id":"${titleOffer}","perPage":12,"scale":"X1080"}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"e2ca92d0dcf2cf22c41fb3881ae708c37976a03281ea7b7bb3b4fa86ca181082","version":1}}&variables={"id":"${titleOffer}","perPage":12,"scale":"X1080"}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"e2ca92d0dcf2cf22c41fb3881ae708c37976a03281ea7b7bb3b4fa86ca181082","version":1}}&variables={"id":"${titleOffer}","perPage":12,"scale":"X1080"}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"e2ca92d0dcf2cf22c41fb3881ae708c37976a03281ea7b7bb3b4fa86ca181082","version":1}}&variables={"id":"${titleOffer}","perPage":12,"scale":"X1080"}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"e2ca92d0dcf2cf22c41fb3881ae708c37976a03281ea7b7bb3b4fa86ca181082","version":1}}&variables={"id":"${titleOffer}","perPage":12,"scale":"X1080"}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"7a12d17460816362b8c5c33aea4c71094f9f4cdd1ea64d194636bc626da6ee39","version":1}}&variables={"backgroundSize":"X1080","id":"${titleOffer}","logoSize":"X210","perpage":6}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"e2ca92d0dcf2cf22c41fb3881ae708c37976a03281ea7b7bb3b4fa86ca181082","version":1}}&variables={"id":"${titleOffer}","perPage":12,"scale":"X1080"}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"e2ca92d0dcf2cf22c41fb3881ae708c37976a03281ea7b7bb3b4fa86ca181082","version":1}}&variables={"id":"${titleOffer}","perPage":12,"scale":"X1080"}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"e2ca92d0dcf2cf22c41fb3881ae708c37976a03281ea7b7bb3b4fa86ca181082","version":1}}&variables={"id":"${titleOffer}","perPage":12,"scale":"X1080"}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"e2ca92d0dcf2cf22c41fb3881ae708c37976a03281ea7b7bb3b4fa86ca181082","version":1}}&variables={"id":"${titleOffer}","perPage":12,"scale":"X1080"}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"e2ca92d0dcf2cf22c41fb3881ae708c37976a03281ea7b7bb3b4fa86ca181082","version":1}}&variables={"id":"${titleOffer}","perPage":12,"scale":"X1080"}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"e2ca92d0dcf2cf22c41fb3881ae708c37976a03281ea7b7bb3b4fa86ca181082","version":1}}&variables={"id":"${titleOffer}","perPage":12,"scale":"X1080"}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"e2ca92d0dcf2cf22c41fb3881ae708c37976a03281ea7b7bb3b4fa86ca181082","version":1}}&variables={"id":"${titleOffer}","perPage":12,"scale":"X1080"}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"e2ca92d0dcf2cf22c41fb3881ae708c37976a03281ea7b7bb3b4fa86ca181082","version":1}}&variables={"id":"${titleOffer}","perPage":12,"scale":"X1080"}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"e2ca92d0dcf2cf22c41fb3881ae708c37976a03281ea7b7bb3b4fa86ca181082","version":1}}&variables={"id":"${titleOffer}","perPage":12,"scale":"X1080"}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"e2ca92d0dcf2cf22c41fb3881ae708c37976a03281ea7b7bb3b4fa86ca181082","version":1}}&variables={"id":"${titleOffer}","perPage":12,"scale":"X1080"}`,
      {
        headers,
        timeout
      }
    )

    categoryOffer = categoryOffers[Math.floor(Math.random() * categoryOffers.length)]

    http.get(
      `https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"0f008680382d7659f870a9d9a3f280c9557c71b47a4e742dbf62a2e0024ef7da","version":1}}&variables={"backgroundSize":"X720","offerid":"${categoryOffer}","page":1,"perPage":12}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"adfbaeb2b080241a309538b30ec05135409cd83178166e67ac70451eced1c6ce","version":1}}&variables={"backgroundSize":1080,"id":"${titleOffer}","logoSize":"X42","perPage":12,"thumbSize":360}`,
      {
        headers,
        timeout
      }
    )

    categoryOffer = categoryOffers[Math.floor(Math.random() * categoryOffers.length)]

    http.get(
      `https://cloud-jarvis.globo.com/graphql?extensions={"persistedQuery":{"sha256Hash":"0f008680382d7659f870a9d9a3f280c9557c71b47a4e742dbf62a2e0024ef7da","version":1}}&variables={"backgroundSize":"X720","offerid":"${categoryOffer}","page":1,"perPage":12}`,
      {
        headers,
        timeout
      }
    )
  })

  sleep(0.1)
}
