const components = {
    mainContainer: document.querySelector('.image-slider'),
    imageField: document.querySelector('.image-slider > img'),
    previousButton: document.querySelector('.previous-button'),
    nextButton: document.querySelector('.next-button'),
    dotsContainer: document.querySelector(".dots"),
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
    previousDot: null,
};

function createDot(index) {
    const element = document.createElement("button");
    element.classList.add("dot");
    element.dataset.index = index;
    document.querySelector(".dots").appendChild(element);
}

window.onload = () => {
    if (components.imageField)
        components.imageField.src = components.images[0];
    for (let i = 0; i < components.images.length; i++) {
        createDot(i);
    }
}

components.mainContainer.addEventListener('click', (e) => {
    components.previousIndex = components.imageIndex;
    if (e.target.nodeName !== "BUTTON")
        return;
    if (e.target.classList.contains('previous-button')) {
        components.imageIndex--;
    } else if (e.target.classList.contains('next-button')) {
        components.imageIndex++;
    }
    components.imageIndex = (components.imageIndex + components.images.length) 
                                                   % components.images.length;
    components.imageField.src = components.images[components.imageIndex];
})

components.dotsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains("dot")) {
        if  (components.previousDot) {
            components.previousDot.classList.remove("focused-circle");
        }         
        e.target.classList.add("focused-circle");
        components.previousDot = e.target;
        components.imageIndex = parseInt(e.target.dataset.index);
        components.imageField.src = components.images[components.imageIndex];
    }
})