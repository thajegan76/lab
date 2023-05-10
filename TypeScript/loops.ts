let multiplicant:number = 5;
for (let index:number = 1; index <= 12; index++) {
    console.log(index, "x", multiplicant, "=", index * multiplicant);
}

multiplicant = 6;
let index:number = 1;
while (index <= 12) {
    console.log(index, "x", multiplicant, "=", index * multiplicant);
    index = index + 1;
}

multiplicant = 7;
index = 1;
do {
    console.log(index, "x", multiplicant, "=", index * multiplicant);
    index = index + 1;
} while (index <= 12);