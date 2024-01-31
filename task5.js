const statement = 'I am a hard working person';

const arr = statement.split(' ');

const reverseArr = [];

for (const i of arr) {
    reverseArr.unshift(i);
}

const result = reverseArr.join(' ');
console.log(result);