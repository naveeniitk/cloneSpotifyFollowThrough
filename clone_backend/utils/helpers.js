const jwt = require("jsonwebtoken");

exports = {}

exports.getToken = async (user) => {

    // will send this token secretly as well
    const token = jwt.sign(
        { identifier : user._id }, "thisIsSecretKey"
    )
    return token
}

module.exports = exports