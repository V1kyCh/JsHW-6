let i = 1;
while (i <= 10) {
    console.log(i);
    i += 1;
}

for (let c = 2; c < 20; c += 1) {
    if (c % 2 !== 0) {
        continue;
    }
    console.log(c);
}

for (let f = 1; i <= 9; f += 1) {
    let result = 7 * f;
    console.log(result);
}

const numbersList = [1, 2, 3, 4, 5];
let a = 0;
while (a < numbersList.length) {
    console.log(numbersList[a]);
    a++;
}

const numbersListBig = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let x = 0; x < numbersListBig.length; x ++) {
    console.log(x);
    if (numbersListBig[x] === 7) {
        break;
    }
}

const chooseNum = prompt("Оберіть число від 1 до 100");
for (let n = 0; n < chooseNum; n += 1) {
    console.log(n);

    if (chooseNum >= 100) {
        break;
    }
}

let l = 1;
while (l <= 20) {
    if (l % 3 === 0) {
        l += 1;
        continue;
    }
    console.log(l);
    l += 1;
}
