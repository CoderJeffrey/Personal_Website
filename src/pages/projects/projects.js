
const memoryDescription = "A fun simulation of Simon Electronic Memory Game. I use HTML, CSS, JS to build a web game \
with five different colored buttons. Each button plays a unique note. Players had to be able to repeat an increasingly long \
string of tones that buttons created";

const sambaDescription = "A fusion model using BERT that improves the accuracy of predicting \
whether a YouTube video is appropriate for children by at least 7% over other state-of-the-art classifiers.";

const adsDescription = "An extensive study of ad patterns in young-kid-oriented videos to quantify the presence of inappropriate ads that are shown on appropriate videos on YouTube, \
with a comprehensive dataset of YouTube ads displayed in young-kid-oriented videos.";

document.getElementById('memory-description').innerHTML = memoryDescription
document.getElementById('samba-description').innerHTML = sambaDescription
document.getElementById('ads-description').innerHTML = adsDescription

const hamburger_button = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

function toggleButton(){
    navList.classList.toggle('show');
}

hamburger_button.addEventListener('click', toggleButton);