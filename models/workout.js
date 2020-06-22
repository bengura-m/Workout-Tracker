const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
    day: { type: Date, default: Date.now },
    exercises: [
      {
        type: { type: String, required: true },
        name: { type: String, required: true },
        distance: { type: Number },
        duration: { type: Number },
        weight: { type: Number },
        reps: { type: Number },
        sets: { type: Number },
      },
    ],
  },

  {
    toJSON: {
      virtuals: true, // tell Mongoose that we will use Virtuals
    },
  },

  {
    versionKey: false, // remove the version key
  }
);
// create a 'totalDuration' virtual property getter for each element in 'exercise' array and 
// execute a function to get the 'exercise.duration' and give it to the accumulator ('total')
// with each iteration, the duration is added to the 'total' and return it
// 'totalDuration' will equal the total time spent exercising.
WorkoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0); // default 0
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;