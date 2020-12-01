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
            <div v-show="error" style="red">{{ error }}</div>
            <b-field label="Location">
                <gmap-autocomplete ref="autocomplete" class="auto" @place_changed="setPlace" placeholder="Enter an address here..."></gmap-autocomplete>
            </b-field>
            <b-field label="Description" class="description">
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
                :center="coordinates"
                :zoom="12"
                style="height: 720px; margin: 0 auto"
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

    export default {

        firebase: {
            markers: markerRef
        },

        data (){
            return{
                // markers
                infoPosition: null,
                infoOpened: false,
                infoContent: null,
                infoOptions: {
                    content: ''
                },

                places: [],
                markers: [],
                currentPlace: null,

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
                imageData: null
            }
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
                if(this.currentPlace) {
                    const marker = {
                        lat: this.currentPlace.geometry.location.lat(),
                        lng: this.currentPlace.geometry.location.lng(),
                    };
                    markerRef.push({ address: this.$refs.autocomplete.$refs.input.value, position: marker, description: this.description, image: this.img1});
                    this.places.push(this.currentPlace);
                    this.currentPlace = null;
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

    @media screen and (max-width: 1000px) {
        .map, .form{
            width: 100%;
        }
    }
</style>
