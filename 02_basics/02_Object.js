const myObj = {
        Name: "Korban",
        Age: 36,
        Email: "korbandiu@gmail.com"
}

const myObj1 = {
        fullName: "Korban Sheikh"
}

const finalObj = { ...myObj, ...myObj1 }

console.log(Object.keys(myObj1));
