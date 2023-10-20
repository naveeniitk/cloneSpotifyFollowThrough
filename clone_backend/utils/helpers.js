const jwt = require("jsonwebtoken");

exports = {}

exports.getToken = async (user) => {

    // will send this token secretly as well
    const token = jwt.sign(
        { identifier : user._id }, "thisIsSecretKey"
    )
    return token
}

exports.print = (to_print) => {
	console.log(to_print);
}

module.exports = exports