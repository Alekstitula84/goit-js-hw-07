import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);



for (let el of galleryItems) {
    document.querySelector('.gallery').insertAdjacentHTML('beforeEnd', ` <a class="gallery__link href="${el.original}"><img class="gallery__image" src="${el.preview}" data-source="${el.original}" alt="${el.description}" ></a>`)
};

const galleryBox = document.querySelector(".gallery");

galleryBox.addEventListener("click", imageClick);
function imageClick(event) {
    event.preventDefault();
    // Перевірка чи клік містить картинку
    if (!event.target.classList.contains("gallery__image")) {
        return;
    }
    // Відкриття    
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)
    instance.show();
    // Закриття
    document.addEventListener("keydown", (event) => {
        if (event.code === "Escape") {
            instance.close();
        }
    });
}