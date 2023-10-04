const size = 50;
const value = 0;
var arrayGrande = new Array(size);

for (var i = 0; i < arrayGrande.length; i++) {
    arrayGrande[i] = value;
}
console.log(arrayGrande);

var arrayPro = new Array(size).fill(value);
console.log(arrayGrande);