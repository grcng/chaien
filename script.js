// page 1

function play() {
    $("#background-video")[0].play();
}

// page 2

const noti = $("#noti");

noti.addClass("noti-animate");

if (noti.attr("src").includes("noti_envelope.png")) { 
    noti.on("mouseenter", function() { 
        noti.removeClass("noti-animate"); 
    });
    noti.on("mouseleave", function() { 
        noti.addClass("noti-animate"); 
    });
}

function openmail() {
    $("#noti").hide(); 
    $("#opened-mail").show(); 
    $("#letter1").css("display", "flex"); 
}

let currentLetter = 1;

function nextletter() {
    $(`#letter${currentLetter}`).hide();
    currentLetter++;
    if ($(`#letter${currentLetter}`).length > 0) {
        $(`#letter${currentLetter}`).show();
    } else {
        // Reset to the first letter or hide all if needed
        currentLetter = 1;
        $(`#letter${currentLetter}`).show();
    }
}

function closeFullscreen() {
    $(`.full-screen`).hide(); 
    currentLetter = 1; 
}

$(document).on("keydown", function(event) {
    if (event.key === "Escape") {
        closeFullscreen(); 
    }
});

$('.full-screen').on('click', function(e) {
    if ($(e.target).closest('.letter').length === 0) { // Check if the click is outside the image
        closeFullscreen();
    }
});