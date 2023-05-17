import { BadRequestError, NotFoundError, ServerError } from '../errors';
import { httpGateway } from './httpGateway';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const dummyUrl = process.env.VIDABLE_API_ENDPOINT + '/action';

describe('httpGateway', () => {
  it('exists', () => {
    expect(httpGateway).toBeDefined();
  });

  describe('post methods', () => {
    it('succeeds', async () => {
      const dummyResult = 'data';
      mockedAxios.post.mockResolvedValue({ data: dummyResult, status: 200 });
      const result = await httpGateway.post(
        dummyUrl,
        { data: '' },
        { headers: { Authorization: 'Bearer abc123' } },
      );
      expect(result).toBe(dummyResult);
    });

    it('fails due to server error', async () => {
      mockedAxios.post.mockRejectedValue({
        response: { data: '', status: 500 },
      });
      const request = httpGateway.post(dummyUrl, { data: '' });

      await expect(request).rejects.toThrow(new ServerError());
    });

    it('fails because gateway is unreachable', async () => {
      mockedAxios.post.mockRejectedValueOnce({
        response: { data: '', status: '300' },
      });
      const results = httpGateway.post(dummyUrl, { data: '' });
      await expect(results).rejects.toThrow('An unknown error occurred');
    });
  });

  describe('get methods', () => {
    it('succeeds', async () => {
      const testData = 'test';
      const optionsObject = { headers: { Authorization: 'test' } };
      mockedAxios.get.mockResolvedValue({ data: testData, status: 200 });
      const results = await httpGateway.get(dummyUrl, optionsObject);
      expect(results).toBe(testData);
    });
  });

  describe('put methods', () => {
    it('succeeds', async () => {
      const dummyResult = 'data';
      mockedAxios.put.mockResolvedValueOnce({ data: dummyResult, status: 200 });
      const result = await httpGateway.put(
        dummyUrl,
        { data: '' },
        { headers: { Authorization: 'Bearer abc123' } },
      );
      expect(result).toBe(dummyResult);
    });

    it('fails due to server error', async () => {
      mockedAxios.put.mockRejectedValueOnce({
        response: { data: '', status: 500 },
      });
      const request = httpGateway.put(dummyUrl, { data: '' });

      await expect(request).rejects.toThrow(new ServerError());
    });

    it('fails because gateway is unreachable', async () => {
      mockedAxios.put.mockRejectedValueOnce({
        response: { data: '', status: '300' },
      });
      const results = httpGateway.put(dummyUrl, { data: '' });
      await expect(results).rejects.toThrow('An unknown error occurred');
    });
  });
});
