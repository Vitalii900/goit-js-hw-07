import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

function createImages(items) {
  return items
    .map(
      item =>
        `<div class="gallery__item">
          <a class="gallery__link" href="${item.original}">
            <img
              class="gallery__image"
              src="${item.preview}"
              data-source="${item.original}"
              alt="${item.description}"
            />
          </a>
      </div>`
    )
    .join('');
}

const addImagesToHtml = createImages(galleryItems);
// console.log(addImagesToHtml);

galleryRef.innerHTML = addImagesToHtml;

galleryRef.addEventListener('click', openModal);

function openModal(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

  instance.show();

  function closeModal(event) {
    if (event.code === 'Escape') {
      instance.close();
    }
    // console.log(event.code);
    galleryRef.removeEventListener('keyup', closeModal);
  }

  galleryRef.addEventListener('keyup', closeModal);

  // console.log(event.target.dataset.source);
}
