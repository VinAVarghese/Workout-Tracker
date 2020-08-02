// On Page Load / PASSED TESTING
// Get route for all user workouts > render in 'my workouts' div
$(window).on("load", () => {   
    $.ajax({
        url: "/workouts",
        method: "GET",
        data: "check"
    }).done((workouts) => {
        for (let i = 0; i < workouts.length; i++) {
            let nameDiv = $("<div>");
            nameDiv.attr("class", "text-center");
            nameDiv.text(`${workouts[i].workoutName}`);
            $(".pastWorkoutList").prepend(nameDiv);
            let dateDiv = $("<div>");
            dateDiv.attr("class", "text-center")
            // dateDiv.attr("type", "date")
            dateDiv.text(`${workouts[i].workoutDate}`);
            nameDiv.append(dateDiv)
            let goBtn = $("<button>");
            goBtn.attr("id", "goBtn")
            goBtn.attr("class", "button")
            goBtn.attr("data-id", `${workouts[i]._id}`)
            goBtn.text("Let's Go!")
            dateDiv.after(goBtn)
        }
    }).fail((err) => err)
})


// Submit Workout Button / PASSED TESTING
// Listener > post route to add workout and reload page
$("#newWorkoutForm").on("submit", function () {
    event.preventDefault();
    let workoutName = $("#workoutName").val()
    let workoutDate = $("#workoutDate").val()
    let workoutData = {
        workoutName,
        workoutDate
    }
    $.ajax("/create/workout", {
        type: "POST",
        data: workoutData
    }).then((res) => {
        location.reload()
    })
})

// Go Workout button / NOT PASSING TESTING
// Listener > route to grab workout _id and load exercise page with it as hash
$(document).ready(()=>{
    $("#goBtn").click(function () {
        event.preventDefault();
        console.log("goBtn working");
        let workoutId = this.data-id;
        location.href = `/exercise.html#${workoutId}`
    })
})