// Wrap all code that interacts with the DOM in a call to jQuery to ensure that

// the code isn't run until the browser has finished rendering all the elements
// in the html.
var event9amInput = $("#9amm");
var event10amInput = $("#10amm");
var event11amInput = $("#11amm");
var event12pmInput = $("#12pmm");
var event13pmInput = $("#13pmm");
var event14pmInput = $("#14pmm");
var event15pmInput = $("#15pmm");
var event16pmInput = $("#16pmm");
var event17pmInput = $("#17pmm");
var submissionInput = $("#submission");
let userr = [];
$(function () {
  //dedicating today date for top of the page in header
  var today = dayjs();
  $("#currentDay").text(today.format("dddd, MMM D, YYYY"));
});

//
renderLastEvent();
function renderLastEvent() {
  var event9am = localStorage.getItem("#9amm");
  var event10am = localStorage.getItem("#10amm");
  var event11am = localStorage.getItem("#11amm");
  var event12am = localStorage.getItem("#12pmm");
  var event13am = localStorage.getItem("#13pmm");
  var event14am = localStorage.getItem("#14pmm");
  var event15am = localStorage.getItem("#15pmm");
  var event16am = localStorage.getItem("#16pmm");
  var event17am = localStorage.getItem("#17pmm");
}

submissionInput.on("click", function (event) {
  event.preventDefault();
  //create user object from submission
  userr.push([
    { "eventMentioned9amm:": event9am.val().trim() },
    { "eventMentioned10amm:": event10am.val().trim() },
    { "eventMentioned11amm:": event11am.val().trim() },
    { "eventMentioned13pmm:": event13pm.val().trim() },
    { "eventMentioned14pmm:": event14pm.val().trim() },
    { "eventMentioned15pmm:": event15pm.val().trim() },
    { "eventMentioned16pmm:": event16pm.val().trim() },
    { "eventMentioned17pmm:": event17pm.val().trim() },
  ]);
  //set new submission to local storage
  localStorage.setItem("userr", JSON.stringify(userr));

  //for color dedicating depends on the present time
  $(document).ready(function () {
    // Get the current hour in 24-hour time
    var currentHour = moment().hour();

    // Iterate over each time-block
    $(".time-block").each(function () {
      // Get the id of the time-block
      var hourId = $(this).attr("id");
      var hourNum = hourId.split("-")[1];

      // Compare the id to the current hour
      if (hourNum < currentHour) {
        $(this).removeClass("future present").addClass("past");
      } else if (hourNum > currentHour) {
        $(this).removeClass("past present").addClass("future");
      } else {
        $(this).removeClass("past future").addClass("present");
      }
    });
  });
});
