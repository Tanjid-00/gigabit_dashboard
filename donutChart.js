document.addEventListener("DOMContentLoaded", function () {
  var ctx = document.getElementById("myDonutChart").getContext("2d");
  var myDonutChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Man", "Woman"],
      datasets: [
        {
          label: "Employee Composition",
          data: [70, 30],
          backgroundColor: [
            "rgb(54, 162, 235)", // Blue for Woman
            "rgb(75, 192, 192)", // Green for Man
          ],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: "Gender Distribution",
        },
        legend: {
          display: true,
          position: "bottom",
        },
      },
    },
  });
});
