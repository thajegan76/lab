"use strict";
var multiplicant = 5;
for (var index_1 = 1; index_1 <= 12; index_1++) {
    console.log(index_1, "x", multiplicant, "=", index_1 * multiplicant);
}
multiplicant = 6;
var index = 1;
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
