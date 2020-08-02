const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    exerciseName:{
        type:String,
        required: "Name of Exercise Required."
    },
    weight: {
        type: String,
    },
    sets: {
        type: String,
    },
    reps: {
        type: String,
    },
    duration: {
        type: String,
    },
    distance: {
        type: String,
    }
})

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;