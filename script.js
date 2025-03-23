function showKeywords() {
    const keywords = document.getElementById("keywords");
    document.getElementById("about-me").innerHTML = "I am an all around <b>communication</b> nerd - I love words and languages, design and accessible websites. My love for languages is what drew me to programming but the ability to create something that can be shared so widely and so easily brought me back. I'm passionate about getting great things in front of as many people as possible with accessible design and SEO at the heart of what I do.";
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