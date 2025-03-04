/*options pour fetch*/
var requestOptions = {
  method: "GET",
  redirect: "follow",
};

/*Partie get pollution air around user*/
function getPollutionAroundMe(data) {
  $("#content__card_pollution").html(`
            <div class="card__anaratanana">
            <span class="ville">${data.city}</span>
            <span class="pays">${data.state}, ${data.country}</span>
            </div>

            <div class="card__taux_pollution">
            <div class="face__expression">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="68"
                height="68"
                viewBox="0 0 48 48"
                >
                <g fill="none" fill-rule="evenodd">
                    <path d="M0 48L48 48 48 0 0 0z" />
                    <g fill="#8C6C1D">
                    <path
                        d="M17.08 29.835c.465 0 .944-.073 1.463-.223.234-.067.368-.312.301-.545-.032-.114-.108-.208-.212-.265-.1-.056-.219-.068-.33-.035-.88.253-1.565.253-2.444 0-.11-.034-.228-.021-.332.036-.105.057-.18.151-.213.265-.067.232.068.477.302.544.519.15.998.223 1.464.223"
                        transform="translate(6.947 1.263)"
                    />
                    <path
                        d="M33.228 23.199c-.254-.181-.563-.271-.882-.256.368-1.782.624-3.56.762-5.289.383-4.808-.867-8.922-3.617-11.896C26.559 2.586 22.025.767 17.053.767c-1.247 0-2.362.122-2.998.239-.282-.148-.516-.283-.733-.425L13.27.546c-.113-.074-.268-.044-.346.07l-.334.49c-.039.056-.054.126-.039.192.013.067.053.126.11.162l.052.034c.862.566 1.803.991 2.58 1.166.858.194 1.282.606 1.459.835l.033.042c.075.095.2.122.314.068l.532-.278c.064-.034.11-.094.127-.164s.003-.145-.04-.206l-.042-.059c-.15-.209-.564-.698-1.353-1.046.274-.011.555-.019.73-.019 4.68 0 8.927 1.694 11.654 4.648 2.579 2.794 3.701 6.524 3.337 11.088-.157 1.966-.475 4.01-.944 6.081l-.05.271c-.018.092.006.186.066.258.059.072.15.115.243.115h.361c.07 0 .135-.023.193-.067l.057-.044c.22-.168.493-.218.641-.113.315.222.313 1.023-.004 1.992l-.363 1.114c-.187.578-.38 1.176-.62 1.886-.358 1.064-1 1.786-1.731 1.959l.014-.035.021-.049c.041-.094.082-.19.123-.29.029-.077.027-.164-.005-.24-.033-.075-.096-.137-.174-.168l-.41-.16c-.16-.06-.342.02-.405.176-1.77 4.445-3.984 7.807-6.97 10.58-1.61 1.496-3.177 1.803-5.035 1.803s-3.425-.307-5.036-1.804c-2.985-2.772-5.198-6.134-6.97-10.578-.063-.161-.243-.238-.406-.177l-.409.16c-.077.031-.14.093-.173.168-.032.076-.033.163-.003.242.045.115.093.224.14.333l.016.035c-.74-.174-1.367-.882-1.73-1.956-.24-.706-.432-1.303-.618-1.88l-.364-1.12c-.318-.969-.32-1.77-.005-1.992.152-.107.417-.056.664.13l.067.044c.058.035.122.051.189.047.154-.011.575-.057.615-.067.368-.092.729-.41.989-.873.413-.734.708-1.8 1.05-3.033.68-2.47 1.53-5.543 3.728-6.93 2.467-1.555 4.598-1.28 7.064-.961 2.378.306 5.071.653 8.572-.566l.03.02c.266 1.903 1.466 4.403 4.046 5.747.216.108.48.025.592-.187.055-.104.065-.223.03-.336-.035-.112-.112-.203-.217-.257-2.373-1.237-3.417-3.535-3.602-5.273-.014-.132-.09-.253-.202-.325l-.386-.246c-.116-.073-.256-.09-.385-.042-3.406 1.234-6.047.893-8.377.591-2.521-.322-4.904-.628-7.635 1.092-2.484 1.567-3.384 4.822-4.11 7.45-.324 1.172-.604 2.185-.964 2.824-.121.216-.242.33-.322.39-.429-1.955-.721-3.885-.869-5.739-.74-9.28 4.832-13.022 8.22-14.426l.019-.008c.414.18.802.312 1.154.39.857.194 1.28.606 1.458.836l.032.04c.072.095.203.123.315.07l.53-.278c.065-.033.111-.093.129-.164.018-.071.004-.147-.04-.207l-.042-.058c-.213-.297-.847-1.019-2.14-1.311-.65-.146-1.458-.513-2.214-1.007l-.05-.033c-.113-.077-.269-.047-.349.068l-.333.49c-.038.056-.054.125-.04.193.013.066.053.125.11.163l.053.033c.078.05.159.1.238.147C3.4 5.218.446 10.732.998 17.655c.137 1.714.392 3.492.761 5.288-.32-.017-.629.076-.881.255-.437.309-1.07 1.135-.393 3.195L.82 27.42c.22.684.408 1.265.65 1.983.679 2.01 2.043 2.727 3.093 2.727.04 0 .077-.003.12-.007 1.733 3.899 3.833 6.917 6.608 9.494 1.975 1.836 3.936 2.09 5.762 2.09 1.826 0 3.788-.254 5.763-2.09 2.775-2.578 4.876-5.596 6.609-9.494.04.004.08.007.119.007 1.05 0 2.415-.717 3.093-2.728.263-.779.474-1.431.651-1.982l.332-1.024c.677-2.062.045-2.888-.391-3.196"
                        transform="translate(6.947 1.263)"
                    />
                    <path
                        d="M18.526 37.204v-.15c.074-.08.114-.182.114-.29 0-.108-.04-.21-.114-.29v-.151h-2.94v.144c-.079.082-.122.186-.122.297 0 .11.043.215.121.296v.144h2.941zM21.137 34.643c0-.242-.197-.44-.439-.44h-7.29c-.243 0-.44.198-.44.44 0 .243.197.44.44.44h7.29c.242 0 .439-.197.439-.44M25.18 20.459c0-.243-.197-.44-.438-.44h-4.396c-.243 0-.44.197-.44.44 0 .242.197.44.44.44h4.396c.241 0 .438-.198.438-.44M22.543 24.377c.881 0 1.599-.447 1.599-.997s-.718-.998-1.6-.998c-.88 0-1.597.447-1.597.998 0 .56.701.997 1.598.997M14.178 20.459c0-.243-.197-.44-.44-.44H9.344c-.242 0-.44.197-.44.44 0 .242.198.44.44.44h4.396c.242 0 .439-.198.439-.44M11.54 24.377c.882 0 1.6-.447 1.6-.997s-.718-.998-1.6-.998c-.881 0-1.597.447-1.597.998 0 .56.7.997 1.597.997"
                        transform="translate(6.947 1.263)"
                    />
                    </g>
                </g>
                </svg>
            </div>
            <div class="card__pourcentage">
                <span class="pourcentage__span" style="font-weight: 600">
                ${data.current.pollution.aqius}
                </span>
                <span class="unite__span">US AQI</span>
            </div>
            <div class="card__appreciation">
                <span class="appreciation__span" style="font-weight: bolder"
                >${
                  data.current.pollution.aqius > 30 ? "Moderate" : "Good"
                } </span
                >
                <span
                class="taux__span"
                style="
                    font-size: 12px;
                    background-color: white;
                    padding: 3px;
                    border-radius: 5px;
                "
                >PM2.5|16ug/m</span
                >
            </div>
            </div>

            <div class="card__last_result">
            <h5>Last day :</h5>
            <div class="all__last_results">
                <div class="one__last_result">
                <h4>Samedi</h4>
                <span class="taux__last_day">24</span>
                </div>

                <div class="one__last_result">
                <h4>Vendredi</h4>
                <span class="taux__last_day">32</span>
                </div>

                <div class="one__last_result">
                <h4>Jeudi</h4>
                <span class="taux__last_day">44</span>
                </div>
            </div>
            </div>
            <div class="card__boutton">
            <button onclick="reloadGetPollution();">Reload</button>
            </div>
      `);
}

/*pour reloader les données*/
function reloadGetPollution() {
  $("#content__card_pollution").html(`
    <h5 id="air_quality_button" 
        onclick="getPollution();"
        style="cursor: pointer">
        Qualité de l'air autour de moi
    </h5>`);
}

/*get position user*/
function getPollution() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getPollutionAroundThisPosition);
  } else {
    console.log("Veuillez accepter de trouver votre position!");
  }
}

/*fonction pour fetcher les données de pollution de l'air en ce moment à la position de l'user*/
async function getPollutionAroundThisPosition(position) {
  let { latitude, longitude } = position.coords;
  $("#content__card_pollution").html(
    "<div class='loader' style='margin: auto;'></div>"
  );
  await fetch(
    `https://api.airvisual.com/v2/nearest_city?lat=${latitude}&lon=${longitude}&key=267af3ba-fc10-4cb6-a507-4f1b6e4dc982`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => getPollutionAroundMe(result.data))
    .catch((error) => console.log("error", error));
}

//267af3ba-fc10-4cb6-a507-4f1b6e4dc982

let locations = [
  ["-18.929485851354126", "47.51947183691344", "Tsimbazaza"],
  ["-18.897145710348955", "47.570543880638006", "Ambatomaro"],
  ["-18.849553089010545", "47.478361724939326", "Andranomena"],
  ["-18.86839683469433", "47.54290639808143", "Ambohijatovo"],
];

function initMap() {
  var center = { lat: -18.8547072, lng: 47.4873856 };
  var map = new google.maps.Map(document.getElementById("div__map"), {
    zoom: 2,
    center: center,
    mapTypeId: "satellite",
  });
  var marker = new google.maps.Marker({
    position: center,
    map: map,
  });

  var infowindow = new google.maps.InfoWindow({});
  var marker, count;
  for (count = 0; count < locations.length; count++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(
        locations[count][0],
        locations[count][1]
      ),
      map: map,
      title: locations[count][0],
    });
    google.maps.event.addListener(
      marker,
      "click",
      (function (marker, count) {
        return function () {
          infowindow.setContent(locations[count][2]);
          infowindow.open(map, marker);
        };
      })(marker, count)
    );
  }
}

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Dechets", "taux"],
    ["Plastiques", 54.8],
    ["Sachets", 48.6],
    ["Déchets industriels", 44.4],
    ["Déchets organiques", 23.9],
    ["Métaux", 14.5],
  ]);

  var options = {
    title: "Statistique des déchets reciclés en ce moment :",
    is3D: true,
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("myChart")
  );
  chart.draw(data, options);
}
