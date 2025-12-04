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
// =======================================
// let polygon = L.polygon([
//    [-30.0243475, -51.2082336],
//    [-30.0243475, -51.2082336],
//      [-30.0243475, -51.2082336]
// ]).addTo(map);

// ========================================
 
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
    { nome: "Aberta dos Morros", lat:  -30.161011186607134, lng: -51.19898661579821 },
    { nome: "Agronomia", lat: -30.071711578499716, lng: -51.139988852665525 },
    { nome: "Anchieta", lat: -29.99575931067296, lng: -51.1675155361778 },
    { nome: "Arquepelogo", lat: -29.97133484154548, lng:  -51.268227039028154 },
    { nome: "Auxiliadora", lat: -30.020988226023476,  lng:  -51.191382080257156 },
    { nome: "Azenha", lat: -30.04895200116273, lng: -51.215828191099355},
    { nome: "Bela Vista", lat: -30.03314409702267, lng: -51.190925113854306},
    { nome: "Belém Novo", lat: -30.208124544073165, lng:  -51.17965664963283},
    { nome: "Belém Velho", lat: -30.115173792222414, lng: -51.174011758131066 },
    { nome: "Boa Vista", lat: -30.024125625039442, lng: -51.17562073781797 },
    { nome: "Bom Jesus", lat: -30.044246748912585, lng:  -51.163756690523996},
    { nome: "Bom Fim", lat: -30.033657706040223, lng: -51.21212709842691 },
    { nome: "Camaquã", lat: -30.10409290293335, lng:  -51.239415239076536 },
    { nome: "Campo Novo", lat: -30.13757213373988, lng: -51.2028783904444 },
    { nome: "Cascata", lat: -30.090023232517098, lng:-51.178899482371584 },
    { nome: "Cavalhada", lat: -30.104412158592254, lng: -51.23034979470506 },
    { nome: "Centro", lat: -30.03089948101912, lng: -51.228882086721086 },
    { nome: "Chácara das Pedras", lat: -30.03493883194321, lng: -51.164671680695875 },
    { nome: "Cidade Baixa", lat: -30.039281073097335, lng: -51.22401792180963 },
    { nome: "Cristal", lat: -30.0903028054091, lng:-51.239146261313635 },
    { nome: "Farrapos", lat: -29.98427107895461, lng: -51.19702341168414},
    { nome: "Floresta", lat: -30.019589101106508, lng: -51.21133333261758 },
    { nome: "Guarujá", lat: -30.157338522688367, lng: -51.21735694644776},
    { nome: "Higienópolis", lat: -30.01528061315723,  lng: -51.18454424363409 },
    { nome: "Hipica", lat: -30.155748226198494, lng:  -51.17971970212202 },
    { nome: "Humaitá", lat: -29.983218623413215, lng: -51.1893332527179 },
    { nome: "Independência", lat: -30.02920997542491, lng: -51.21450420353044 },
    { nome: "Ipanema", lat: -30.134951551207738, lng: -51.22331294976427 },
    { nome: "Jardim Botânico", lat: -30.051848044293845, lng: -51.18255263119411 },
    { nome: "Jardim Leopoldina", lat: -30.019941853462853,  lng: -51.11500099950342 },
    { nome: "Jardim Isabel", lat: -30.126356757426173, lng: -51.23565242333266 },
    { nome: "Lami", lat: -30.23062200191629, lng: -51.088071431022236},
    { nome: "Medianeira", lat: -30.064928420587247, lng: -51.21123848859803 },
    { nome: "Menino Deus", lat: -30.053180379042534, lng: -51.224961237635995 },
    { nome: "Moinhos de Vento", lat: -30.023792961136955, lng: -51.203306558458955 },
    { nome: "Parque Santa Fé", lat: -30.00835342349259, lng: -51.10721709158414},
    { nome: "Partenon", lat: -30.06123012308135, lng: -51.19003091836962 },
    { nome: "Passo D Areia", lat: -30.014045761832694, lng: -51.17057420156518 },
    { nome: "Petropolis", lat: -30.040665305040942,  lng:-51.185453206998154 },
    { nome: "Ponto Grossa", lat: -30.18246501007898, lng: -51.21085933828864 },
    { nome: "Praia de Belas", lat: -30.058235236925274, lng: -51.2329462862429 },
    { nome: "Restinga", lat: -30.1443459580293, lng:-51.148264000534866 },
    { nome: "Rio Branco", lat: -30.03250404202283, lng:  -51.202368319829866},
    { nome: "Rubem Berta", lat: -30.014916707335313, lng: -51.097622522950466 },
    { nome: "Santa Tereza", lat: -30.07427515221638, lng: -51.22669372721926 },
    { nome: "Santana", lat: -51.20748244603205, lng:  -51.20748244603205 },
    { nome: "São Caetano", lat: -30.192695912419957, lng: -51.08881704538958 },
    { nome: "Sarandi", lat: -29.978214336178105, lng: -51.13124241942149 },
    { nome: "Serraria", lat: -30.16782035172626, lng: -51.21934576690573 },
    { nome: "Sétimo Céu", lat: -30.120097678246186, lng: -51.24143721285469 },
    { nome: "Teresópolis", lat:-30.09097025971738, lng: -51.19978369508952 },
    { nome: "Três Figueiras", lat: -30.032719666189113, lng: -51.17342049310451},
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