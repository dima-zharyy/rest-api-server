// 1. Что тестировать, signin или signup?
// 2. Код ответа 200 или 201? У нас post запрос и ответ должен быть 201
// 3. Если это signup - то в пред тз этот запрос не создает и не отправляет токен
// 4. Если это signin - то в пред тз этот запрос отправляет только токен

const request = require('supertest');
const app = require('../app');

describe('test signup controller', () => {
  beforeAll(() => app.listen(3000));
  // afterAll(() => process.exit(1));
  test('signup should return email, subscribption option and user avatar url', async () => {
    const response = await request(app).post('/api/users/signup');
    console.log(response.status);
  });
});
