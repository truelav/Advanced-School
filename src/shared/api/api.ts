import axios from "axios";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";

// const baseUrl = __IS_DEV__ ? 'http://localhost:8000' : 'https://production.com'

export const $api = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY),
  },
});
