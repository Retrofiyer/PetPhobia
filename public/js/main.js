// Obtener el nombre de la URL
const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name');

// Mostrar el mensaje de bienvenida
if (name) {
  document.getElementById('welcomeMessage').innerText = `Welcome, ${name}`;
}

let catCount = 0;
let dogCount = 0;

document.getElementById('showCats').addEventListener('click', () => {
  fetch('/api/cats')
    .then(response => response.json())
    .then(data => {
      const catContainer = document.getElementById('catContainer');
      catContainer.innerHTML = '';
      data.forEach(cat => {
        const img = document.createElement('img');
        img.src = cat.url;
        catContainer.appendChild(img);
      });
      catCount++;
      document.getElementById('catCount').innerText = catCount;
    })
    .catch(error => console.error('Error fetching cat images:', error));
});

document.getElementById('showDogs').addEventListener('click', () => {
  fetch('/api/dogs')
    .then(response => response.json())
    .then(data => {
      const dogContainer = document.getElementById('dogContainer');
      dogContainer.innerHTML = '';
      data.forEach(dog => {
        const img = document.createElement('img');
        img.src = dog.url;
        dogContainer.appendChild(img);
      });
      dogCount++;
      document.getElementById('dogCount').innerText = dogCount;
    })
    .catch(error => console.error('Error fetching dog images:', error));
});