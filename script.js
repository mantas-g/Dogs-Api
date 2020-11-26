let container = document.querySelector('.container');
let button = document.querySelector(".pow");
let audio = new Audio("Pic/254286__jagadamba__mechanical-switch.wav");

let currentFile;
function fetchFile() {
    fetch("https://random.dog/woof.json").then((response) => {
       
        response.json().then((data) => {
            console.log(data)
            let url = data.url
            let lastCharacterFromUrl = url.charAt(url.length-1);
            if (lastCharacterFromUrl == "4") {
                container.innerHTML = `<video autoplay loop muted src="${url}"></video>`
            } else {
                container.innerHTML = `<img src="${url}">`
            }
        });
    });
}

fetchFile();

button.addEventListener("click", function() {
    fetchFile();
    audio.play()
}); 


 

   



