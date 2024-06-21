// let i = 1;
// while (i <= 10) {
//     console.log(i)
//     i += 1
// };

// for (let i = 2; i < 20; i += 1) {
//     if (i % 2 !== 0) {
//         continue
//     }
//     console.log(i);
// };

// for (let i = 1; i <= 9; i += 1) {
//     let result = 7 * i;
//     console.log(result)
// }

// const chooseNum = prompt("Оберіть число від 1 до 100");
// for (let i = 0; i < chooseNum; i += 1) {
//     console.log(i);

//     if (chooseNum >= 100) {
//         break;
//     }
// }

let i = 1;
while (i <= 20) {
    if (i % 3 === 0) {
        i += 1
        continue;
    }
    console.log(i);
    i += 1;
};
