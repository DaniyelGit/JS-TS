import {StudentType} from "../Objects/02";

function sum(...args: number[]) {
   return args.reduce((accum: number, prev: number) => {
      return accum += prev;
   }, 0)
};


export const addSkill = (student: StudentType, skill: string) => {
   student.technologies.push({id: new Date().getTime(), title: skill})
};


export const makeStudentActive = (st: StudentType, isActive: boolean) => {
  st.isActive = isActive;
};

export const doesStudentLiveIn = (st: StudentType, cityName: string) => {
  return st.address.city.title === cityName;
};