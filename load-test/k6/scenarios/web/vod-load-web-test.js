import { sleep, group } from 'k6'
import http from 'k6/http'
import { SharedArray } from 'k6/data'
import { getHeaders } from '../utils/get-headers.js'

const users = new SharedArray('users', () => JSON.parse(open('../../test-base/users.json')))
const titles = new SharedArray('titles', () => JSON.parse(open('../../test-base/titles.json')))
const offers = JSON.parse(open('../../test-base/offers.json'))
const recommendedOffers = new SharedArray('recommendedOffers', () => offers.titleOffers)

export default () => {
  const userTest = users[Math.floor(Math.random() * users.length)] // Randomly load a user
  const title = titles[Math.floor(Math.random() * titles.length)] // Randomly load a title
  const recommendedOffer = recommendedOffers[Math.floor(Math.random() * recommendedOffers.length)] // Randomly load a recommendedOffer

  const { titleId, seasonId, videoId } = title

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

  group(`https://globoplay.globo.com/pagina/t/${titleId}/ - Carregamento inicial da página de título`, () => {
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
      `https://cloud-jarvis.globo.com/graphql?operationName=getTitleView&variables={"titleId":"${titleId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"edfaf0be35222665db27c8613b722ec06b5abf3f9e4e29728671e9f589b32f60"}}`,
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
      `https://cloud-jarvis.globo.com/graphql?operationName=getContinueWatchingByTitleId&variables={"titleId":"${titleId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"b8aa5c7553ec0609ff24b30518981ba29448aa43494ae4a85c27b84936a764ed"}}`,
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

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=getTitleStructure&variables={"titleId":"${titleId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"bedd62b74900a0aa08b2e4d3e9edf5bde763a0f3f56991dce1aba21651f9732b"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=getSeasons&variables={"titleId":"${titleId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"7a32a4aaaf0f561711efdecb2fd23d1204cd00308b65bb704175ef60df50ea54"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=getSeasonEpisodes&variables={"titleId":"${titleId}","seasonId":"${seasonId}","page":1,"perPage":6}&extensions={"persistedQuery":{"version":1,"sha256Hash":"08ac1bdce4ab6c9b3a8f83653e40d0567dfffc6b075b496d2204764ea8787ca3"}}`,
      {
        headers,
        timeout
      }
    )
  })

  group(`https://globoplay.globo.com/v/${videoId}/ - Página de consumo`, () => {
    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=getVideoView&variables={"videoId":"${videoId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"3a24912482ee795c86713a755e0b5be7f545a7c16157c1aae8f23bf63edbefab"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=getEpisodesBySeasonId&variables={"titleId":"${titleId}","seasonId":"${seasonId}","perPage":24,"page":1}&extensions={"persistedQuery":{"version":1,"sha256Hash":"d8bcb3ceb3aca3893a722a436fe42b754871983dc4bb7be34a41c66d77423cf6"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=getSuggestVideoView&variables={"titleId":"${titleId}","group":"VOD_SCREEN"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"7b4d92ecaddb5d3110b9f51addfefa12822dba922b6698b43edba6a67d8115e7"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=getRecommendationOfferById&variables={"id":"${recommendedOffer}","context":{"titleId":"${titleId}"},"page":1,"perPage":24}&extensions={"persistedQuery":{"version":1,"sha256Hash":"840c26da37690373cb611bb01eacb5d8f74d547fa09cbe285b82eb360e8667a1"}}`,
      {
        headers,
        timeout
      }
    )

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
      `https://cloud-jarvis.globo.com/graphql?operationName=getTitleView&variables={"titleId":"${titleId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"edfaf0be35222665db27c8613b722ec06b5abf3f9e4e29728671e9f589b32f60"}}`,
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
  })

  sleep(0.1)
}
