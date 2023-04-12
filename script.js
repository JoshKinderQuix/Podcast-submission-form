//Replaced function calls in HTML with EventListeners

function wordCounter(field, wordField, charField, maxLimit) {
    const charCountField = document.getElementById(charField);
    const wordCountField = document.getElementById(wordField);
    const fieldWords = field.value.split(" ").length;
    const characters = field.value.length;

    if (characters > maxLimit) {
        field.value = field.value.substring(0, maxlimit);
        return false;
    } else {
        charCountField.value = maxLimit - characters + " Chars";
        wordCountField.value = fieldWords + " Words";
    }
    //changes font color of text field based on how many words are in the field
    if (maxLimit === 800) {
        if (fieldWords < 300) {
            field.style.color = "orange";
        } else {
            field.style.color = "green";
        }
    } else {
        if (characters < 50) {
            field.style.color = "lightblue";
        } else if (characters > 79) {
            field.style.color = "red";
        } else if (characters > 50) {
            field.style.color = "darkorange";
        }
    }
}

const epDesc = document.getElementById("ep-desc");
const shortDesc = document.getElementById("short-desc");

epDesc.addEventListener("keyup", function () {
    wordCounter(this, "word-counter", "char-counter", 800);
});

shortDesc.addEventListener("keyup", function () {
    wordCounter(this, "word-counter2", "char-counter2", 80);
});


//display Podcast name and number before title to help standardize episode naming format
const titleName = document.getElementById("title-name");
const titleNum = document.getElementById("title-num");
const podcastNameField = document.getElementById("podcast-name");

const displayTitle = function () {
    //add a handler for type !== number for SE's
    const podcastName = podcastNameField.options[podcastNameField.selectedIndex].text;
    const epNum = document.getElementById("ep-num").value;

    titleNum.innerHTML = podcastName + " episode " + epNum + ":";
}

titleName.addEventListener("focus", displayTitle);

//push entries to an array on pressing Enter, and display them in a new field. "Delete" should remove the last item from the array, and the display. Should empty the text entry box on Enter.
const keyWordArray = [];
const keyWordEntry = document.getElementById("keyWords");
const keyWordDisplay = document.getElementById("keyWordsEntered");
const keyWordEnter = document.getElementById("keyword-enter");
const keyWordDelete = document.getElementById("keyword-delete");

const getTags = function (trigger) {
    if (event.key === "Enter" || trigger === true) {
        if (keyWordEntry.value == "") {
            alert("Please enter a keyword");
        } else {
            keyWordArray.push(keyWordEntry.value);
            keyWordEntry.value = "";
        }
    } else if (event.key === "Delete" || trigger === false) {
        keyWordArray.pop();
    }
    keyWordDisplay.value = keyWordArray;
    console.log(keyWordArray);
};

keyWordEntry.addEventListener("keyup", getTags);
keyWordEnter.addEventListener("click", function () {
    getTags(true);
});
keyWordDelete.addEventListener("click", function () {
    getTags(false);
});

//displays hosts, or guest hosts on entry. guest === true on the guest host entry
const hostArray = [];
const guestArray = [];

const hostEntry = document.getElementById("hosts");
const hostDisplay = document.getElementById("hostsEntered");
const guestEntry = document.getElementById("guests");
const guestDisplay = document.getElementById("guestsEntered");
const guestsEnter = document.getElementById("guests-enter");
const guestsDelete = document.getElementById("guests-delete");
const hostsEnter = document.getElementById("hosts-enter");
const hostsDelete = document.getElementById("hosts-delete");

function getHosts(guest, trigger) {
    if (guest === true) {
        if (event.key === "Enter" || trigger === true) {
            if (guestEntry.value == "") {
                alert("Please enter a Guest");
            } else {
                guestArray.push(guestEntry.value);
                guestEntry.value = "";
            }
        } else if (event.key === "Delete" || trigger === false) {
            guestArray.pop();
        }
        guestDisplay.value = guestArray;
        console.log(guestArray);
    } else if (guest !== true) {
        if (event.key === "Enter" || trigger === true) {
            if (hostEntry.value == "") {
                alert("Please enter a Host");
            } else {
                hostArray.push(hostEntry.value);
                hostEntry.value = "";
            }
        } else if (event.key === "Delete" || trigger === false) {
            hostArray.pop();
        }
        hostDisplay.value = hostArray;
        console.log(hostArray);
    }
}

guestsEnter.addEventListener("click", function () {
    getHosts(true, true);
});
guestsDelete.addEventListener("click", function () {
    getHosts(true, false);
});
hostsEnter.addEventListener("click", function () {
    getHosts(false, true);
});
hostsDelete.addEventListener("click", function () {
    getHosts(false, false);
});
hostEntry.addEventListener("keyup", function () {
    getHosts(false);
});
guestEntry.addEventListener("keyup", function () {
    getHosts(true);
});

//displays the image linked in the text entry box
const suggestedImg = document.getElementById("sugImg");
const imageEntry = document.getElementById("imgEntry");

const getImg = function () {
    suggestedImg.src = imageEntry.value;
};

imageEntry.addEventListener("keyup", getImg);

const submitButton = document.getElementById("submit-button");

const submit = function () {
    alert("Placeholder alert for form submission");
}

submitButton.addEventListener("click", submit);



//No easter eggs, here! :^)
const quotes = [
    "Gotta hit those macros!",
    "U mirin?",
    "Cheesecake is part of the program!",
    "It's ya boy, crippling depression!",
    "@$$holes never die...",
    "Jaastradamus strikes again!",
    "You're all invited to gaybrunch!",
    "Yup, working as intended"
];

function randomQuote() {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById("title").title = quotes[randomNumber];
}

title.addEventListener("load", randomQuote());