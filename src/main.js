// У файлі main.js напиши всю логіку роботи додатка.Виклики нотифікацій
// iziToast, усі перевірки на довжину масиву в отриманій відповіді робимо
// саме в цьому файлі.Імпортуй в нього функції із файлів pixabay - api.js
// та render - functions.js та викликай їх у відповідний момент.

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import 'loaders.css/loaders.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const query = form.elements['search-text'].value.trim();
  const submitButton = form.querySelector('.btn');

  if (!query) {
    iziToast.warning({
      message: 'Please enter search query',
      backgroundColor: '#ffa000',
      messageColor: '#fff',
      position: 'topRight',
    });
    return;
  }

  submitButton.disabled = true;
  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      if (!data.hits || data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching <br>your search query. Please try again!',
          backgroundColor: '#ef4040',
          messageColor: '#fff',
          position: 'topRight',
        });
        return;
      }

      createGallery(data.hits);
    })
    .catch(error => {
      iziToast.error({
        message: 'Failed to fetch data from API. <br>Please try again later.',
        backgroundColor: '#ef4040',
        messageColor: '#fff',
        position: 'topRight',
      });
    })
    .finally(() => {
      submitButton.disabled = false;
      hideLoader();
    });
}
