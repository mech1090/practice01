const Joi = require('joi')

const validateProduct = fields=>{
    const productValidateSchema = Joi.object({
        email:Joi.string().min(3).max(120).required(),
        password:Joi.string().max(12).required()


    })
    const {error,value} = productValidateSchema.validate(fields)
    return {error,value}
}

module.exports = {validateProduct}