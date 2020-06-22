    const mongoose = require('mongoose');
    const Schema = mongoose.Schema;

    const workoutSchema = new Schema({
        Name:  String, // String is shorthand for {type: String}
        Distance: Number,
        Duration:  Number,
        ExerciseName: String,
        Weight:Number,
        Sets: Number,
        Reps: Number,
        Duration:Number,
  });

    const workOut = mongoose.model("workOut", workoutSchema);

    module.exports = workOut;
