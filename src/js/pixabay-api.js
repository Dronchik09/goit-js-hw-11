import { handlerError } from './js/render-functions';

const searchSettings = {
  key: '44850950-a38c775cff20ba6a666909e04',
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 12,
};
export function generateSearchString(searchText) {
    searchSettings.q = searchText;
    const urls = new URLSearchParams(searchSettings);
    return `https://pixabay.com/api/?${urls}`;
  }
  export function fetchImage(qveryURL) {
    return fetch(qveryURL).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  }