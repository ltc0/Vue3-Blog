import useStore from "@/stores";
import axios, { AxiosError, AxiosResponse } from "axios";

const requests = axios.create({
    baseURL: "/api",
    timeout: 10000,
    // 请求头
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  });