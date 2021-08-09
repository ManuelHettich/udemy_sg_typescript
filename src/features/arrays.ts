const emptyArray: string[] = [];
const carMakers = ['Ford', 'Toyota', 'Chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [['F150'], ['Corolla'], ['Camaro']];

// Help with inference when extracting values
const myCar1 = carMakers[0];
const myCar2 = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => car.toUpperCase());

// Flexible types
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
importantDates.push('2030-10-10');
importantDates.push(new Date());
// importantDates.push(100);

importantDates.push(new Date());
