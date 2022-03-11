
const getSplitName = (personName) => {

    if(personName.length > 0){
        const ArrName = personName.split(' ');
        if(ArrName.length == 3){
            obj = {
                firstName: ArrName[0],
                middleName: ArrName[1],
                lastName: ArrName[ArrName.length - 1]
            }
            return obj;
        }
        else if (ArrName.length == 2) {
        obj = {
            firstName: ArrName[0],
            middleName: "null",
            lastName: ArrName[ArrName.length - 1]
        }
        return obj;
        }
        else if (ArrName.length == 1){
            obj = {
                firstName: ArrName[0],
                middleName: "null",
                lastName: "null"
            }
            return obj;
        }
        else {
            return "Error : This function is only for 3 characters names.";
        }
    }
    else{
        return "Error : Please enter your name correctly";
    }
}

console.log(getSplitName("Aldi Daniela Pranata"));
console.log(getSplitName("Dwi Kuncoro"));
console.log(getSplitName("Aurora"));
console.log(getSplitName("Aurora Aureliya Sukma Darma"));
console.log(getSplitName(0));