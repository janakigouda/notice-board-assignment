const {check}=require('express-validator');
module.exports={
    validateUsername:check('username')
    .trim()
    .notEmpty()
    .withMessage('Username is required')
    .isLength({min:4})
    .withMessage('Username must be at least 4 characters long')
    .isAlphanumeric()
    .withMessage('Username must only contain alphanumeric characters')
}
