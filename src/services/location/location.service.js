// @ts-nocheck
import camelize from "camelize";
import { host, isMock } from "../../utils/env";

export const locationRequest = (searchTerm) => {
  return fetch(`${host}/geoCode?city=${searchTerm}&mock=${isMock}`)
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log("From Location Service: ", err);
    });
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  console.log(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
