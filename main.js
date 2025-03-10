let array = [5, 3, 7];

array[1] = 10;

console.log(array);



let clients = ["Mango", "Poly", "Ajax"];

clients.push("Kiwi")

console.log(clients);



const numbersX = [1, 2, 3, 4, 5];

const sum = numbersX.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum);



let clin = [15, 25, 35, 45, 55];

for (let i = 0; i < clin.length; i++) {
  console.log(clin[i]);
}



const strings = ["яблуко", "банан", "сок", "грушка", "апельсин"];

for (let i = 0; i < strings.length; i++) {
  if (strings[i].length > 5) {
    console.log(strings[i]);
  }
}




const numbersY = [12, 45, 7, 89, 34, 56, 23, 78, 11, 90];

const maxNumberY = Math.max(...numbersY);

console.log(maxNumberY);



const numbers = [12, 45, 7, 89, 34, 56, 23, 78, 11, 90];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i]);
  }
}

