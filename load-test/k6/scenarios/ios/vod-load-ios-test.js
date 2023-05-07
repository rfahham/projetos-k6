import { sleep, group } from 'k6'
import http from 'k6/http'
import { SharedArray } from 'k6/data'
import { getHeaders } from '../utils/get-headers.js'

const users = new SharedArray('users', () => JSON.parse(open('../../test-base/users.json')))
const titles = new SharedArray('titles', () => JSON.parse(open('../../test-base/titles.json')))

export default () => {
  const user = users[Math.floor(Math.random() * users.length)] // Randomly load a user
  const titleId = titles[Math.floor(Math.random() * titles.length)].titleId // Randomly load a title

  const baseHeaders = {
    'x-client-version': '4.42.1',
    'x-tenant-id': 'globo-play',
    'x-platform-id': 'Apple',
    'x-device-id': 'mobile'
  }

  const authorizationHeaders = {
    authorization: user.authorization,
    'x-user-id': user.userId
  }

  const headers = getHeaders(baseHeaders, authorizationHeaders)

  const timeout = '300ms'

  group('IOS VOD', () => {
    http.get(
      `https://cloud-jarvis.globo.com/graphql/?extensions={"persistedQuery":{"sha256Hash":"31f82c1f0c2ce3eba96099b1988974168eb4bc25f74165605711ba23caf818cc","version":1}}&id=31f82c1f0c2ce3eba96099b1988974168eb4bc25f74165605711ba23caf818cc&operationName=getTitle&variables={"coverLandscapeScales":null,"coverPortraitScales":"X1152","mobileBackgroundScales":"X3","mobilePosterScales":"X3","originProgramId":null,"tabletBackgroundScales":"X0_75","tabletPosterScales":"X3","titleId":"${titleId}","trimmedLogoScale":"X168","tvCoverScales":"X3","tvPosterScales":"X3"}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql/?extensions={"persistedQuery":{"sha256Hash":"f659c3306c061c0122f8811ab5cf99121a53741f1bd06fe562740ce88af9f685","version":1}}&id=f659c3306c061c0122f8811ab5cf99121a53741f1bd06fe562740ce88af9f685&operationName=getTitleDefaultEpisode&variables={"originProgramId":null,"titleId":"${titleId}"}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql/?extensions={"persistedQuery":{"sha256Hash":"fe4da73fe9bb70c8eead23fa23c915f005235a7e28d08d68e34b1d96dbdcc46d","version":1}}&id=fe4da73fe9bb70c8eead23fa23c915f005235a7e28d08d68e34b1d96dbdcc46d&operationName=isFavorited&variables={"titleID":"${titleId}"}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql/?extensions={"persistedQuery":{"sha256Hash":"e13438914db776655700e8ba372b24465355f094d838bd5fc02babbfca15e17c","version":1}}&id=e13438914db776655700e8ba372b24465355f094d838bd5fc02babbfca15e17c&operationName=getContinueWatchingByTitleId&variables={"titleId":"${titleId}"}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql/?extensions={"persistedQuery":{"sha256Hash":"88a43c6eb573829b5a280522738d1b676ff568deaee657712bfffd07034cdb55","version":1}}&id=88a43c6eb573829b5a280522738d1b676ff568deaee657712bfffd07034cdb55&operationName=titleDatesWithEpisodes&variables={"endingDate":null,"page":null,"perPage":null,"startingDate":null,"titleID":"${titleId}"}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql/?extensions={"persistedQuery":{"sha256Hash":"a96d2492eed12f469c843ef31afca9c756e1957f4fc46eff3496f640437a3cb5","version":1}}&id=a96d2492eed12f469c843ef31afca9c756e1957f4fc46eff3496f640437a3cb5&operationName=titleDatesWithExcerpts&variables={"endingDate":null,"page":null,"perPage":null,"startingDate":null,"titleID":"${titleId}"}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql/?extensions={"persistedQuery":{"sha256Hash":"c29d65f9c70c2d1f5bec5263a130517fc1317a9485529eeaeb503fba4d0306eb","version":1}}&id=c29d65f9c70c2d1f5bec5263a130517fc1317a9485529eeaeb503fba4d0306eb&operationName=tvProgramEpisodes&variables={"endingDate":null,"logoMobileScale":"X3","logoTabletScale":"X3","logoTVScale":"X3","page":1,"perPage":7,"startingDate":null,"titleId":"${titleId}"}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      'https://cloud-jarvis.globo.com/graphql/?extensions={"persistedQuery":{"sha256Hash":"35e758587401855a0d085f2ba3404d6ee1c6a5a0d40eb29f443847f1c9c0ade2","version":1}}&id=35e758587401855a0d085f2ba3404d6ee1c6a5a0d40eb29f443847f1c9c0ade2&operationName=getEPGCurrentSlots&variables={"epgSlotsLimit":5,"mediaId":"7339323","transmissionId":"1682"}',
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql/?extensions={"persistedQuery":{"sha256Hash":"d6c1ec0c6944906d6ceb2ae5576e162dc7021e966fb3ab2e7a8a34e7d1c45763","version":1}}&id=d6c1ec0c6944906d6ceb2ae5576e162dc7021e966fb3ab2e7a8a34e7d1c45763&operationName=getTrailers&variables={"page":1,"perPage":null,"titleId":"${titleId}"}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql/?extensions={"persistedQuery":{"sha256Hash":"c34712cc6644b0f2d83faff1de7468ec7d661d52eb4688eb910a2adba0ce26ec","version":1}}&id=c34712cc6644b0f2d83faff1de7468ec7d661d52eb4688eb910a2adba0ce26ec&operationName=tvProgramExcerpts&variables={"endingDate":"2022-04-01","page":null,"perPage":null,"rule":"TOP_HITS","startingDate":"2022-04-01","thumbSize":720,"titleID":"${titleId}"}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql/?extensions={"persistedQuery":{"sha256Hash":"c34712cc6644b0f2d83faff1de7468ec7d661d52eb4688eb910a2adba0ce26ec","version":1}}&id=c34712cc6644b0f2d83faff1de7468ec7d661d52eb4688eb910a2adba0ce26ec&operationName=tvProgramExcerpts&variables={"endingDate":"2022-04-01","page":null,"perPage":null,"rule":"TOP_HITS_ALL_TIMES","startingDate":"2022-04-01","thumbSize":720,"titleID":"${titleId}"}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql/?extensions={"persistedQuery":{"sha256Hash":"c34712cc6644b0f2d83faff1de7468ec7d661d52eb4688eb910a2adba0ce26ec","version":1}}&id=c34712cc6644b0f2d83faff1de7468ec7d661d52eb4688eb910a2adba0ce26ec&operationName=tvProgramExcerpts&variables={"endingDate":"2022-04-01","page":null,"perPage":null,"rule":null,"startingDate":"2022-04-01","thumbSize":720,"titleID":"${titleId}"}`,
      {
        headers,
        timeout
      }
    )
  })

  sleep(0.1)
}
