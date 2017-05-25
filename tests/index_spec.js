var frisby = require('frisby')

frisby.create('Get Httpbin args')
  .get('https://httpbin.org/get?test=1')
  .expectStatus(200)
  .inspectBody()
.toss();

frisby.create('Get Httpbin')
  .get('https://httpbin.org/gets')
  .expectStatus(200)
  .inspectBody()
.toss();


frisby.create('Get IP')
  .get('https://httpbin.org/ip')
  .expectStatus(200)
  .inspectBody()
.toss();

