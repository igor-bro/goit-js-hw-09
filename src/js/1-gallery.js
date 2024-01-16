const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

let galleryHTML = images.reduce((acc, element) => {
  return (acc += `
    <a class="gallery-link" href="${element.original}">
      <img
        class="gallery-image"
        src="${element.preview}"
        alt="${element.description}"
      />
    </a>`);
}, '');

galleryHTML = `<div class="gallery">
            ${galleryHTML}
</div>`;

document
  .querySelector('.main-section')
  .insertAdjacentHTML('beforeend', galleryHTML);

let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

// стилізація модалки
gallery.on('shown.simplelightbox', function () {
  const textColor = 'rgba(255,255,255,1)';

  const overlayEl = document.querySelector('.sl-wrapper');
  overlayEl.style.backgroundColor = 'rgba(46, 47, 66, 0.8)';
  overlayEl.style.color = textColor;

  const btnCloseEl = document.querySelector('.sl-close');
  btnCloseEl.style.width = '32px';
  btnCloseEl.style.height = '32px';
  btnCloseEl.style.color = textColor;

  const btnPrevEl = document.querySelector('.sl-prev');
  btnPrevEl.style.width = '24px';
  btnPrevEl.style.height = '24px';
  btnPrevEl.style.color = textColor;

  const btnNextEl = document.querySelector('.sl-next');
  btnNextEl.style.width = '24px';
  btnNextEl.style.height = '24px';
  btnNextEl.style.color = textColor;

  const counterEl = document.querySelector('.sl-counter');
  counterEl.style.color = textColor;
  counterEl.style.fontSize = '16px';
  counterEl.style.fontStyle = 'normal';
  counterEl.style.fontWeight = '400';
  counterEl.style.lineHeight = '1.5'; /* 150% */
  counterEl.style.letterSpacing = '0.04em';
});
