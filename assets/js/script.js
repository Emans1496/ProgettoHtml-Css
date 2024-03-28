/** carousel words **/
var words = ['Web developer','Sociable','Dreamer','Problem solver','Funny','Enterprising','Minimalistic style addicted','Musician','Thinker','Everything I want to be']
var counter = 0;
var word = document.getElementById("carousel-words");
setInterval(update_carousel_words, 1000);
function update_carousel_words() {
    word.innerHTML = words[counter];
    counter++;
    if (counter >= words.length) {
        counter = 0;
    }
}