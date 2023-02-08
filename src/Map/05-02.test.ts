import {CityType} from "../Objects/02";
import {createMessages, getListTitleStreetForHouses} from "./05-02";

let city: CityType;

beforeEach(() => {
   city = {
      title: 'NewYork',
      houses: [
         {
            id: 1,
            buildedAt: 2012,
            repaired: false,
            address: {
               number: 100,
               street: {
                  title: 'White street',
               }
            }
         },
         {
            id: 2,
            buildedAt: 2008,
            repaired: false,
            address: {
               number: 100,
               street: {
                  title: 'Happy street',
               },
            },
         },
         {
            id: 3,
            buildedAt: 2020,
            repaired: false,
            address: {
               number: 101,
               street: {
                  title: 'Happy street',
               }
            }
         }
      ],
      governmentBuildings: [
         {
            type: 'HOSPITAL',
            budget: 200000,
            staffCount: 200,
            address: {
               street: {
                  title: 'Central Str',
               },
            },
         },
         {
            type: 'FIRE-STATION',
            budget: 500000,
            staffCount: 1000,
            address: {
               street: {
                  title: 'South Str',
               },
            },
         }
      ],
      citizensNumber: 1000000
   }
});

test('create a list of street title of houses', () => {
   const result = getListTitleStreetForHouses(city);

   expect(result.length).toBe(3);
   expect(result[0]).toBe('White street');
   expect(result[1]).toBe('Happy street');
   expect(result[2]).toBe('Happy street');
});

test('create greeting messages for streets', () => {
   const result = createMessages(city);

   expect(result.length).toBe(2);
   expect(result[0]).toBe('Hello guys from Central Str');
   expect(result[1]).toBe('Hello guys from South Str');
});