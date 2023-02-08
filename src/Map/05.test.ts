import {createGreetingMessage, PeopleType} from "./05";


let people: Array<PeopleType>

beforeEach(() => {
   people = [
      {name: 'Andrew Ivanov', age: 33},
      {name: 'Daniyel Tkachuk', age: 24},
      {name: 'Dmitry Sidorov', age: 18},
   ];
})

test('should get array of greeting messages', () => {
   const messages = createGreetingMessage(people)

   expect(messages.length).toBe(3);
   expect(messages[0]).toBe(`Hello Andrew Ivanov. Welcom to IT-Incubator!!!`);
   expect(messages[1]).toBe(`Hello Daniyel Tkachuk. Welcom to IT-Incubator!!!`);
   expect(messages[2]).toBe(`Hello Dmitry Sidorov. Welcom to IT-Incubator!!!`);
})