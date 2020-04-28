const data1 = new Date();
console.log(data1);

const data2 = new Date('Marco 12 2010 09:45');
console.log(data2);

const date3  = new Date(2019,03,06,09,40);
console.log(date3);

console.log(date2.toTimeString());
console.log(date2.toOuteString());
console.log(date2.toISOString());