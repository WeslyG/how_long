import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../app';

chai.use(chaiHttp);

/*
  Test get
*/

chai.request('http://localhost:3000')
  .get('/');

// describe('/GET events', () => {
//   it('some text', done => {
//     chai.request(server)
//       .get('/events')
//       .end((err, res) => {
//         res.should.have.status(200);
//         done();
//       });
//   });
// });
