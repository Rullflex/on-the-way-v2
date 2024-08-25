import { RestAdapter } from './RestAdapter';

// Мокаем глобальную функцию fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ data: 'mockData' }),
  }),
);

describe('RestAdapter', () => {
  const adapter = new RestAdapter('https://api.example.com');

  it('fetchData should return data when request is successful', async () => {
    const data = await adapter.fetchData('endpoint');
    expect(data).toEqual({ data: 'mockData' });
  });

  it('fetchData should throw an error when request fails', async () => {
    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({ ok: false, statusText: 'Not Found' }),
    );
    await expect(adapter.fetchData('endpoint')).rejects.toThrow(
      'Error fetching data: Not Found',
    );
  });
});
