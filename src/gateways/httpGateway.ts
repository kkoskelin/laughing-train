import { BadRequestError, NotFoundError, ServerError } from '../errors';
import axios, { AxiosError, RawAxiosRequestConfig } from 'axios';

const handleRequestException = (exception: AxiosError) => {
  if (exception.response) {
    if (exception.response.status >= 500) {
      throw new ServerError();
    } else if (exception.response.status == 404) {
      throw new NotFoundError();
    } else if (exception.response.status >= 400) {
      throw new BadRequestError();
    }
  }
  throw new Error('An unknown error occurred');
};

async function post(
  requestUrl: string,
  payload?: unknown,
  options?: RawAxiosRequestConfig,
): Promise<unknown> {
  let result;
  try {
    result = await axios.post(requestUrl, payload, options);
    return result.data as unknown;
  } catch (e) {
    handleRequestException(e as AxiosError);
  }
}

async function get(
  requestUrl: string,
  options?: RawAxiosRequestConfig,
): Promise<unknown> {
  let result;
  try {
    result = await axios.get(requestUrl, options);
    return result.data as unknown;
  } catch (e) {
    handleRequestException(e as AxiosError);
  }
}
async function remove(requestUrl: string): Promise<unknown> {
  let result;
  try {
    result = await axios.delete(requestUrl);
    return result.data as unknown;
  } catch (e) {
    handleRequestException(e as AxiosError);
  }
}

async function put(
  requestUrl: string,
  payload?: unknown,
  options?: RawAxiosRequestConfig,
): Promise<unknown> {
  let result;
  try {
    result = await axios.put(requestUrl, payload, options);
    return result.data as unknown;
  } catch (e) {
    handleRequestException(e as AxiosError);
  }
}

export const httpGateway = {
  delete: remove,
  get,
  post,
  put,
};
