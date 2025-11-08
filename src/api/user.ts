import { mockUserInfo, getResponse } from "./interface";
//
export const getUserInfo = async () => {
  return getResponse(mockUserInfo, 2000);
};
