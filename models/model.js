const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    category: {
        required: true,
        type: String
    },
    reviewed: {
        required: true,
        type: Boolean
    }
    //TODO: add field for "added by:"
})

module.exports = mongoose.model('Data', dataSchema);