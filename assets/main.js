const API = 'https://rickandmortyapi.com/api/character';
const API2 = 'https://rickandmortyapi.com/api/character/183';

const content = null || document.getElementById('content');
const imgProfile = null || document.getElementById('img-profile');

async function fetchData(urlApi) {
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
}

//Esto llama una función automaticamente
(async () => {
  try {
    // Llama a la función fetchData para cargar los datos de la api
    const videos = await fetchData(API);
    console.log('people', videos.results)
    let view = `${videos.results.map(video => `
      <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.image}" alt=""${video.name}"" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            "${video.name}"
          </h3>
        </div>
      </div>
    `).slice(0,8).join('')}
    `;
    content.innerHTML = view;
  } catch(error) {
    console.error(error);
  }
})();

(async () => {
  try {
    const profile = await fetchData(API2);
    console.log('profile', profile.image);
    let viewImageProfile = `${profile.image}`
    imgProfile.innerHTML = `<img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="${viewImageProfile}" alt="">`
  } catch {
    console.error('error');
  }
})();