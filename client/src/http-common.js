import axios from "axios";

export const instance = axios.create({
  // TODO - not picking up env variable in production - hard coding baseURL
  // http://localhost:5000 for Dev and https://fakenews01.herokuapp.com/ for production
  //baseURL: "http://localhost:5000",
  baseURL: "https://fakenews01.herokuapp.com/",
  //baseURL: process.env.VUE_REACT_URL,
  timeout: 30000,
  // headers: {
  //   Authorization: 'Bearer {token}'
  // }
});
