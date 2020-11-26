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
                        <a class="button is-light" @click="signOut">
                            Sign out
                        </a>
                    </div>
                </b-navbar-item>
            </template>
        </b-navbar>

        <section class="form">
            <b-field label="Location">
                <b-input placeholder="e.g. Vrbik 8, Zagreb, Croatia"></b-input>
            </b-field>
            <b-field class="file is-primary">
                <b-upload v-model="file" class="file-label">
                    <span class="file-cta">
                        <span class="file-label">Click to upload</span>
                    </span>
                    <span class="file-name" v-if="file">
                        {{ file.name }}
                    </span>
                </b-upload>
            </b-field>
            <b-field label="Discription" class="discription">
                <b-input maxlength="200" type="textarea" placeholder="Type your message here..."></b-input>
            </b-field>
        </section>

        <section class="map">
            <GmapMap
                :center="coordinates"
                :zoom="12"
                style="height: 720px; margin: 0 auto"
            >
            </GmapMap>
        </section>

    </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
    export default {
        data (){
            return{
                file: null,
                coordinates: {
                    lat: 0,
                    lng: 0
                }
            }
        },

        created (){
            this.$getLocation({})
                .then(coordinates =>{
                    this.coordinates = coordinates;
                })
                .catch(error => alert(error));
        },

        methods: {
            async signOut(){
                try{
                    const data = await firebase.auth().signOut();
                    console.log(data)
                    this.$router.replace({name: "login"})
                }catch(err){
                    console.log(err)
                }
            }
        }
    }
</script>

<style scoped>
    .map{
        width: 70%;
        float: left;
        padding: 20px;
    }

    .form{
        width: 30%;
        float: left;
        padding: 20px;
    }

    .file-label{
        padding-left: 10px;
    }

    @media screen and (max-width: 1000px) {
        .map, .form{
            width: 100%;
        }
    }
</style>
