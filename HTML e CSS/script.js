let map = L.map('map').setView([-30.0243475, -51.2082336], 16);
 
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
 
// map.locate({setView: true, maxZoom: 16});
 
 
let marker = L.marker([-30.0243475, -51.2082336]).addTo(map);
 
let circle = L.circle([-30.0243475, -51.2082336], {
    color: 'blue',
    fillColor: '#0d4ae5ff',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);
 
// let polygon = L.polygon([
//    [-30.0243475, -51.2082336],
//    [-30.0243475, -51.2082336],
//      [-30.0243475, -51.2082336]
// ]).addTo(map);
 
marker.bindPopup("<b>Sua localização!</b><br>Você está aqui!").openPopup();
circle.bindPopup("Etá sem água nessa área.");

 
// let popup = L.popup()
//     .setLatLng([-30.0243475, -51.2082336])
//     .setContent("I am a standalone popup.")
//     .openOn(map);
 
function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}
map.on('click', onMapClick);
 
// let popup = L.popup();
 
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}
 
map.on('click', onMapClick);

document.addEventListener("DOMContentLoaded", () => {

  // Elementos do HTML
  const input = document.getElementById("search-input");
  const suggestions = document.getElementById("suggestions");
  const searchButton = document.getElementById("search-button");

  searchButton.type = "button";

  // Array completo de bairros com coordenadas
  const bairros = [
    { nome: "Aberta dos Morros", lat: -30.16002, lng: -51.19749 },
    { nome: "Agronomia", lat: -30.0595, lng: -51.1267 },
    { nome: "Anchieta", lat: -29.9846, lng: -51.1918 },
    { nome: "Arquepelogo", lat: -30.0333, lng: -51.2833 },
    { nome: "Auxiliadora", lat: -30.0275, lng: -51.1997 },
    { nome: "Azenha", lat: -30.0425, lng: -51.2186 },
    { nome: "Bela Vista", lat: -30.0278, lng: -51.2028 },
    { nome: "Belém Novo", lat: -30.2100, lng: -51.1833 },
    { nome: "Belém Velho", lat: -30.1900, lng: -51.1833 },
    { nome: "Boa Vista", lat: -30.0270, lng: -51.1900 },
    { nome: "Bom Jesus", lat: -30.0150, lng: -51.1500 },
    { nome: "Bom Fim", lat: -30.0330, lng: -51.2200 },
    { nome: "Camaquã", lat: -30.1000, lng: -51.2500 },
    { nome: "Campo Novo", lat: -30.1200, lng: -51.1800 },
    { nome: "Cascata", lat: -30.0900, lng: -51.2300 },
    { nome: "Cavalhada", lat: -30.0800, lng: -51.2300 },
    { nome: "Centro", lat: -30.0300, lng: -51.2300 },
    { nome: "Chácara das Pedras", lat: -30.0200, lng: -51.1800 },
    { nome: "Cidade Baixa", lat: -30.0400, lng: -51.2225 },
    { nome: "Cristal", lat: -30.0600, lng: -51.2500 },
    { nome: "Farrapos", lat: -30.0100, lng: -51.2100 },
    { nome: "Floresta", lat: -30.0200, lng: -51.2100 },
    { nome: "Guarujá", lat: -30.1500, lng: -51.2500 },
    { nome: "Higienópolis", lat: -30.0100, lng: -51.1900 },
    { nome: "Hipica", lat: -30.1600, lng: -51.2100 },
    { nome: "Humaitá", lat: -30.0100, lng: -51.2200 },
    { nome: "Independência", lat: -30.0300, lng: -51.2100 },
    { nome: "Ipanema", lat: -30.1300, lng: -51.2500 },
    { nome: "Jardim Botânico", lat: -30.0500, lng: -51.2100 },
    { nome: "Jardim Leopoldina", lat: -30.0200, lng: -51.1700 },
    { nome: "Jardim Isabel", lat: -30.1400, lng: -51.2500 },
    { nome: "Lami", lat: -30.2300, lng: -51.2800 },
    { nome: "Medianeira", lat: -30.0500, lng: -51.2200 },
    { nome: "Menino Deus", lat: -30.0400, lng: -51.2200 },
    { nome: "Moinhos de Vento", lat: -30.0300, lng: -51.2100 },
    { nome: "Parque Santa Fé", lat: -30.0100, lng: -51.1500 },
    { nome: "Partenon", lat: -30.0500, lng: -51.2100 },
    { nome: "Passo D Areia", lat: -30.0200, lng: -51.1900 },
    { nome: "Petropolis", lat: -30.0300, lng: -51.2100 },
    { nome: "Ponto Grossa", lat: -30.1700, lng: -51.2500 },
    { nome: "Praia de Belas", lat: -30.0500, lng: -51.2300 },
    { nome: "Restinga", lat: -30.1500, lng: -51.2500 },
    { nome: "Rio Branco", lat: -30.0200, lng: -51.2100 },
    { nome: "Rubem Berta", lat: -30.0100, lng: -51.1900 },
    { nome: "Santa Tereza", lat: -30.0500, lng: -51.2200 },
    { nome: "Santana", lat: -30.0400, lng: -51.2200 },
    { nome: "São Caetano", lat: -30.0300, lng: -51.2100 },
    { nome: "Sarandi", lat: -30.0100, lng: -51.1900 },
    { nome: "Serraria", lat: -30.1500, lng: -51.2500 },
    { nome: "Sétimo Céu", lat: -30.1600, lng: -51.2100 },
    { nome: "Teresópolis", lat: -30.0500, lng: -51.2200 },
    { nome: "Três Figueiras", lat: -30.0300, lng: -51.2100 },
    { nome: "Tristeza", lat: -30.1400, lng: -51.2500 },
    { nome: "Vila Assunção", lat: -30.1500, lng: -51.2500 },
    { nome: "Vila Ipiranga", lat: -30.0200, lng: -51.1900 },
    { nome: "Vila Jardim", lat: -30.0300, lng: -51.2100 },
    { nome: "Vila Nova", lat: -30.1500, lng: -51.2500 },
  ];

  // Array só de nomes para sugestões
  const nomesBairros = bairros.map(b => b.nome);

  // -------- FUNÇÃO DE SUGESTÕES --------
  function showSuggestions() {
    const value = input.value.trim().toLowerCase();

    if (!value) {
      suggestions.style.display = "none";
      suggestions.innerHTML = "";
      return;
    }

    const filtered = nomesBairros.filter(item =>
      item.toLowerCase().includes(value)
    );

    if (filtered.length === 0) {
      suggestions.style.display = "none";
      suggestions.innerHTML = "";
      return;
    }

    suggestions.innerHTML = filtered.map(item => `<li>${item}</li>`).join("");
    suggestions.style.display = "block";

    // Escolher um item
    suggestions.querySelectorAll("li").forEach(li => {
      li.addEventListener("click", () => {
        input.value = li.textContent;
        suggestions.style.display = "none";
      });
    });
  }

  // DIGITAR
  input.addEventListener("input", showSuggestions);

  // CLIQUE NA LUPA → move círculo e centraliza mapa
  searchButton.addEventListener("click", () => {
    const bairroDigitado = input.value.trim();
    const bairro = bairros.find(b => b.nome.toLowerCase() === bairroDigitado.toLowerCase());

    if (bairro) {
      const coords = [bairro.lat, bairro.lng];

      circle.setLatLng(coords);
      marker.setLatLng(coords);
      map.setView(coords, 16);

      marker.bindPopup(`Bairro: ${bairro.nome}`).openPopup();
    } else {
      alert("Bairro não encontrado!");
    }
  });

  // Impede blur ao clicar na lupa
  searchButton.addEventListener("mousedown", (e) => e.preventDefault());

  // ENTER
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      searchButton.click();
    }
  });

  // FECHAR AO CLICAR FORA
  document.addEventListener("click", (e) => {
    if (
      e.target !== input &&
      !suggestions.contains(e.target) &&
      e.target !== searchButton
    ) {
      suggestions.style.display = "none";
    }
  });

});