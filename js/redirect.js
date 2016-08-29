// Script to redirect to main page after 5 seconds

$(document).ready(function () {
  var timer = setTimeout(function() {
            window.location='index.html'
        }, 5000);
})
