import api from "./api";

export const get = async (
  url: string,
  baseURL?: string,
  contentType?: string,
) => {
  try {
    const response = await api(baseURL, contentType).get(url);
    console.log("getResponse", response, url);
    return response;
  } catch (err: unknown) {
    throw err;
  }
};

export const post = async (
  url: string,
  payload?: unknown,
  baseURL?: string,
  contentType?: string,
) => {
  try {
    const response = await api(baseURL, contentType).post(url, payload);
    return response;
  } catch (err: unknown) {
    throw err;
  }
};

export const put = async (
  url: string,
  payload: unknown,
  baseURL?: string,
  contentType?: string,
) => {
  try {
    const response = await api(baseURL, contentType).put(url, payload);

    return response;
  } catch (err: unknown) {
    throw err;
  }
};

export const remove = async (
  url: string,
  payload?: unknown,
  baseURL?: string,
  contentType?: string,
) => {
  try {
    const response = await api(baseURL, contentType).delete(url, {
      data: payload,
    });

    return response;
  } catch (err: unknown) {
    throw err;
  }
};
