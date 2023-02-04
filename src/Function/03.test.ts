import {StudentType} from "../Objects/02";
import {addSkill, doesStudentLiveIn, makeStudentActive} from "./03";

let student: StudentType;

beforeEach(() => {
   student = {
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
})


test('new tech skill should be added to student', () => {
   addSkill(student, 'Redux');

   expect(student.technologies.length).toBe(5);
   expect(student.technologies[4].title).toBe('Redux');
   expect(student.technologies[4].id).toBeDefined();
});


test('student should be made active', () => {
   expect(student.isActive).toBe(true);

   makeStudentActive(student, false);

   expect(student.isActive).toBe(false);
});

test('does student lives in city?', () => {
   const res1 = doesStudentLiveIn(student, 'Москва');
   const res2 = doesStudentLiveIn(student, 'Минск');

   expect(res1).toBeFalsy();
   expect(res2).toBeTruthy();
});
