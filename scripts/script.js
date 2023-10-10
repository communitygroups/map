var osm = L.tileLayer("http://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '<a target="_blank" href=http://www.geocadder.bg/en>GEOCADDER</a> |' +
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
});
var esriWorldImagery = L.tileLayer(
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
  {
    maxZoom: 17,
    attribution:
      '<a target="_blank" href=http://www.geocadder.bg/en>GEOCADDER</a> | ' +
      "Tiles &copy; Esri",
  }
);
var mapboxMap = L.tileLayer( 
  "https://api.mapbox.com/styles/v1/salcgmap/clnk6465n000401qq0f5790vh/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2FsY2dtYXAiLCJhIjoiY2xuaXBndjhqMTB2czJqbWlmbWFxYmYzNyJ9.U1RjmfzFY_kvCrrLFbCWKw", 
  { 
    attribution: 
      '<a target="_blank" href=http://www.geocadder.bg>GEOCADDER</a> | ' + 
      ' Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' + 
      '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' + 
      'Imagery Вy © <a href="https://www.mapbox.com/">Mapbox</a>', 
    tileSize: 512, 
    zoomOffset: -1, 
  } 
)

var map = L.map("map", {
  layers: [mapboxMap],
  center: [25.21967898039161, 55.36724330785969],
  zoom: 11,
});

var bounds;

var baseLayers = {
  "Mapbox Light": mapboxMap,
  "Open Street Maps": osm,
  "ESRI Imagery": esriWorldImagery,
};

L.control.layers(baseLayers).addTo(map);

var isInfoContainerOpen = true;

var isSidebarOpen = true;
var windowheight = $(window).height();
var windowWidth = $(window).width();

// adding custom button for toggling the legend
L.easyButton('<img src="images/list-icon.png">', function (btn, map) {
  console.log("desi");
  if (isSidebarOpen == true) {
    isSidebarOpen = false;
    if (windowWidth > 630) {
      $("#map").css("width", "100%");
      $("#map").css("left", "0");
      $("#sidebar").css("display", "none");
    } else {
      $("#map").css("height", "100%");
      $("#sidebar").css("display", "none");
    }
  } else {
    isSidebarOpen = true;
    if (windowWidth > 630) {
      console.log("3");
      $("#map").css("width", "80%");
      $("#map").css("left", "20%");
      $("#sidebar").css("display", "block");
    } else {
      console.log("4");
      $("#map").css("height", "75%");
      $("#sidebar").css("display", "block");
    }
  }
})
  .setPosition("topright")
  .addTo(map);
// end adding custom button for toggling the legend

var marker;
var markersArray = [];

// $(
//   "#map > div.leaflet-control-container > div.leaflet-top.leaflet-right > div.leaflet-bar.easy-button-container.leaflet-control > button"
// ).click(function () {
//   if (isSidebarOpen == true) {
//     isSidebarOpen = false;
//     if (windowWidth > 630){
//       $("#map").css("width", "80%");
//     } else {
//       $("#map").css("height", "75%")
//     }
//   } else {
//     isSidebarOpen = true;
//     if (windowWidth > 630){
//       $("#map").css("width", "100%")
//     } else {
//       $("#map").css("height", "100%")
//     }
//   }
// });

map.on("click", function (e) {
  $("#infoContainer").css("display", "none");
  isInfoContainerOpen = false;
});

var images = [];
function update_position_images() {
  $.getJSON(
    "https://sheets.googleapis.com/v4/spreadsheets/1AykyLBLDFlILoxjTyPDr_PMjCUot9hrLV8nMfoZ_oa0/values/Sheet1!A3:W3000?majorDimension=ROWS&key=AIzaSyCkSS3c2xDpR_hlkgN0kYx4VT4Jn09Zs6Y",
    function (response) {
      response.values.forEach(drawMarker);

      function drawMarker(element) {
        if (element[8]) {
          var img = new Image(); 
          img.onload = function () {
          };
          img.src = element[8]; 
          images.push(element[8]);
        }
        if (element[12]) {
          var img = new Image(); 
          img.onload = function () {
          };
          img.src = element[12]; 
          images.push(element[12]);
        }
        if (element[15]) {
          var img = new Image(); 
          img.onload = function () {
          };
          img.src = element[15]; 
          images.push(element[15]);
        }
        if (element[18]) {
          var img = new Image(); 
          img.onload = function () {
          };
          img.src = element[18]; 
          images.push(element[18]);
        }
        if (element[21]) {
          var img = new Image(); 
          img.onload = function () {
          };
          img.src = element[21]; 
          images.push(element[21]);
        }
      }
    }
  );
}
update_position_images();

function update_position() {
  $.getJSON(
    "https://sheets.googleapis.com/v4/spreadsheets/1AykyLBLDFlILoxjTyPDr_PMjCUot9hrLV8nMfoZ_oa0/values/Sheet1!A3:W3000?majorDimension=ROWS&key=AIzaSyCkSS3c2xDpR_hlkgN0kYx4VT4Jn09Zs6Y",
    function (response) {
      buildLocationList(response.values);
      response.values.forEach(drawMarker);

      function drawMarker(element) {
        var id = element[0];
        var id = element[0];
        var area = element[1];
        var location = element[2];
        var day = element[5];
        var time = element[6];

        var leaderName = element[7];
        var leaderEmail = element[9];
        var leaderWhatsApp = element[10];

        var coleaderOneName = element[11];
        var coleaderOnePhoto = element[12];
        var coleaderOneWhatsApp = element[13];

        var coleaderTwoName = element[14];
        var coleaderTwoPhoto = element[15];
        var coleaderTwoWhatsApp = element[16];

        var coleaderThreeName = element[17];
        var coleaderThreePhoto = element[18];
        var coleaderThreeWhatsApp = element[19];

        var coleaderFourName = element[20];
        var coleaderFourPhoto = element[21];
        var coleaderFourWhatsApp = element[22];

        var longitude = element[4];
        var latitude = element[3];

        var image = element[8];

        var popupText = '<div class="popup-wrapper">';

        popupText += '<div class="name-wrapper">' + area + "</div>";

        popupText += '<div class="details-top-wrapper">';

        if (location) {
          popupText +=
            "<p class='details'><i class='fa fa-map-marker '></i><span>" +
            location +
            "</span></p>";
        }

        if (day) {
          popupText +=
            "<p class='details'><i class='fa fa-calendar '></i><span>" +
            day +
            "</span></p>";
        }

        if (time) {
          popupText +=
            "<p class='details'><i class='fa fa-clock-o '></i><span>" +
            time +
            "</span></p>";
        }

        popupText += '</div><div class="leader-details-wrapper">';

        popupText += '<p id="leader-text">Leader</p>';

        // var img = new Image(); // Create new img element
        // img.onload = function () {
        //   popupText +=
        //   '<div class="image-preview-wrapper"><img class="image-preview" src = "' +
        //   image +
        //   '"></div>';
        // };
        // img.src = image; // Set source path

        popupText +=
          '<div class="image-preview-wrapper"><img class="image-preview" src = "' +
          image +
          '"></div>';

        popupText += '<div class="leader-text-preview-wrapper">';

        popupText +=
          "<p class='details'><i class='fa fa-user '></i><span>" +
          leaderName +
          "</span></p>";

        popupText +=
          '<p class="details"><a target="_blank" href="mailto:' +
          leaderEmail +
          '"><i class="fa fa-envelope-o"></i><span> Email</span></a></p>';

        popupText +=
          '<p class="details"><a target="_blank" href="https://wa.me/+' +
          leaderWhatsApp +
          '"><i class="fa fa-whatsapp"></i><span> ' +
          leaderWhatsApp +
          "</span></a></p>";

        popupText += "</div></div>";

        if (coleaderOneName)
          popupText += '<p id="coleaders-text">Coleaders</p>';

        popupText += '<div class="coleaders-wrapper">';

        // Coleader 1
        if (coleaderOneName) {
          popupText += '<div class="coleaders-details-wrapper">';

          popupText +=
            '<div class="image-preview-wrapper"><img class="image-preview" src = "' +
            coleaderOnePhoto +
            '"></div>';

          popupText += '<div class="coleaders-text-preview-wrapper">';

          popupText +=
            "<p class='details'><i class='fa fa-user '></i><span>" +
            coleaderOneName +
            "</span></p>";

          popupText +=
            '<p class="details"><a target="_blank" href="https://wa.me/+' +
            coleaderOneWhatsApp +
            '"><i class="fa fa-whatsapp"></i><span> ' +
            coleaderOneWhatsApp +
            "</span></a></p>";

          popupText += "</div>";

          popupText += "</div>";
        }

        // Coleader 2
        if (coleaderTwoName) {
          popupText += '<div class="coleaders-details-wrapper">';

          popupText +=
            '<div class="image-preview-wrapper"><img class="image-preview" src = "' +
            coleaderTwoPhoto +
            '"></div>';

          popupText += '<div class="coleaders-text-preview-wrapper">';

          popupText +=
            "<p class='details'><i class='fa fa-user '></i><span>" +
            coleaderTwoName +
            "</span></p>";

          popupText +=
            '<p class="details"><a target="_blank" href="https://wa.me/+' +
            coleaderTwoWhatsApp +
            '"><i class="fa fa-whatsapp"></i><span> ' +
            coleaderTwoWhatsApp +
            "</span></a></p>";

          popupText += "</div>";

          popupText += "</div>";
        }

        // Coleader 3
        if (coleaderThreeName) {
          popupText += '<div class="coleaders-details-wrapper">';

          popupText +=
            '<div class="image-preview-wrapper"><img class="image-preview" src = "' +
            coleaderThreePhoto +
            '"></div>';

          popupText += '<div class="coleaders-text-preview-wrapper">';

          popupText +=
            "<p class='details'><i class='fa fa-user '></i><span>" +
            coleaderThreeName +
            "</span></p>";

          popupText +=
            '<p class="details"><a target="_blank" href="https://wa.me/+' +
            coleaderThreeWhatsApp +
            '"><i class="fa fa-whatsapp"></i><span> ' +
            coleaderThreeWhatsApp +
            "</span></a></p>";

          popupText += "</div>";

          popupText += "</div>";
        }

        // Coleader 4
        if (coleaderFourName) {
          popupText += '<div class="coleaders-details-wrapper">';

          popupText +=
            '<div class="image-preview-wrapper"><img class="image-preview" src = "' +
            coleaderFourPhoto +
            '"></div>';

          popupText += '<div class="coleaders-text-preview-wrapper">';

          popupText +=
            "<p class='details'><i class='fa fa-user '></i><span>" +
            coleaderFourName +
            "</span></p>";

          popupText +=
            '<p class="details"><a target="_blank" href="https://wa.me/+' +
            coleaderFourWhatsApp +
            '"><i class="fa fa-whatsapp"></i><span> ' +
            coleaderFourWhatsApp +
            "</span></a></p>";

          popupText += "</div>";

          popupText += "</div>";
        }

        popupText += "</div>";

        popupText += "</div></div>";

        var markerCustomIcon = L.icon({
          iconUrl: "images/community-group-public-bolder-7.png",
          iconSize: [32, 32],
          popupAnchor: [-3, -25],
        });
        $(markerCustomIcon).attr("id", id);

        marker = L.marker([latitude, longitude], {
          customId: id,
          icon: markerCustomIcon,
        });
        $(marker).attr("id", id);

        marker.on("click", function () {
          $("#infoContainer").css("display", "none");
          isInfoContainerOpen = false;
        });

        var popup = L.popup().setContent(popupText);
        marker.bindPopup(popup).openPopup();
        marker.addTo(map);

        markersArray.push(marker);

        // var linkElement = document.getElementById("listing-" + id);
        // linkElement.addEventListener("click", function (e) {
        //   map.flyTo([latitude, longitude], 16, {
        //     animate: true,
        //     duration: 1.5
        //   });
        // });
      }
      $(".item").click(function (event) {
        $("#infoContainer").css("display", "none");
        isInfoContainerOpen = false;

        var clickedListingItemid = $(event.target).attr("id");

        for (i = 0; i < markersArray.length; i++) {
          if (markersArray[i]["id"] === clickedListingItemid) {
            map.flyTo(
              [
                markersArray[i]["_latlng"]["lat"] + 0.02,
                markersArray[i]["_latlng"]["lng"],
              ],
              11,
              {
                animate: true,
                duration: 1.5,
              }
            );
            markersArray[i].openPopup();
            // markersArray[i].fire('click');
          }
        }
      });

      // map.fitBounds(markersArray.getBounds());
    }
  );
}

update_position();

function buildLocationList(data) {
  for (i = 0; i < data.length; i++) {
    var listings = document.getElementById("listings");
    var listing = listings.appendChild(document.createElement("div"));
    listing.className = "item";
    listing.id = "listing-" + data[i][0];

    var link = listing.appendChild(document.createElement("a"));
    link.href = "#";
    link.className = "title";
    link.id = data[i][0];
    link.dataPosition = i;
    link.innerHTML = data[i][1];
  }
}
