// Sample data for the top 10 users and their points
const topUsersData = [
    { name: 'Kirtpreet', points: 1000 },
    { name: 'You', points: 950 },
    { name: 'Aryaman', points: 900 },
    { name: 'Sneh', points: 850 },
    { name: 'Daksh', points: 800 },
    { name: 'Shubhanshu', points: 750 },
    { name: 'Lakshay', points: 700 },
    { name: 'Anchal', points: 650 },
    { name: 'Devansh', points: 600 },
    { name: 'Sophia', points: 550 },
];

// Function to create the centered vertical bar graph for the top 10 users
function createCenteredVerticalBarGraph(data) {
    const barGraphContainer = document.getElementById('bar-graph-container');

    data.forEach((user, index) => {
        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.height = (user.points / data[0].points) * 100 + '%'; // Adjust height relative to the top user
        bar.innerHTML = `<span class="user-name">${user.name}</span><br>${user.points} points`;

        if (index === Math.floor(data.length / 2)) {
            bar.classList.add('centered-user'); // Centered user
        }

        barGraphContainer.appendChild(bar);
    });

    // Add empty divs to create space between the centered user and the others
    for (let i = 0; i < data.length - 1; i++) {
        const emptySpace = document.createElement('div');
        emptySpace.className = 'empty-space';
        barGraphContainer.appendChild(emptySpace);
    }
}

// Call the function to create the centered vertical bar graph
createCenteredVerticalBarGraph(topUsersData);

// Example JavaScript to retrieve the selected weekly goal value
document.getElementById('weekly-goal-form').addEventListener('change', function(event) {
    const selectedGoal = event.target.querySelector('input[name="weekly-goal"]:checked').value;
    // You can use 'selectedGoal' to update the displayed weekly goal as needed.
});
// Sample data for the yearly activity calendar (activity levels for each day)
const yearlyActivityData = [
    'medium', 'medium', 'low', 'low', 'very-high',
    'medium', 'low', 'medium', 'low', 'very-high',
    'medium', 'very-high', 'medium', 'medium', 'medium',
    'medium', 'low', 'very-high', 'medium', 'low',
    'medium', 'medium', 'medium', 'medium', 'very-high',
    'medium', 'medium', 'medium', 'medium', 'medium',
    'medium', 'very-high', 'medium', 'low', 'medium',
    'very-high', 'medium', 'medium', 'medium', 'medium',
    'medium', 'medium', 'medium', 'medium', 'very-high',
    'medium', 'medium', 'medium', 'medium', 'medium',
    'medium', 'medium', 'medium', 'very-high', 'medium',
    'low', 'medium', 'very-high', 'medium', 'medium',
    'medium', 'medium', 'medium', 'medium', 'very-high',
    'medium', 'medium', 'medium', 'medium', 'medium',
    'medium', 'medium', 'very-high', 'medium', 'medium',
    'medium', 'medium', 'very-high', 'medium', 'medium',
    'medium', 'medium', 'medium', 'medium', 'medium',
    'medium', 'medium', 'medium', 'very-high', 'medium',
    'medium', 'medium', 'medium', 'medium', 'medium',
    'medium', 'medium', 'medium', 'medium', 'very-high',
    'medium', 'medium', 'medium', 'medium', 'medium',
    'medium', 'medium', 'medium', 'medium', 'medium',
    'medium', 'very-high', 'medium', 'medium', 'medium',
    'medium', 'medium', 'medium', 'medium', 'medium',
    'medium', 'medium', 'medium', 'medium', 'medium',
    'medium', 'medium', 'medium', 'medium', 'medium',
    'medium', 'medium', 'medium', 'medium', 'very-high',
    'low', 'medium', 'medium', 'medium', 'medium',
    'medium', 'medium', 'medium', 'medium', 'medium',
    'medium', 'low', 'medium', 'medium', 'medium',
    'medium', 'medium', 'medium', 'low', 'medium',
    'medium', 'low', 'medium', 'medium', 'very-high',
    'medium', 'medium', 'medium', 'medium', 'medium',
    'low', 'medium', 'medium', 'medium', 'medium',
    'medium', 'medium', 'medium', 'medium', 'medium',
    'medium', 'medium', 'medium', 'low', 'medium',
    'medium', 'low', 'medium', 'medium', 'very-high',
    'medium', 'medium', 'medium', 'medium', 'medium',
    'medium', 'low', 'medium', 'medium', 'medium',
    'medium', 'medium', 'medium', 'medium', 'medium',
    'medium', 'medium', 'medium', 'medium', 'medium',
    'low', 'medium', 'medium', 'low', 'very-high',
    'medium', 'medium', 'medium', 'medium', 'medium',
    'medium', 'medium', 'low', 'medium', 'medium',
    'low', 'medium', 'medium', 'medium', 'low',
    'medium', 'medium', 'medium', 'medium', 'medium',
    'medium', 'medium', 'low', 'medium', 'very-high'
];

// Function to create the yearly activity calendar
function createYearlyActivityCalendar(data) {
    const yearlyActivityContainer = document.getElementById('yearly-activity');
    const daysInWeek = 7;

    for (let i = 0; i < data.length; i++) {
        const activityBox = document.createElement('div');
        activityBox.className = `activity-box ${data[i]}`;
        yearlyActivityContainer.appendChild(activityBox);
    }
}

// Call the function to create the yearly activity calendar
createYearlyActivityCalendar(yearlyActivityData);

