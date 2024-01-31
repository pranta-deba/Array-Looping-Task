const numbers = [12, 98, 5, 41, 23, 78, 46];
const evenNumber = [];

for (const i of numbers) {
    if (i%2 == 0) {
        evenNumber.push(i);
    }
}

console.log(numbers);
console.log(evenNumber);

