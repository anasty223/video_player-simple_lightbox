
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';
// Change code below this line
console.log(JSON.stringify(galleryItems));
console.log(galleryItems);
const imageContainer = document.querySelector('.gallery');
const cardsMarkup = createImagesCard(galleryItems);
imageContainer.insertAdjacentHTML('beforeend', cardsMarkup)
imageContainer.addEventListener('click', onContainerClick)


function createImagesCard(galleryItems) {

    return galleryItems.map(({ preview, original }) => {

        return `
     <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="Image description" />
    </a>
   `
    }).join('');

};

function onContainerClick(evt) {
    evt.preventDefault();

    const isGalleryImage = evt.target.classList.contains('gallery__image')
    if (!isGalleryImage) {
        return;
    }
   
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionSelector: "img",
  captionsData: "alt",
  captionPosition: "bottom", 
  captionDelay: 250, 
 });
console.log(lightbox);
// =======================================================================
