import {CoursesType} from "./04";

test('should take old mens older then 90', () => {
   const ages = [18, 20, 35, 5, 76, 80, 25, 95, 100];

   const oldAges = ages.filter(item => item > 90);

   expect(oldAges.length).toBe(2);
   expect(oldAges[0]).toBe(95);
   expect(oldAges[1]).toBe(100);

});

test('should take courses chipper 160', () => {
   const courses: Array<CoursesType> = [
      {title: 'HTML', price: 110},
      {title: 'CSS', price: 200},
      {title: 'JS', price: 160},
      {title: 'React', price: 190},
   ];

   const chipCourses = courses.filter(item => item.price < 180);

   expect(chipCourses.length).toBe(2);
   expect(chipCourses[0].title).toBe('HTML');
   expect(chipCourses[1].title).toBe('JS');

});

test('get only completed tasks', () => {
   const tasks = [
      {id: 1, title: 'Break', isDone: false},
      {id: 2, title: 'Milk', isDone: true},
      {id: 3, title: 'Solt', isDone: false},
      {id: 4, title: 'Sugar', isDone: true},
   ];

   const completedTasks = tasks.filter(item => item.isDone);

   expect(completedTasks.length).toBe(2);
   expect(completedTasks[0].title).toBe('Milk');
   expect(completedTasks[1].title).toBe('Sugar');

});

test('get only uncompleted tasks', () => {
   const tasks = [
      {id: 1, title: 'Break', isDone: false},
      {id: 2, title: 'Milk', isDone: true},
      {id: 3, title: 'Solt', isDone: false},
      {id: 4, title: 'Sugar', isDone: true},
   ];

   const unCompletedTasks = tasks.filter(item => !item.isDone);

   expect(unCompletedTasks.length).toBe(2);
   expect(unCompletedTasks[0].title).toBe('Break');
   expect(unCompletedTasks[1].title).toBe('Solt');

});