import axios from "axios";

export class UserAPI {
  static baseUrl = "http://localhost:5500";
  static baseAxios = axios.create({ baseURL: UserAPI.baseUrl, timeout: 1000 });
  static async createUser(body) {
    return this.baseAxios.post("/users/signup", body);
  }
}
