import axios from "axios";

export class UsersAPI {
  static baseUrl = "http://localhost:5500";
  static baseAxios = axios.create({ baseURL: UsersAPI.baseUrl, timeout: 1000 });
  static async signup(body) {
    return this.baseAxios.post("/users/signup", body);
  }
  static async login(body) {
    return this.baseAxios.post("/users/login", body);
  }
}
