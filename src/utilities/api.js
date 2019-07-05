/**
 * API instance service based on axios, configure global headers for request and response interceptor,
 * handle loader component
 */

import axios from "axios";
import {
  showLoader,
  hideLoader
} from "../views/components/loader/loader.action";
import { store } from "../index";

// Global request configuration
const ApiInstance = axios.create({
  timeout: 10000
});

// Add a request interceptor
ApiInstance.interceptors.request.use(
  config => {
    store.dispatch(showLoader());
    return config;
  },
  error => {
    store.dispatch(hideLoader());
    return Promise.reject(error);
  }
);

// Add a response interceptor
ApiInstance.interceptors.response.use(
  response => {
    store.dispatch(hideLoader());
    return response;
  },
  error => {
    store.dispatch(hideLoader());
    return Promise.reject(error);
  }
);
export { ApiInstance };

export default ApiInstance;
