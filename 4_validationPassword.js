
const isValidPassword = (givenPassword) => {
    let pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if(pass.test(givenPassword)){
        return true;
    }
    else if(givenPassword == null){
        return "Error : Input the password correctly";
    }
    else{
        return "Error : The password have to contain atleast one number and one character"
    }
}
console.log(isValidPassword('Meong2021'));
console.log(isValidPassword('meong2021'));
console.log(isValidPassword('@eong'));
console.log(isValidPassword('meong2'));
console.log(isValidPassword(0));
console.log(isValidPassword());

