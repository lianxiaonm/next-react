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

export const mockUserInfo = {
  uid: "xxxxxx",
  email: "xxxx@gmail.com",
  nickName: "回文先生",
  currency: "cny",
};
