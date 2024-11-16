import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = `46861005-d1ea17891df84db160fa13612`;
const PER_PAGE = 15;

async function fetchImages(query, page = 1) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: PER_PAGE,
    page,
  };

  try {
    const response = await axios.get(BASE_URL, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
}

export { fetchImages };


  
  

// const fetchImages = request => {
//   requestParams.set('q', request);

//   return fetch(`${BASE_URL}?${requestParams}`)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`Failed to fetch images`);
//       }

//       return response.json();
//     })
//     .then(response => {
//       if (response.hits.length === 0) {
//         throw new Error(
//           'Sorry, there are no images matching your search query. Please try again!'
//         );
//       }

//       return response.hits.map(hit => ({
//         webformatURL: hit.webformatURL,
//         largeImageURL: hit.largeImageURL,
//         tags: hit.tags,
//         likes: hit.likes,
//         views: hit.views,
//         comments: hit.comments,
//         downloads: hit.downloads,
//       }));
//     });
// };

