import { waitTime, getResponse } from "./interface";
//
export const getUserInfo = async () => {
  await waitTime();
  return getResponse(200, {
    uid: "xxxxxx",
    email: "xxxx@gmail.com",
    nickName: "回文先生",
    currency: "cny",
  });
};
