import axios from "axios";

const url = window.location.origin;

export const instance = axios.create({
  // TODO - not picking up env variable in production - hard coding baseURL
  // http://localhost:5000 for Dev and https://fakenews01.herokuapp.com for production
  //baseURL: "http://localhost:5000",
  //baseURL: "https://fakenews01.herokuapp.com",
  //baseURL: process.env.VUE_REACT_URL,
  //baseURL: window.location.origin,
  // if url is equal to dev server 8080 then redirect to 5000, otherwise use production url
  baseURL: url === "http://localhost:8080/" ? "http://localhost:5000" : url,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
    //Authorization: 'Bearer {token}'
  },
});