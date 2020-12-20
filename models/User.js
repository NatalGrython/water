const mongoose = require('mongoose')
const Schema = mongoose.Schema
const schema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        surname: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        admin: {
            type: Boolean,
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
module.exports = mongoose.model('Users', schema)
