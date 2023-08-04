html,
body,
#map {
  height: 100%;
  width: 100%;
}

body {
  padding: 0;
  margin: 0;
  font-family: "Comfortaa";
}

.leaflet-bar .easy-button-container .leaflet-control {
  margin-top: 150px;
}

#sidebar {
  position: absolute;
  width: 20%;
  height: 100%;
  top: 0;
  left: 0;
  padding-bottom: 5px;
  overflow: auto;
  border-right: 1px solid rgba(0, 0, 0, 0.25);
}


#map {
  height: 100%;
  position: absolute;
  top: 0;
  left: 20%;
  bottom: 0;
  width: 80%;
}

.heading {
  background: #fff;
  border-bottom: 1px solid #eee;
  min-height: 60px;
  line-height: 60px;
  padding: 0 10px;
  background-color: var(--club-color);
  color: #fff;
}

.heading h1 {
  line-height: 24px;
  color: #000000;
  line-height: 39px;
  font-size: 24px;
}
.listings {
  height: 100%;
  overflow: auto;
  padding-bottom: 105px;
}

.listings .item {
  display: block;
  border-bottom: 1px solid #eee;
  padding: 10px;
  text-decoration: none;

  
}

.listings .item:hover {
  display: block;
  border-bottom: 1px solid #eee;
  padding: 10px;
  text-decoration: none;

  background-color: #AC1F23;
  color: #ffffff;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}


.listings .item:last-child {
  border-bottom: none;
}
.listings .item .title {
  display: block;
  color: var(--club-color);
  font-weight: 700;
  text-decoration: none;
}

.listings .item .title small {
  font-weight: 400;
}
.listings .item.active .title,
.listings .item .title:hover {
  color: var(--club-color);
}
.listings .item.active {
  background-color: #ededed;
  border-top: 1px solid var(--club-color);
  border-bottom: 1px solid var(--club-color);
}
::-webkit-scrollbar {
  width: 3px;
  height: 3px;
  border-left: 0;
  background: rgba(0, 0, 0, 0.1);
}
::-webkit-scrollbar-track {
  background: none;
}
::-webkit-scrollbar-thumb {
  background: var(--club-color);
  border-radius: 0;
}

.marker {
  background-image: url("svg/fountain-icon.svg");
  background-size: cover;
  border: none;
  width: 45px;
  height: 45px;
  border-radius: 8%;
  cursor: pointer;
}

.marker-icon,
.marker-text {
  vertical-align: middle;
  display: inline-block;
  margin-left: 2px;
}

.marker-icon {
  border-color: aquamarine;
  border-width: 120px;
  margin-top: 2px;
}

.marker-text {
  font-size: 20px;
  font-weight: bold;
  margin-right: 8px;
}

.leaflet-container a.leaflet-popup-close-button {
  display: none;
}

.leaflet-popup-content-wrapper {
  /* height: 499px; */
  /* width: 284px; */
  background-color: #ffffff;
  /* padding: 0; */
}

.leaflet-popup-content {
  background-color: #ffffff;
  border-radius: 2px;
  /* box-shadow: 0 3px 14px rgb(0 0 0 / 40%); */
  color: #3b3b3a;
  font-family: "Comfortaa", Arial, sans-serif;
  text-align: left;
}

div.popup-wrapper {
  height: 422px;
  width: 284px;
}

div.leader-details-wrapper {
  top: 146px;
  position: absolute;
  width: 100%;
  left: 15px;
}

p#leader-text{
  text-align: center;
  background-color: #AC1F23;
  color: #ffffff;
  width: 90%;
  margin-top: 0;
  margin-bottom: 3px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}
p#coleaders-text{
  text-align: center;
  background-color: #AC1F23;
  color: #ffffff;
  width: 91%;
  margin-top: 0;
  margin-bottom: 8px;
  top: 263px;
  position: absolute;
  margin-left: -4px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}

div.details-top-wrapper {
  top: 67px;
  position: absolute;
  width: 100%;
  left: 0;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

div.image-preview-wrapper,
div.leader-text-preview-wrapper,
div.coleaders-text-preview-wrapper
 {
  display: inline-block;
}

div.image-preview-wrapper {
  /* width: 29%; */
}

div.leader-text-preview-wrapper {
  vertical-align: text-bottom;
  /* width: 69%; */
}
div.coleaders-text-preview-wrapper {
  vertical-align: bottom;
  /* width: 69%; */
}

div.coleaders-wrapper {
  height: 146px;
  overflow-y: auto;
  top: 287px;
  position: absolute;
  left: 16px;
}

div.coleaders-details-wrapper {
  margin-bottom: 10px;
  position: relative;
  width: 277px;
  /* left: 15px; */
}

div.name-wrapper div.image-preview-wrapper {
  width: 100%;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  position: absolute;
  left: 0;
  height: 150px;
}

div.image-preview-wrapper img.image-preview {
  width: 50px;
  height: 100%;
  position: relative;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  /* left: 13px;*/
}

div.name-wrapper {
  top: 0;
  font-size: 15px;
  position: absolute;
  background-color: #AC1F23;
  color: #ffffff;
  font-weight: 700;
  width: 297px;
  left: 0;
  text-align: center;
  /* height: 64px; */
  padding: 14px;
  /* display: flex; */
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}

div.popup-directions-text,
div.popup-directions-icon {
  margin-left: 213px;
}

div.popup-directions-text {
  font-size: 10px;
}

div.popup-directions-icon {
  height: 50px;
  width: 50px;
  border-radius: 27px;
  background-color: #ffffff;
  box-shadow: 0 1px 6px 0 rgb(0 0 0 / 30%);
}

.material-symbols-outlined.directions-icon {
  color: #AC1F23;
  margin-top: 11px;
  margin-left: 11px;
  font-size: 28px;
}

p.details {
  margin: 6px 0;
  margin-left: 15px;
  font-size: 12px;
  color: #000000;
  font-family: "Comfortaa" !important;
}

p.details > span {
  margin-left: 6px;
}

p.details a {
  color: #000000;
  text-decoration: none;
  font-family: "Comfortaa";
}

p.details a:hover {
  color: #AC1F23;
  text-decoration: none;
}

span.material-symbols-outlined {
  font-size: 12px;
  margin-left: 7px;
  margin-right: 4px;
}

hr.popup-hr {
  width: 95%;
  margin-top: 8px;
  margin-bottom: 8px;
}

p.description {
  margin: 0 12px;
  text-align: justify;
}

div.route-popup-wrapper {
  height: 39px;
  padding: 5px;
  width: 60px;
}

.leaflet-popup-tip {
  background-color: #ffffff;
}

#map
  > div.leaflet-control-container
  > div.leaflet-top.leaflet-left
  > div:nth-child(2) {
  margin-top: 10px;
}

.leaflet-touch .leaflet-control-layers-toggle {
  width: 30px;
  height: 30px;
}

img.leaflet-marker-icon {
  border-radius: 24px;
}

img.cluster-image {
  width: 50px;
  height: 50px;
  border-radius: 30px;
  border: 1px solid #AC1F23;
  margin-bottom: -15px;
}

div.markers-length {
  font-family: "Comfortaa", cursive;
  margin-left: 34px;
  border: 1px solid #AC1F23;
  border-radius: 30px;
  background-color: #AC1F23;
  width: 30px;
  text-align: center;
  font-size: 12px;
  color: #ffffff;
  z-index: 2001;
}

/* styling the custom button */
#map > div.leaflet-control-container > div.leaflet-top.leaflet-right > div:nth-child(2) > button > span > img{
  width: 27px;
  margin-top: 1px;
  margin-left: -5px
}


/* end styling the custom button */

/* styling the info container */
#infoContainer {
  text-align: center;
    border: 5px solid #AC1F23;
    position: absolute;
    /* border-radius: 12px; */
    padding: 3px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    font-size: 20px;
    font-weight: bold;
    font-family: "Comfortaa", cursive;
    z-index: 2100;
    top: 10px;
    background-color: white;
    margin-left: 450px;
    margin-right: 260px;
}
/* end styling the info container */


/* Responsiveness */


@media screen and (max-width: 890px) and (min-width: 685px) {
  div.heading > h1{
    font-size: 28px;
  }
}

@media screen and (max-width: 684px) and (min-width: 631px) {
  #map {
    left: 30%;
    width: 70%;
    height:100%;
  }

  #sidebar{
    left: 0;
    height: 100%;
    width: 30%;
  }

  #infoContainer {
    margin-left: 248px;
    margin-right: 60px;
    font-size: 14px;
}

 
}
 div.heading > h1{
    font-size: 28px;
  }


@media screen and (max-width: 630px) and (min-width: 541px) {
  #map {
    left: 0;
    position: absolute;
    top: 0;
    height: 75%;
    width: 100%;
    bottom: 0;
  }

  #sidebar {
    top: 75%;
    height: 25%;
    width: 100%;

    position: absolute;
    left: 0;
    overflow: scroll;
  }

  #infoContainer {
    font-size: 20px;
    margin-left: 71px;
    width: 250px;
  }
}

@media screen and (max-width: 540px) and (min-width: 456px) {
  #map {
    left: 0;
    width: 100%;
    height: 75%;
  }

  #sidebar{
    top: 75%;
    height: 25%;
    width: 100%;
  }

  #infoContainer {
    font-size: 20px;
    margin-left: 71px;
    width: 250px;
  }

  .leaflet-popup-content-wrapper{
    height: 363px;
    width: 267px;
  }
  div.leaflet-popup-content{
    width: 206px;
  }
  div.popup-wrapper{
    height: 200px;
  }
  div.coleaders-wrapper {
    height: 51px;
    top: 302px;
  }
  div.name-wrapper{
    width: 241px;
  }
  p#leader-text{
    width: 245px;
  }
  p#coleaders-text{
    top: 277px;
  }

  div.details-top-wrapper{
    top: 78px;
  }
  div.leader-details-wrapper{
    top: 179px;
  }
}

@media screen and (max-width: 455px) and (min-width: 400px) {
  #map {
    position: absolute;
    left: 0;
    width: 100%;
    height: 70%;
    z-index: 1;
    width: 100%;
  }

  #sidebar{
    height: 30%;
    top: 70%;
    z-index: 2;
    width: 100%;
    background-color: #ffffff;
  }

  #infoContainer {
    margin-left: 71px;
    width: 250px;
  }

  .leaflet-popup-content-wrapper{
    height: 363px;
    width: 267px;
  }
  div.leaflet-popup-content{
    width: 206px;
  }
  div.popup-wrapper{
    height: 200px;
  }
  div.coleaders-wrapper {
    height: 51px;
    top: 302px;
  }
  div.name-wrapper{
    width: 241px;
  }
  p#leader-text{
    width: 245px;
  }
  p#coleaders-text{
    top: 277px;
  }

  div.details-top-wrapper{
    top: 78px;
  }
  div.leader-details-wrapper{
    top: 179px;
  }

}

@media screen and (max-width: 399px) {
 

  #map {
    position: absolute;
    left: 0;
    width: 100%;
    height: 70%;
    z-index: 1;
    width: 100%;
  }

  #sidebar{
    height: 30%;
    top: 70%;
    z-index: 2;
    width: 100%;
    background-color: #ffffff;
  }

  #infoContainer {
    font-size: 20px;
    margin-left: 71px;
    width: 250px;
  }

  .leaflet-popup-content-wrapper{
    height: 363px;
    width: 267px;
  }
  div.leaflet-popup-content{
    width: 206px;
  }
  div.popup-wrapper{
    height: 200px;
  }
  div.coleaders-wrapper {
    height: 51px;
    top: 302px;
  }
  div.name-wrapper{
    width: 241px;
  }
  p#leader-text{
    width: 245px;
  }
  p#coleaders-text{
    top: 277px;
  }

  div.details-top-wrapper{
    top: 78px;
  }
  div.leader-details-wrapper{
    top: 179px;
  }

}

/* End responsiveness */
