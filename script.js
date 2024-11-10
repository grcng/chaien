// page 1

function play() {
    const video = document.getElementById("background-video");
    video.play();
}

// page 2

const noti = document.getElementById("noti");

noti.classList.add("noti-animate");

if (noti.src.includes("noti_envelope.png")) {
    noti.addEventListener("mouseenter", () => {
        noti.classList.remove("noti-animate");
    });
    noti.addEventListener("mouseleave", () => {
        noti.classList.add("noti-animate");
    });
}

function openmail() {
    noti.style.display = 'none';
    const mail = document.getElementById("opened-mail");
    mail.style.display = "block";
}
