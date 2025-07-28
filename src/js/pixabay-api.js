// У файлі pixabay-api.js зберігай функції для виконання HTTP-запитів:

// getImagesByQuery(query).Ця функція повинна приймати один параметр query
//     (пошукове слово, яке є рядком), здійснювати HTTP - запит і повертати
//     значення властивості data з отриманої відповіді.

import axios from 'axios';

export function getImagesByQuery(query) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '51439331-da55d8a3a0e541a7ddbda82f1';

  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return axios(`${BASE_URL}?${params}`)
    .then(res => res.data)
    .catch(error => console.log(error));
}
