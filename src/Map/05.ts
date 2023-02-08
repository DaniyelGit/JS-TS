export type PeopleType = {
   name: string
   age: number
}

const people: PeopleType[] = [
   {name: 'Andrew Ivanov', age: 33},
   {name: 'Daniyel Tkachuk', age: 24},
   {name: 'Dmitry Sidorov', age: 18},
];

const dimychTransformator = (obj: PeopleType) => {
   return {
      stack: ['html', 'css', 'js', 'react', 'tdd'],
      firstName: obj.name.split(' ')[0],
      lastName: obj.name.split(' ')[1],
   };
};

const devs1 = [
   dimychTransformator(people[0]),
   dimychTransformator(people[1]),
   dimychTransformator(people[2]),
];

const devs2 = people.map(item => {
   return {
      stack: ['html', 'css', 'js', 'react', 'tdd'],
      firstName: item.name.split(' ')[0],
      lastName: item.name.split(' ')[1],
   }
});

const dev3 = people.map(dimychTransformator);

export const createGreetingMessage = (arrPeople: Array<PeopleType>) => {
   return arrPeople.map(item => `Hello ${item.name}. Welcom to IT-Incubator!!!`)
}

