

const user= {
        name: "korban",
        price: 999,
        welcomeMessage: function(){
            console.log(`${this.name}, welcome to arrow Function`);
        }
}

user.welcomeMessage()
user.name="Mitu"
user.welcomeMessage()