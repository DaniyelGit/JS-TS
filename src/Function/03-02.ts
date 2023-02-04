import {CityType, GovernmentBuildingsType, HouseType} from "../Objects/02";

export const addMoneyToBudget = (obj: GovernmentBuildingsType, budget: number) => {
   obj.budget += budget;
};

export const repairHouse = (house: HouseType) => {
   house.repaired = true;
};

export const toFireStaff = (obj: GovernmentBuildingsType, staffCountToFire: number) => {
  obj.staffCount -= staffCountToFire;
};

export const toHireStaff = (obj: GovernmentBuildingsType, staffCountToFire: number) => {
   obj.staffCount += staffCountToFire;
};

export const createMessage = (city: CityType) => {
   return `Hello ${city.title} citizen. I want you be happy. All ${city.citizensNumber} men`
}