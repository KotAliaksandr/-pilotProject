//             //деструктуризация массивов!!!!!

// const arr = ['petya', 'vasya', 'sasha'];

// const [ , last] = arr;

// console.log(last); //выведет в консоль второй элемент массива

// const arr = ['petya', 'vasya', 'sasha'];

// const [ferst, ...rest] = arr; //rest - спред-операторб ставится только в конце

// console.log(ferst, rest); // выведет в консоль первый элемент массива и оставшуюся часть, как массив


                // деструктуризация объектов!!!!!!

const user = {
    // username: 'Petya',
    age: 31
};

const { username: myname = 'test' } = user;

console.log(myname);
