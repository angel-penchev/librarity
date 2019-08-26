// User data validation
const Joi = require("@hapi/joi");

const registerValidation = (request) => {
    const validationUserSchema = {
        username: Joi.string().min(3).required(),
        password: Joi.string().min(8).required(),
        email: Joi.string().min(6).required().email()
    };

    return Joi.validate(request, validationUserSchema);
}

const loginValidation = (request) => {
    const validationUserSchema = {
        username: Joi.string().min(3).required(),
        password: Joi.string().min(8).required()
    };

    return Joi.validate(request, validationUserSchema);
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;