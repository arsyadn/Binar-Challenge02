
const getAngkaTerbesarKedua = (submitValue) => {
    if (Array.isArray(submitValue)) {
        const ArrValue = submitValue.sort(function (a, b) {
            return b-a;
        })
        return (`Nilai terbesar pertama ${ArrValue[0]} dan terbesar kedua ${ArrValue[1]}`);
    }
    else{
        return "Error : Your value isn't a Array";
    }
}


const dataAngka = [9,7,7,4,3,2,2,8]
console.log(getAngkaTerbesarKedua(dataAngka));

console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());
