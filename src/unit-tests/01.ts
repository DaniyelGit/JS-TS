export function sum(...numbers: number[]) {
   let result = numbers.reduce((accum: number, prev: number) => {
      return accum += prev;
   }, 0)

   return result;
};

export function multiPly(...numbers: number[]) {
   let result = numbers.reduce((accum: number, prev: number) => {
      return accum *= prev;
   }, 1)

   return result;
};

export function splitIntoWords(str: string) {
   return str
      .trim()
      .toLowerCase()
      .split(' ')
      .map(item => item.replace(/[!.,]/g, ''));
};