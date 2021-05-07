const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskStatusSchema = new Schema({
    status: {
        type: String,
        default: 'pending'
    },
    task: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const TaskSchema = mongoose.model('tasks', taskStatusSchema);

module.exports = {
    TaskSchema
}