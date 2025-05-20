import axios, { AxiosInstance } from "axios";
import { fetchHost } from "@/utils/apiUtils";

let baseApi = (async () => {
  const url = await fetchHost();
  const API_PATH = "users";

  return axios.create({
    baseURL: `${url}${API_PATH}`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "X-Client-Type": "web",
    },
  });
})();

export default baseApi;
