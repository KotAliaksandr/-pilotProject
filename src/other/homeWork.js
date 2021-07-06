const user = {
    firstName: 'Petya',
    lastName: 'Ivanov',
    age: 30,
    job: {
        company: ':iTehArt',
        position: 'WebDev',
        skils: ['JS', 'HTML', 'CSS']
    }
};

console.log(user);

const { 
    firstName: nameOne = 'noFirstName',
    lastName: nameTwo = 'noLastName',
    job: {
        company: myCompany = ':epam'
    }
} = user;

console.log(nameOne, nameTwo, myCompany);
