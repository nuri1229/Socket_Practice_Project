import { createAsyncAction } from "typesafe-actions";

export const asyncActionCreator = <RequestPayloadType, SuccessPayloadType, FailurePayloadType>(prefix: string) => {
  return createAsyncAction(`${prefix}_REQUST`, `${prefix}_SUCCESS`, `${prefix}_FAILURE`)<
    RequestPayloadType,
    SuccessPayloadType,
    FailurePayloadType
  >();
};
