const components = {
    mainContainer: document.querySelector('.image-slider'),
    imageField: document.querySelector('.image-slider > img'),
    previousButton: document.querySelector('.previous-button'),
    nextButton: document.querySelector('.next-button'),
    dots: document.querySelectorAll(".dot"),
    images: [
        './assets/second.jpeg',
        './assets/star.jpeg',
        './assets/fourth.jpeg',
        './assets/third.jpeg',
        './assets/x.jpeg',
        './assets/test.jpg',
        './assets/first.jpeg',
        './assets/fifth.jpeg',
        './assets/space.jpeg',
    ],
    imageIndex: 0,
    previousIndex: 0,
};

function displayImageFromDot(e) {
    components.dots.forEach(elem => {
        if (elem === e.target) {
            elem.classList.add("focused-circle");
        } else if (elem.classList.contains("focused-circle")) {
            elem.classList.remove("focused-circle");
        }
    })
}

window.onload = () => {
    if (components.imageField)
        components.imageField.src = components.images[0];
}

components.mainContainer.addEventListener('click', (e) => {
    if (e.target.nodeName !== "BUTTON")
        return;
    if (e.target.classList.contains('previous-button')) {
        components.imageIndex--;
    } else if (e.target.classList.contains('next-button')) {
        components.imageIndex++;
    }
    components.previousIndex = components.imageIndex;
    components.imageIndex = (components.imageIndex + components.images.length) 
                                                   % components.images.length;
    components.imageField.src = components.images[components.imageIndex];
})


components.dots.forEach(dot => {
    dot.addEventListener('click', displayImageFromDot)
})