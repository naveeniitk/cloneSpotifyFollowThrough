const jwt = require("jsonwebtoken");

exports = {}

exports.getToken = async function(user) {

    // will send this token secretly as well
    const token = jwt.sign(
        { identifier : user._id }, "thisIsSecretKey"
    )
    return token
}

module.exports = exports