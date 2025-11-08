import { Random } from "mockjs";

export async function getResponse<T>(data: T, time = 1000) {
  return new Promise<T>((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.33) {
        reject(new Error("fetch error"));
      } else {
        resolve(data);
      }
    }, time);
  });
}

export const mockUserInfo = () => ({
  uid: Random.guid(),
  email: Random.email(),
  nickName: Random.cname(),
  vipLevel: Random.integer(1, 5),
  currency: "cny",
});
