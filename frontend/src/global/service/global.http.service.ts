import axios, { AxiosResponse, AxiosRequestConfig } from "axios";

const instance = axios.create({
  timeout: 10000,
  headers: { "content-type": "application/json" }
});

export const HTTP = {
  get: <ResponseType>(url: string, options: AxiosRequestConfig): Promise<AxiosResponse<ResponseType>> => {
    return instance.get(url, options);
  },
  post: <ParamType, ResponseType>(url: string, param: ParamType, options: AxiosRequestConfig): Promise<AxiosResponse<ResponseType>> =>
    instance.post(url, param, options),
  patch: <ParamType, ResponseType>(url: string, param: ParamType, options: AxiosRequestConfig): Promise<AxiosResponse<ResponseType>> =>
    instance.patch(url, param, options),
  delete: <ResponseType>(url: string, options: AxiosRequestConfig): Promise<AxiosResponse<ResponseType>> => instance.delete(url, options),
  put: <ParamType, ResponseType>(url: string, param: ParamType, options: AxiosRequestConfig): Promise<AxiosResponse<ResponseType>> =>
    instance.put(url, param, options)
};
