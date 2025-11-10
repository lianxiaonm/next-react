import { Random } from "mockjs";

type Option = { time?: number; random?: boolean };

export async function getResponse<T>(data: T, option?: Option) {
  const { time = 1000, random = false } = option || {};
  return new Promise<T>((resolve, reject) => {
    setTimeout(() => {
      if (random && Math.random() < 0.333) {
        reject(new Error("fetch error"));
      } else {
        console.log("mock api", data);
        resolve(data);
      }
    }, time);
  });
}

const req = (require as any).context("./json/", true, /.json$/);

export const mockApis: Record<string, any> = {};

req.keys().forEach((key: string) => {
  const componentName = key.replace("./", "").replace(".json", "");
  if (/\//.test(componentName)) return;
  mockApis[componentName] = req(key);
});

// mock function
export const mockUserInfo = () => ({
  uid: Random.guid(),
  email: Random.email(),
  nickName: Random.cname(),
  vipLevel: Random.integer(1, 5),
  currency: "cny",
});
