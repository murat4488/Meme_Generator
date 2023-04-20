const memeContainer = document.getElementById("memeContainer");
const form = document.getElementById("memeForm");
const topInput = document.getElementById("top");
const bottomInput = document.getElementById("bottom");
const image = document.getElementById("img");


form.addEventListener("submit", function(e){
    e.preventDefault();

    let meme = document.createElement("div");
    meme.classList.add("meme");
    
    let img = document.createElement("img");
    img.classList.add("meme-img");

    let topText = document.createElement("h5")
    topText.classList.add("top-text");

    let bottomText = document.createElement("h5")
    bottomText.classList.add("bottom-text")

    img.src = image.value;
    topText.innerText= topInput.value;
    bottomText.innerText= bottomInput.value;

    meme.append(img);
    meme.append(topText);
    meme.append(bottomText);

    // Attach remove event listener
    meme.addEventListener('click', function(e) {
        e.target.parentNode.remove();
    });

    // Append the meme itself to the memeContainer
    memeContainer.append(meme);
});




