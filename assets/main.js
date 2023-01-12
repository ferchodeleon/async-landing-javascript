const API = 'https://rickandmortyapi.com/api/character';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
		'X-RapidAPI-Key': '170e8c5817mshe51d1858408dbf1p109bd6jsn9756bbd1388a'
	}
};

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
    `).slice(0,4).join('')}
    `;
    content.innerHTML = view;
  } catch(error) {
    console.error(error);
  }
})();