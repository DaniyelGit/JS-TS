export type StudentType = {
   id: number
   name: string
   age: number
   isActive: boolean
   address: {
      streetTitle: string
      city: {
         title: string
         countryTitle: string
      }
   },
   technologies: Array<{ id: number, title: string }>
}

export const student: StudentType = {
   id: 1,
   name: 'Даниель',
   age: 26,
   isActive: true,
   address: {
      streetTitle: 'Советская 6/7',
      city: {
         title: 'Минск',
         countryTitle: 'Беларусь'
      },
   },
   technologies: [
      {id: 1, title: 'HTML'},
      {id: 2, title: 'CSS'},
      {id: 3, title: 'JavaScript'},
      {id: 4, title: 'React'},
   ],
};


// типизация объекта для 2-го урока про Objects, file 02.test.ts


export type GovernmentBuildingsType = {
   type: string
   budget: number
   staffCount: number
   address: { street: StreetType }
}
export type StreetType = {
   title: string
}
export type AddressType = {
   number: number
   street: StreetType
}
export type HouseType = {
   buildedAt: number
   repaired: boolean
   address: AddressType
}

export type CityType = {
   title: string
   houses: Array<HouseType>
   governmentBuildings: Array<GovernmentBuildingsType>
   citizensNumber: number
};



