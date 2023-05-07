import { sleep, group } from 'k6'
import http from 'k6/http'
import { SharedArray } from 'k6/data'
import { getHeaders } from '../utils/get-headers.js'

const users = new SharedArray('users', () => JSON.parse(open('../../test-base/users.json')))
const titles = new SharedArray('titles', () => JSON.parse(open('../../test-base/titles.json')))

export default () => {
  const userTest = users[Math.floor(Math.random() * users.length)] // Randomly load a user
  const title = titles[Math.floor(Math.random() * titles.length)] // Randomly load a title

  const { titleId } = title

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
      `https://cloud-jarvis.globo.com/graphql?operationName=getTvProgramLoggedUser&variables={"titleId":"${titleId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"84c74089d1003c8e8814e5bfac5cda77d9c7086295be89fe188a3c07ce0cffbe"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=TitleUser&variables={"titleId":"${titleId}","thumbsize":464}&extensions={"persistedQuery":{"version":1,"sha256Hash":"789986fb00513e4139e63cf0ccb212c7519644f2618477aba66696d7121d8f71"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=getCurrentEPGActive&variables={"titleId":"${titleId}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"205b760979eaad810c5d8878a914903f8a11cf5aa692b8f196854a60c010c831"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=getTvProgram&variables={"titleId":"${titleId}","landscapeScale":"X464","thumbsize":90}&extensions={"persistedQuery":{"version":1,"sha256Hash":"e93a3b603ac604e8b3a50345aba0b0bc45f0340fa2b8c32e732a83fa1b0a7abd"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=getCommonTrails&variables={"titleId":"${titleId}","page":1,"perPage":16,"thumbsize":90}&extensions={"persistedQuery":{"version":1,"sha256Hash":"850f834dfa393dc31384ddf76237692a84c2855ff7efd7c1c494de0e878068ab"}}`,
      {
        headers,
        timeout
      }
    )

    http.get(
      `https://cloud-jarvis.globo.com/graphql?operationName=getTvMoreTopHits&variables={"titleId":"${titleId}","page":2,"perPage":16,"thumbsize":90}&extensions={"persistedQuery":{"version":1,"sha256Hash":"d14cf532672cbd952e0ad3c95881b5af7c36f924fe83e2d89e4cec69137ceb30"}}`,
      {
        headers,
        timeout
      }
    )
  })

  sleep(0.1)
}
