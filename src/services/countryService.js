import http from "./httpService";
import Country from "../model/Country";

const apiUrl = "https://restcountries.com/v3.1";
const apiEndPoint = apiUrl + "/all";

export const getCountries = () => {
  console.log("Calling API");
  return http.get(apiEndPoint).then((response) => {
    return response.data.map((country) => new Country(country));
  });
};
