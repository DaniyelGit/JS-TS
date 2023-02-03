import {multiPly, splitIntoWords, sum} from "./01";


let a: number;
let b: number;
let c: number;

beforeEach(() => {
   a = 1;
   b = 5;
   c = 7;
});

test('sum should be correct', () => {
   const result = sum(a, b, c);

   expect(result).toBe(13);
});

test('multiPly should be correct', () => {
   const result = multiPly(a, b, c);

   expect(result).toBe(35);
});

test('splitting into words should be correct', () => {
   let str1 = 'Hello my. friend!!!';
   let str2 = 'JS - programming language!!!';

   const result1 = splitIntoWords(str1);
   const result2 = splitIntoWords(str2);

   expect(result1.length).toBe(3);
   expect(result1[1]).toBe('my');
   expect(result1[0]).toBe('hello');
   expect(result1[2]).toBe('friend');

   expect(result2.length).toBe(4);
   expect(result2[1]).toBe('-');
   expect(result2[result2.length - 1]).toBe('language');
});