let map = L.map('map').setView([-30.0243475, -51.2082336], 16);
 
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
 
// map.locate({setView: true, maxZoom: 16});
 
 
// let marker = L.marker([-30.0243475, -51.2082336]).addTo(map);
 
// let circle = L.circle([-30.0243475, -51.2082336], {
//     color: 'blue',
//     fillColor: '#0d4ae5ff',
//     fillOpacity: 0.5,
//     radius: 500
// }).addTo(map);

// let polygon = L.polygon([
//    [-30.0243475, -51.2082336],
//    [-30.0243475, -51.2082336],
//      [-30.0243475, -51.2082336]
// ]).addTo(map);

// =======================================

// let map = L.map('map').setView([-30.0243475, -51.2082336], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// =======================================
// REMOVIDO: círculo azul fixo que aparecia sempre
// REMOVIDO: polygon
// =======================================

let marker = L.marker([-30.0243475, -51.2082336]).addTo(map);

// CAMADA QUE VAI GUARDAR OS CÍRCULOS DINAMICAMENTE
const outageLayer = L.layerGroup().addTo(map);

// FUNÇÃO PRINCIPAL: CRIA CÍRCULO DEPENDENDO DO STATUS
function createOutageCircle(lat, lng, agua, luz) {
    outageLayer.clearLayers(); // remove círculos anteriores

    // Verde = água e luz faltando
    if (agua && luz) {
        L.circle([lat, lng], {
            color: 'green',
            fillColor: '#19e619ff',
            fillOpacity: 0.4,
            radius: 600
        })
        .bindPopup("Esta área está sem água e sem luz")
        .addTo(outageLayer);
        return;
    }

    // Azul = sem água
    if (agua) {
        L.circle([lat, lng], {
            color: 'blue',
            fillColor: '#1c1cdeff',
            fillOpacity: 0.4,
            radius: 600
        })
        .bindPopup("Esta área está sem água")
        .addTo(outageLayer);
        return;
    }

    // Amarelo = sem luz
    if (luz) {
        L.circle([lat, lng], {
            color: 'orange',
            fillColor: '#ffea00ff',
            fillOpacity: 0.4,
            radius: 600
        })
        .bindPopup("Esta área está sem luz")
        .addTo(outageLayer);
        return;
    }

    // Nenhum problema → nenhum círculo
}

// =======================================
// STATUS DOS BAIRROS
// TRUE = falta | FALSE = normal
// Você pode editar isso à vontade:
// =======================================

const status = {
  "Aberta dos Morros": { agua: false, luz: false },
  "Agronomia": { agua: false, luz: false },
  "Anchieta": { agua: false, luz: false },
  "Arquepelogo": { agua: false, luz: false },
  "Auxiliadora": { agua: false, luz: false },
  "Azenha": { agua: false, luz: true },
  "Bela Vista": { agua: false, luz: false },
  "Belém Novo": { agua: true, luz: false },
  "Belém Velho": { agua: false, luz: false },
  "Boa Vista": { agua: false, luz: false },
  "Bom Jesus": { agua: false, luz: false },
  "Bom Fim": { agua: false, luz: false },
  "Camaquã": { agua: false, luz: false },
  "Campo Novo": { agua: false, luz: false },
  "Cascata": { agua: false, luz: false },
  "Cavalhada": { agua: true, luz: true },
  "Centro": { agua: false, luz: false },
  "Chácara das Pedras": { agua: false, luz: false },
  "Cidade Baixa": { agua: false, luz: false },
  "Cristal": { agua: true, luz: true },
  "Farrapos": { agua: false, luz: false },
  "Farroupilha": { agua: false, luz: false },
  "Floresta": { agua: false, luz: false },
  "Guarujá": { agua: false, luz: false },
  "Higienópolis": { agua: false, luz: true },
  "Hipica": { agua: false, luz: false },
  "Humaitá": { agua: true, luz: true },
  "Independência": { agua: false, luz: false },
  "Ipanema": { agua: false, luz: false },
  "Jardim Botânico": { agua: false, luz: false },
  "Jardim Leopoldina": { agua: false, luz: false },
  "Jardim Lindoia": { agua: false, luz: false },
  "Lami": { agua: false, luz: false },
  "Lomba do Pinheiro": { agua: false, luz: false },
  "Medianeira": { agua: false, luz: false },
  "Menino Deus": { agua: false, luz: false },
  "Moinhos de Vento": { agua: false, luz: false },
  "Parque Santa Fé": { agua: false, luz: false },
  "Partenon": { agua: false, luz: false },
  "Passo D Areia": { agua: false, luz: false },
  "Petropolis": { agua: false, luz: false },
  "Ponto Grossa": { agua: false, luz: false },
  "Praia de Belas": { agua: false, luz: false },
  "Restinga": { agua: false, luz: false },
  "Rio Branco": { agua: false, luz: false },
  "Rubem Berta": { agua: false, luz: false },
  "Santa Tereza": { agua: true, luz: true },
  "Santana": { agua: false, luz: false },
  "São Caetano": { agua: false, luz: false },
  "Sarandi": { agua: false, luz: false },
  "Serraria": { agua: false, luz: false },
  "Sétimo Céu": { agua: false, luz: true },
  "Teresópolis": { agua: false, luz: false },
  "Três Figueiras": { agua: false, luz: false },
  "Tristeza": { agua: false, luz: false },
  "Vila Assunção": { agua: false, luz: false },
  "Vila Ipiranga": { agua: true, luz: true },
  "Vila Jardim": { agua: false, luz: false },
  "Vila Nova": { agua: true, luz: false }
};


// =======================================
// EVENTO DE POPUP NO MARCADOR INICIAL
// =======================================

marker.bindPopup("<b>Sua localização!</b><br>Você está aqui!");

// =======================================
// RESTO DO SEU CÓDIGO — INALTERADO
// =======================================

function onMapClick(e) {
    alert("Você clicou no mapa: " + e.latlng);
}
map.on('click', onMapClick);

// =======================================
// SISTEMA DE BUSCA
// =======================================

document.addEventListener("DOMContentLoaded", () => {

  const input = document.getElementById("search-input");
  const suggestions = document.getElementById("suggestions");
  const searchButton = document.getElementById("search-button");

  searchButton.type = "button";

  const bairros = [
    { nome: "Aberta dos Morros", lat:  -30.161011186607134, lng: -51.19898661579821 },
    { nome: "Agronomia", lat: -30.071711578499716, lng: -51.139988852665525 },
    { nome: "Anchieta", lat: -29.99575931067296, lng: -51.1675155361778 },
    { nome: "Arquepelogo", lat: -29.97133484154548, lng:  -51.268227039028154 },
    { nome: "Auxiliadora", lat: -30.020988226023476,  lng:  -51.191382080257156 },
    { nome: "Azenha",  },
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
    {nome:"Farroupilha", lat: -30.036681461320956, lng:-51.21554030175293},
    { nome: "Floresta", lat: -30.019589101106508, lng: -51.21133333261758 },
    { nome: "Guarujá", lat: -30.157338522688367, lng: -51.21735694644776},
    { nome: "Higienópolis", lat: -30.01528061315723,  lng: -51.18454424363409 },
    { nome: "Hipica", lat: -30.155748226198494, lng:  -51.17971970212202 },
    { nome: "Humaitá", lat: -29.983218623413215, lng: -51.1893332527179 },
    { nome: "Independência", lat: -30.02920997542491, lng: -51.21450420353044 },
    { nome: "Ipanema", lat: -30.134951551207738, lng: -51.22331294976427 },
    { nome: "Jardim Botânico", lat: -30.051848044293845, lng: -51.18255263119411 },
    { nome: "Jardim Leopoldina", lat: -30.019941853462853,  lng: -51.11500099950342 },
    { nome: "Jardim Leopoldina", lat: -30.019941853462853,  lng: -51.11500099950342 },
    { nome: "Jardim Lindoia", lat: -30.007591120222326,  lng: -51.15167876616331 },
    { nome: "Lami", lat: -30.23062200191629, lng: -51.088071431022236},
    { nome: "Lomba do Pinheiro", lat: -30.11666873264922, lng: -51.12576154936868},
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
    { nome: "Tristeza", lat: -30.11004123915776, lng:  -51.25216789309641 },
    { nome: "Vila Assunção", lat: -30.100721564728243, lng: -51.25785079800097 },
    { nome: "Vila Ipiranga", lat: -30.021706926126768, lng: -51.15019903059785},
    { nome: "Vila Jardim", lat: -30.03546714265876, lng:  -51.153076297717355 },
    { nome: "Vila Nova", lat: -30.113309167096524, lng: -51.20261831429308 },
  ];

  const nomesBairros = bairros.map(b => b.nome);

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

    suggestions.querySelectorAll("li").forEach(li => {
      li.addEventListener("click", () => {
        input.value = li.textContent;
        suggestions.style.display = "none";
      });
    });
  }

  input.addEventListener("input", showSuggestions);

  // ===============================
  // PROCESSAMENTO AO PESQUISAR BAIRRO
  // ===============================

  searchButton.addEventListener("click", () => {
    const bairroDigitado = input.value.trim();
    const bairro = bairros.find(b => b.nome.toLowerCase() === bairroDigitado.toLowerCase());

    if (bairro) {
      const coords = [bairro.lat, bairro.lng];

      marker.setLatLng(coords);
      map.setView(coords, 16);

      marker.bindPopup(`Bairro: ${bairro.nome}`).openPopup();

      // AQUI A MÁGICA DOS CÍRCULOS:
      const st = status[bairro.nome] || { agua: false, luz: false };
      createOutageCircle(bairro.lat, bairro.lng, st.agua, st.luz);

    } else {
      alert("Bairro não encontrado!");
    }
  });

  searchButton.addEventListener("mousedown", (e) => e.preventDefault());

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      searchButton.click();
    }
  });

  document.addEventListener("click", (e) => {
    if (e.target !== input &&
      !suggestions.contains(e.target) &&
      e.target !== searchButton) {
      suggestions.style.display = "none";
    }
  });

});
