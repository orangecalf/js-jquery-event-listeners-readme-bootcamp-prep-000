//define functions here

$(document).ready(function(){

// call functions here
});

function getIt() {
  $('p').on("click", function() {
  alert("Hey!")
})
  
}

function frameIt() {
  $("img").on("load", function() {
    $('img').addClass('tasty')
  })
}
function pressIt() {
  $("#typing").on("keydown", function(e) {
    if (e.which === 71) {
      alert("g")
    }
  })
}

function submitIt() {
  $('input:last-Child').on('click', function() {
    alert('Your form is going to be submitted now.')
  })
}