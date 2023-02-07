import {CityType, GovernmentBuildingsType} from "../Objects/02";

export type CoursesType = {
   title: string
   price: number
}

const courses: Array<CoursesType> = [
   {title: 'HTML', price: 110},
   {title: 'CSS', price: 200},
   {title: 'JS', price: 160},
   {title: 'React', price: 190},
];


export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
   city.houses = city.houses.filter(item => item.address.street.title !== street)
}

export const getBuildingsWithStaffCountGreaterThen = (buildings: Array<GovernmentBuildingsType>, number: number) => {
   return buildings.filter(item => item.staffCount > number);
}