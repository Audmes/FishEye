// async function getPhotographer() {
//     fetch('data/photographers.json')
//     .then((response) => {
//         if(!response.ok) {
//             throw new Error('Failed to fetch photographer data');
//         }
//         return response.json();
//     })
//     .then(data => {
//             console.log(data[('photographers')]);
//             console.log(data[('media')]);
//     })
// }

// async function getPhotographers() {
//     const response = await fetch('data/photographers.json');
//     const photographers = await response.json();
//     return photographers;
// }

// const displayUsers = async () => {
//     const data = await getData();
//     console.log(data);
//     let dataID = data[('photographers')];

//     let dataDisplay = dataID.map(object => {
//         // console.log(object);
//         const { id } = object;

//         return `
//         <div>
//             <p>Name Id: ${id}</p>
//         </div>
//         `
//     });

//     return dataID.filter(
//         function(data){ return data.id == photographerId }
//     );

//     display.innerHTML = dataDisplay;
// }
// let userTest = displayUsers();
// console.log(userTest);