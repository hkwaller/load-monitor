import axios, { AxiosResponse } from "axios";
import { Load } from "models/load";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const responseBody = (response: AxiosResponse) => response.data;

const timeoutMS = 0; // Increase to simulate loading

const sleep = (ms: number) => (response: AxiosResponse) =>
  new Promise<AxiosResponse>((resolve) =>
    setTimeout(() => resolve(response), ms)
  );

const requests = {
  get: (url: string) =>
    axios.get(url).then(sleep(timeoutMS)).then(responseBody),
  post: (url: string, body: {}) =>
    axios.post(url, body).then(sleep(timeoutMS)).then(responseBody),
  put: (url: string, body: {}) =>
    axios.put(url, body).then(sleep(timeoutMS)).then(responseBody),
  delete: (url: string) =>
    axios.delete(url).then(sleep(timeoutMS)).then(responseBody),
  postForm: (url: string, file: Blob) => {
    let formData = new FormData();
    formData.append("File", file);
    return axios
      .post(url, formData, {
        headers: { "Content-type": "multipart/form-data" },
      })
      .then(responseBody);
  },
};

const Loads = {
  current: (): Promise<Load> => requests.get("/loads/current"),
  list: (start?: number, end: number = Date.now()): Promise<Load[]> => {
    const query = start ? `?start=${start}&end=${end}` : "";
    return requests.get("/loads/list" + query);
  },
};

export default Loads;
