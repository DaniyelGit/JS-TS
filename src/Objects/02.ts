type StudentType = {
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
   technologies: Array<{id: number, title: string}>
}

const student: StudentType = {
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

export type CityType = {
   title: string,
   houses: Array<{
      buildedAt: number
      repaired: false
      address: {
         number: number,
         street: {
            title: string
         }
      }
   }>
   governmentBuildings: Array<{
      type: 'HOSPITAL' | 'FIRE-STATION'
      budget: number
      staffCount: number
      address: {
         street: {
            title: string
         }
      }
   }>
   citizensNumber: number
};



