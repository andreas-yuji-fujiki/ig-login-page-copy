// current image element
const currentImage = document.getElementById('current-print-image');

// counter variable
let i = 0;

// main function
function changeImage() {
    // set 'I' to one
    if(i <= 0){
        i = 1
    }

    // change image source
    currentImage.src = `img/screen${i}.png`;

    // increment 'I'
    i++;

    // reset 'I' to 0
    if (i > 4) {
        i = 0;
    }

    // change the image
    setTimeout(changeImage, 3700);
}

// initializes the loop for the first time
changeImage();