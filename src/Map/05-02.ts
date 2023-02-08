import {CityType} from "../Objects/02";

export const getListTitleStreetForHouses = (obj: CityType) => {
   return obj.houses.map(item => item.address.street.title);
};

export const createMessages = (obj: CityType) => {
   return obj.governmentBuildings.map(item => `Hello guys from ${item.address.street.title}`)
};