document.addEventListener("DOMContentLoaded", function () {
  var ctx = document.getElementById("myLineChart").getContext("2d");
  var myLineChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Attendance Comparison Chart",
          data: [35, 59, 40, 71, 56, 62, 40],
          borderColor: "#3353f4b4",

          tension: 0.6,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});
