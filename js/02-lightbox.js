import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

function createImages(items) {
  return items
    .map(
      item =>
        `<a class="gallery__item" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" alt="${item.description}" title="${item.description}" />
        </a>`
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

  // console.log(event.target.src);

  new SimpleLightbox('.gallery a', {
    // captionsData: alt,
  });
}
