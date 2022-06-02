import supertest from 'supertest'
const request = supertest(
  'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=' +
    process.env.REACT_APP_API_KEY +
    '&tags=cats&format=json&nojsoncallback=1',
)

import { expect } from 'chai'

describe('Testing', () => {
  /* Testing the API */
  it('GET /', () => {
    return request.get(`/`).then((res) => {
      expect(res.body).to.not.be.empty
    })
  })
})
