// On page load 
// get route for all exercises for specific workout > render in exercises column
$(window).on("load", () => {
    const workoutId = window.location.hash.substring(1)
    $.ajax({
        url: `/exercises/${workoutId}`,
        method: "GET"
    }).done((workout) => {
        $(".workout-name").text(`${workout.workoutName}`)
        for (let i = 0; i < workout.exercises.length; i++) {
            let nameDiv = $("<h5>");
            nameDiv.attr("class", "text-center");
            nameDiv.text(`${workout.exercises[i].exerciseName}`);
            $(".exerciseList").prepend(nameDiv);

            if (workout.exercises[i].weight) {
                let weight = $("<div>");
                weight.attr("class", "text-center")
                weight.text(`${workout.exercises[i].weight}`);
                nameDiv.append(weight)
            }
            if (workout.exercises[i].sets) {
                let sets = $("<div>");
                sets.attr("class", "text-center")
                sets.text(`${workout.exercises[i].sets}`);
                nameDiv.append(sets)
            }
            if (workout.exercises[i].reps) {
                let reps = $("<div>");
                reps.attr("class", "text-center")
                reps.text(`${workout.exercises[i].reps}`);
                nameDiv.append(reps)
            }
            if (workout.exercises[i].duration) {
                let duration = $("<div>");
                duration.attr("class", "text-center")
                duration.text(`${workout.exercises[i].duration}`);
                nameDiv.append(duration)
            }
            if (workout.exercises[i].distance) {
                let distance = $("<div>");
                distance.attr("class", "text-center")
                distance.text(`${workout.exercises[i].distance}`);
                nameDiv.append(distance)
            }
        }
    }).fail((err) => err)
})
// Submit Exercise Button
    // listner > post route to add exercise and reload page
$("#newExerciseForm").on("submit", function () {
    event.preventDefault();
    let exerciseName = $("#exerciseName").val()
    let weight = $("#weight").val()
    let sets = $("#sets").val()
    let reps = $("#reps").val()
    let duration = $("#duration").val()
    let distance = $("#distance").val()
    let exerciseData = {
        exerciseName,
        weight,
        sets,
        reps,
        duration,
        distance
    }
    $.ajax("/create/exercise", {
        type: "POST",
        data: exerciseData
    }).then((res) => {
        location.reload()
    })
})

// Finish Workout
    // listener > update route for workout's date (needs to be created)

// Back button
    // listner > route to load workout page
