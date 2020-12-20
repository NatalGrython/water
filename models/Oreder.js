const mongoose = require('mongoose')
const Schema = mongoose.Schema
const schema = new Schema(
    {
        email: {
            type: String,
            required: true,
        },
        products: {
            type: Array,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

schema.set('toJSON', {
    virtuals: true,
})
module.exports = mongoose.model('Order', schema)
