let homeScoreEl = document.getElementById("homescore-el")
let homeScore = 0;
homeScoreEl.innerText = homeScore;
let guestScoreEl = document.getElementById("questscore-el")
let guestScore = 0;
guestScoreEl.innerText = guestScore;


function incrementHome(point) {
    homeScore += point;
    homeScoreEl.innerText = homeScore;
    checkwinner();
}

function incrementGuest(point) {
    guestScore += point;
    guestScoreEl.innerText = guestScore;
    checkwinner();
      
}

function refresh() {
    homeScore = 0;
    homeScoreEl.innerText = homeScore;
    guestScore = 0;
    guestScoreEl.innerText = guestScore;
    homeScoreEl.style.textDecoration = "none";
    guestScoreEl.style.textDecoration = "none";
}

function checkwinner(){
    homeScoreEl.style.textDecoration = "none";
    guestScoreEl.style.textDecoration = "none";
    if (homeScore < guestScore) {
        guestScoreEl.style.textDecoration = "underline";
    }
    if (homeScore > guestScore) {
        homeScoreEl.style.textDecoration = "underline";
    }
}
function getRandomInt(max) {
  let random = Math.floor(Math.random() * max);
    homeScore = random;
    homeScoreEl.innerText = homeScore;
    random = Math.floor(Math.random() * max);
    guestScore = random;
    guestScoreEl.innerText = guestScore;
    checkwinner();
}