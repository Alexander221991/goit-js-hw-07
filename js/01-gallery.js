import { galleryItems } from "./gallery-items.js";
// Change code below this line
const list = document.querySelector(".gallery");

list.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

list.addEventListener("click", handleClick);

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
      <li class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
          <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
          />
        </a>
      </li>`
    )
    .join("");
}

function handleClick(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }
  const instance = basicLightbox.create(`
  <img src="${event.target.dataset.source}"/>
          `);
  instance.show();

  document.addEventListener("keydown", closeModal);

  function closeModal(event) {
    if (event.code === "Escape") {
      instance.close();
      document.removeEventListener("keydown", closeModal);
    }
  }
}

console.log(galleryItems);
