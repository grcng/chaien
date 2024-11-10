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
let totalLetters = 11;

function showLetter(letterNumber) {
    $('.full-screen').hide();
    $(`#letter${letterNumber}`).show();
}

function nextLetter(event) {
    event.stopPropagation();
    if ($('.full-screen:visible').length === 0) {
        return; // If no letter is shown, do nothing
    }
    if (currentLetter < totalLetters) {
        currentLetter++;
    } else {
        currentLetter = 1;
    }
    showLetter(currentLetter);
}

function previousLetter(event) {
    event.stopPropagation();
    if ($('.full-screen:visible').length === 0) {
        return; 
    }
    if (currentLetter > 1) {
        currentLetter--;
    } else {
        currentLetter = totalLetters;
    }
    showLetter(currentLetter);
}

function closeFullscreen() {
    $(`.full-screen`).hide(); 
    currentLetter = 1; 
}

$(document).on('keydown', function(e) {
    if (e.key == "ArrowRight") {
        nextLetter(e); 
    } else if (e.key == "ArrowLeft") {
        previousLetter(e); 
    } else if (e.key == "Escape") {
        closeFullscreen(); 
    } else if (e.key == " ") {
        closeFullscreen();
    }
});
