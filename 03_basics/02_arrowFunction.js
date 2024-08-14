

const user= {
        name: "korban",
        price: 999,
        welcomeMessage: function(){
            console.log(`${this.name}, welcome to arrow Function`);
        }
}

// user.welcomeMessage()
// user.name="Mitu"
// user.welcomeMessage()


// const addTwo = (num1, num2) => num1+ num2
// addtwo(5,8)

const addTwo = (num1, num2) => num1 + num2

console.log(addTwo(5,8))


