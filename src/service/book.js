import axios from "axios";
import { dataCategory } from "../constant/data";

export const getCategories = () => {
  // API ini tidak bisa di akses karena masalah "Access-Control-Allow-Origin"
  //   return axios({
  //     method: "GET",
  //     url: "https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-categories",
  //   });

  return dataCategory;
};

export const getBooks = (params) => {
  return axios({
    method: "GET",
    params,
    url: "https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books",
  });
};
