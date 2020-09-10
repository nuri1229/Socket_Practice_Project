import { HTTP } from "global/service";
import { LoginRequestBody, LoginResponseBody } from "global/model";
import { AxiosResponse } from "axios";

const options = {
  headers: {
    contentType: "application/json"
  }
};

export const login = (body: LoginRequestBody): Promise<AxiosResponse<LoginResponseBody>> =>
  HTTP.post<LoginRequestBody, LoginResponseBody>(`/api/login`, body, options);
