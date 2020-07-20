const {Schema, model, Types} = require("mongoose")

const schema = new Schema({
    Title:{type: String , required:true},
    Description: {type:String, required:true},
    CreateDate: {type:Date}
})

module.exports = model("Announcement", schema)