function showKeywords() {
    const keywords = document.getElementById("keywords");
    if (keywords.classList.contains("visible")) {
        document.getElementById("about-me").innerHTML = "I am an all around communication nerd - I love words and languages, design and accessible websites. My love for languages is what drew me to programming but the ability to create something that can be shared so widely and so easily brought me back. I'm passionate about getting great things in front of as many people as possible with accessible design and SEO at the heart of what I do.";
        keywords.classList.remove("visible");
        keywords.innerText = "See my keywords";
    } else {
        document.getElementById("about-me").innerHTML = "I am an all around <b>communication</b> nerd - I love words and languages, <b>design</b> and accessible websites. My love for languages is what drew me to <b>programming</b> but the ability to create something that can be shared so widely and so easily brought me back. I'm passionate about getting great things in front of as many people as possible with <b>accessible design</b> and <b>SEO</b> at the heart of what I do.";
        keywords.classList.add("visible");
        keywords.innerText = "Hide my keywords";
    }
}

function showNav() {
    var nav = document.getElementById("myTopnav");
    if (nav.className === "topnav") {
      nav.className += " responsive";
    } else {
      nav.className = "topnav";
    }
  }

function applyFilters(filter) {
    var projects = document.getElementsByTagName("article");
    for (var i = 0; i < projects.length; i++) {
        if (filter === "all") {
            projects[i].classList.remove("filtered");
        }
        else if (!projects[i].classList.contains(filter)) {
            projects[i].classList.add("filtered");
        } else {
            projects[i].classList.remove("filtered");
        }
    }
}

function showModal() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.lastChild;
}

function validateForm() {
    return true;
}