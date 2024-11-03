// Calculate Percentage
function calculatePercentage() {
    const totalMarks = parseFloat(document.getElementById('total-marks').value);
    const obtainedMarks = parseFloat(document.getElementById('obtained-marks').value);

    if (!isNaN(totalMarks) && !isNaN(obtainedMarks) && totalMarks > 0) {
        const percentage = (obtainedMarks / totalMarks) * 100;
        document.getElementById('percentage').textContent = percentage.toFixed(2);
    } else {
        alert('Please enter valid marks.');
    }
}

// Display CGPA
function displayCGPA() {
    const cgpa = parseFloat(document.getElementById('cgpa-input').value);

    if (!isNaN(cgpa) && cgpa >= 0 && cgpa <= 10) {
        document.getElementById('cgpa').textContent = cgpa.toFixed(2);
    } else {
        alert('Please enter a valid CGPA (between 0 and 10).');
    }
}
