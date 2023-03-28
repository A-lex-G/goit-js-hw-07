import { galleryItems } from "./gallery-items.js";
// Change code below this line

const container = document.querySelector(".gallery");

const markup = galleryItems.map(
  ({ preview, original, description }) =>
    `<li class = "gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"></a></li>`
);
container.insertAdjacentHTML("afterbegin", markup.join(""));

container.addEventListener("click", onImageClick);

function onImageClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
  const imgId = event.target.dataset.source;

  const instance = basicLightbox.create(`
        <div class="modal">
            <img class="gallery__image" src="${imgId}"">
        </div>
    `);

  instance.show();

  if (instance.visible()) {
    window.addEventListener("keydown", onEscClose);
  }

  function onEscClose(event) {
    instance.close();
    window.removeEventListener("keydown", onEscClose);
  }
}
