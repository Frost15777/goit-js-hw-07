import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryMarkup = galleryItems.map(({ preview, original, description }) =>
    `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
  </a>
</li>`).join('');

gallery.insertAdjacentHTML("beforeend", galleryMarkup);

gallery.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.tagName === 'IMG') {
        const instance = basicLightbox.create(
            `<img src="${event.target.dataset.source}" alt="${event.target.alt}">`);

        instance.show()

    }
});

console.log(galleryItems);