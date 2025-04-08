document.addEventListener('DOMContentLoaded', function () {
    // Get the form element
    const form = document.getElementById('trackerForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting and refreshing the page

        // Get the input values
        const calories = document.getElementById('calories').value;
        const protein = document.getElementById('protein').value;
        const workout = document.getElementById('workout').checked;

        // Log the results (for now, you can replace this with storing the data or something else)
        console.log('Calories Consumed: ' + calories);
        console.log('Protein Intake: ' + protein);
        console.log('Workout Done: ' + workout);

        // Reset the form after submission
        form.reset();
    });
});
