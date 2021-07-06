// export const createUser = ({ userName, age, creationDate }) => {
//    fetch(
//        `${databaseURL}/users.json`,
//         {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 userName,
//                 age,
//                 creationDate
//             }) 
//         }
//     )
//     .then(response => response.json())
//     .then(result => console.log(result)); 
// };

// export const getUsers = () => {
//     fetch(
//         `${databaseURL}/users.json`,
//         {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//         }
//     )
//     .then(response => response.json())
//     .then(result => {
//         const transformedUserArr = Object.keys(result).map( key => ({
//             ...result[key],
//             id: key
//         }));
//         console.log(transformedUserArr);
//     });
// };

// export const deleteUser = () => {
//     fetch(
//         `${databaseURL}/users/-Mc5jDPYQ5YqgEwGHLI-.json`,
//         {
//             method: 'DELETE',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//         }
//     )
//     .then(response => response.json())
//     .then(result => console.log(result)); 
// };

//  export const updateUser = () => {
//     fetch(
//         `${databaseURL}/users/-Mc5jDPYQ5YqgEwGHLI-.json`,
//          {
//              method: 'PUT',
//              headers: {
//                  'Content-Type': 'application/json'
//              },
//              body: JSON.stringify({
//                  userName: 'Petya',
//                  age: 30
//              }) 
//          }
//      )
//      .then(response => response.json())
//      .then(result => console.log(result)); 
//  };
