<template>
    <div>
        <b-navbar type="is-dark" fixed-top>
            <template slot="start">
                <b-navbar-item href=#>
                    Home
                </b-navbar-item>
                <b-navbar-dropdown label="Info">
                    <b-navbar-item href="#">
                        About
                    </b-navbar-item>
                    <b-navbar-item href="#">
                        Contact
                    </b-navbar-item>
                </b-navbar-dropdown>
            </template>
            
            <template slot="end">
                <b-navbar-item tag="div">
                    <div class="buttons">
                        <a class="button is-primary is-light" @click="signOut">
                            Sign out
                        </a>
                    </div>
                </b-navbar-item>
            </template>
        </b-navbar>

        <section class="form">
            <b-field label="Location">
                <gmap-autocomplete ref="autocomplete" class="auto" @place_changed="setPlace" placeholder="Enter an address here..."></gmap-autocomplete>
            </b-field>
            <div v-show="error" style="color: red">{{ error }}</div>
            <b-button @click="getCurrentLocation" type="is-primary is-light" style="float: left">Current Location</b-button>
            <section class="radioButtons">
                <div class="field">
                <b-radio v-model="radio"
                    native-value="paper"
                    type="is-info">
                    Paper
                </b-radio>
                </div>
                <div class="field">
                    <b-radio v-model="radio"
                        native-value="glass"
                        type="is-success">
                        Glass
                    </b-radio>
                </div>
                <div class="field">
                    <b-radio v-model="radio"
                        native-value="plastic"
                        type="is-warning">
                        Plastic
                    </b-radio>
                </div>
                <div class="field">
                    <b-radio v-model="radio"
                        native-value="other"
                        type="is-danger">
                        Other
                    </b-radio>
                </div>
            </section>
            <div v-show="radioError" style="color: red">{{ radioError }}</div>
            <b-field label="Description" class="desc">
                <b-input maxlength="200" type="textarea" v-model="description" placeholder="Type your message here..."></b-input>
            </b-field>
            <div v-if="imageData!=null">                     
                <img class="preview" height="268" width="356" :src="img1">
                <br>
            </div>
            <b-button class="button" @click="addMarkers" type="is-primary is-light" native-type="submit">Add Marker</b-button>
            <div>
                <b-button class="button" @click="click1" type="is-primary is-light" native-type="submit">Upload a photo</b-button>
                <input type="file" ref="input1"
                    style="display: none"
                    @change="previewImage" accept="image/*" >
            </div>
        </section>

        <section class="map" id="map" ref="map">
            <GmapMap
                ref="mapRef"
                :center="coordinates"
                :zoom="12"
                style="height: 720px; margin: 0 auto"
                @click="addMarkerMouse"
            >
                <Gmap-info-window
                    :position="infoPosition"
                    :opened="infoOpened"
                    :content="infoContent"
                    :options="infoOptions"
                    @closeclick="infoOpened=false"
                />
                <GmapMarker
                    :key="index"
                    v-for="(m, index) in markers"
                    :position="m.position"
                    :clickable="true"
                    :draggable="false"
                    :icon="m.color"
                    @click="toggleInfo(m, index)"
                />
            </GmapMap>
        </section>

    </div>
</template>

<script>
import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import { markerRef } from '../firebase.js';
import { gmapApi } from 'vue2-google-maps'


    export default {

        firebase: {
            markers: markerRef
        },

        data (){
            return{
                // info window
                infoPosition: null,
                infoOpened: false,
                infoContent: null,
                infoOptions: {
                    content: ''
                },

                // markers
                places: [],
                markers: [],
                currentPlace: null,
                markerOptions: "",

                // input
                description: "",
                error: "",


                // current location
                file: null,
                coordinates: {
                    lat: 0,
                    lng: 0
                },

                // image
                img1: '',
                imageData: null,

                // radio buttons
                radio: "",
                radioError: "",
            }
        },

        computed: {
            google: gmapApi
        },

        // center map on current location
        created (){
            this.$getLocation({})
                .then(coordinates =>{
                    this.coordinates = coordinates;
                })
                .catch(error => alert(error));
        },

        methods: {

            // image storing
            click1() {
                this.$refs.input1.click()
            },

            previewImage(event) {
                this.uploadValue=0;
                this.img1=null;
                this.imageData = event.target.files[0];
                this.onUpload()
            },

            onUpload(){
                this.img1=null;
                const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
                storageRef.on(`state_changed`,snapshot=>{
                this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
                    }, error=>{console.log(error.message)},
                ()=>{this.uploadValue=100;
                    storageRef.snapshot.ref.getDownloadURL().then((url)=>{
                        this.img1 =url;
                        console.log(this.img1)
                        });
                    }      
                    );
            },

            // adding markers
            setPlace(place) {
                this.currentPlace = place;
            },

            addMarkers() {
                if(!this.currentPlace) {
                    this.error = "Please enter the address";
                    return
                }

                if(!this.radio) {
                    this.error = "";
                    this.radioError = "Please select a dumpster or other if reporting trash on the street";
                    return
                }
                if(this.radio == "paper") {
                    this.markerOptions = { url: require('../assets/markers/blue_marker.png')};
                } else if(this.radio == "glass") {
                    this.markerOptions = { url: require('../assets/markers/green_marker.png')};
                }
                else if(this.radio == "plastic") {
                    this.markerOptions = { url: require('../assets/markers/yellow_marker.png')};
                } else {
                    this.markerOptions = "";
                }

                if(this.currentPlace) {
                    this.error = "";
                    this.radioError = "";
                    const marker = {
                        lat: this.currentPlace.geometry.location.lat(),
                        lng: this.currentPlace.geometry.location.lng(),
                    };
                    markerRef.push({ address: this.$refs.autocomplete.$refs.input.value, position: marker, color: this.markerOptions, description: this.description, image: this.img1});
                    this.places.push(this.currentPlace);
                }
            },

            toggleInfo: function (marker) {
                this.infoPosition = marker.position;
                this.infoOpened = true;
                this.infoOptions.content = ` <h1 style="font-size: 15px;">${marker.address}</h1>
                <br/>
                <p class="imgDesc">${marker.description}</p>
                <br/>
                <div style="width: 300px">
                    <img src="${marker.image}" style="width:100%;"/>
                </div>`
            },

            // get current location
            getCurrentLocation() {
                const geocoder = new this.google.maps.Geocoder();

                geocoder.geocode({ location: this.coordinates }, (results, status) => {
                    if (status === "OK") {
                        if (results[0]) {
                            this.$refs.autocomplete.$refs.input.value = results[0].formatted_address
                        } else {
                            window.alert("No results found");
                        }
                    } else {
                        window.alert("Geocoder failed due to: " + status);
                    }
                });
            },

            // get location of mouse click
            addMarkerMouse(event) {
                this.error = ""

                const geocoder = new this.google.maps.Geocoder();
                const latlng = {
                    lat: event.latLng.lat(),
                    lng: event.latLng.lng(),
                };

                geocoder.geocode({ location: latlng }, (results, status) => {
                    if (status === "OK") {
                        if (results[0]) {
                            this.$refs.autocomplete.$refs.input.value = results[0].formatted_address
                        } else {
                            window.alert("No results found");
                        }
                    } else {
                        window.alert("Geocoder failed due to: " + status);
                    }
                });
            },

            // sign out
            async signOut(){
                try{
                    const data = await firebase.auth().signOut();
                    console.log(data)
                    this.$router.replace({name: "login"})
                }catch(err){
                    console.log(err)
                }
            },

        }
    }
</script>

<style scoped>
    .auto{
        width: 100%;
        padding: 10px 0;
    }

    .map{
        width: 70%;
        float: left;
        padding: 20px;
        height: 720px; 
        margin: 0 auto;
    }

    .form{
        width: 30%;
        float: left;
        padding: 20px;
    }

    .button{
        float: right;
        margin: 5px;
    }

    .radioButtons{
        display: flex;
        width: 100%;
        padding-top: 15px;
    }

    @media screen and (max-width: 1200px) {
        .map, .form{
            width: 100%;
        }
    }
</style>
