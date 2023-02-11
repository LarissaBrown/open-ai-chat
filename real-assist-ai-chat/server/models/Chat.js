mongoose = require('mongoose')
const Schema = mongoose.Schema

const chatSchema = new Schema({

    title: {
        type: String,
        required:true
    },
    comments: [{
        body: String,
        
    }],
    time: {
        timestamp: Date.now() - time < 5000

    }
})


module.exports = mongoose.model("Chat", chatSchema)