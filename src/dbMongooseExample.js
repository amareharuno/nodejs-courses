let User = require("models/user");

let user = new User({
    username: "Tester"
});

user.save().then(() => {
    console.log(user);
});