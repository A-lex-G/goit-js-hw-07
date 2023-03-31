import { galleryItems } from "./gallery-items.js";
// Change code below this line

const container = document.querySelector(".gallery");

const markup = galleryItems.map(
  ({ preview, original, description }) =>
    `<li class = "gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" title ="${description}"></a></li>`
);

container.insertAdjacentHTML("afterbegin", markup.join(""));

container.addEventListener("click", onImageClick);

let lightbox = new SimpleLightbox(".gallery a");

function onImageClick(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }

  lightbox.on("shown.simplelightbox", function () {
    lightbox.options.captionDelay = 250;
  });
}
