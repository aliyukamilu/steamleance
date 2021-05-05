$(document).ready(function () {
  $("#sidebar").mCustomScrollbar({
    theme: "minimal",
  });

  $("#sidebarCollapse").on("click", function () {
    // open or close navbar
    $("#sidebar").toggleClass("active");
    // close dropdowns
    $(".collapse.in").toggleClass("in");
    // and also adjust aria-expanded attributes we use for the open/closed arrows
    // in our CSS
    $("a[aria-expanded=true]").attr("aria-expanded", "false");
  });
});

$("#inpt_search").on("focus", function () {
  $(this).parent("label").addClass("active");
});

$("#inpt_search").on("blur", function () {
  if ($(this).val().length == 0) $(this).parent("label").removeClass("active");
});

let els = document.getElementsByClassName("step");
let steps = [];
Array.prototype.forEach.call(els, (e) => {
  steps.push(e);
  e.addEventListener("click", (x) => {
    progress(x.target.id);
  });
});

function progress(stepNum) {
  let p = stepNum * 30;
  document.getElementsByClassName("percent")[0].style.width = `${p}%`;
  steps.forEach((e) => {
    if (e.id === stepNum) {
      e.classList.add("selected");
      e.classList.remove("completed");
    }
    if (e.id < stepNum) {
      e.classList.add("completed");
    }
    if (e.id > stepNum) {
      e.classList.remove("selected", "completed");
    }
  });
};

//Chart

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Friday', 'Sat', 'Sun'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 5, 3, 19],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


function view(x){
    // var x = document.getElementById("display");
    x.classList.toggle("fa-eye");
    // if (x.innerHTML === "*** **** ***") {
        
    //     x.innerHTML = "1234567890";
    //   } else {
    //     x.innerHTML = "*** **** ***";
    //   }
}
