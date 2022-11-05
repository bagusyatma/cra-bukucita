import axios from "axios";
import { URL_API } from "../constant/api";

export const getCategories = () => {
  // API ini tidak bisa di akses karena masalah "Access-Control-Allow-Origin"
  // return axios({
  //   method: "GET",
  //   url: "https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-categories",
  // });

  // saya membuat service backend untuk fetch api b3k3n dan mereturn hasil yang sama
  return axios({
    method: "GET",
    url: `${URL_API}/categories`,
  });
};

export const getBooks = (params) => {
  // API ini tidak bisa di akses karena masalah "Access-Control-Allow-Origin"
  // return axios({
  //   method: "GET",
  //   url: "https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books",
  // });

  // saya membuat service backend untuk fetch api b3k3n dan mereturn hasil yang sama
  return axios({
    method: "GET",
    params,
    url: `${URL_API}/books`,
  });
};
