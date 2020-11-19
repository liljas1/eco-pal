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
                        <a class="button is-primary">
                            <router-link to="/signup" tag="p">Sign up</router-link>
                        </a>
                        <a class="button is-light">
                            <router-link to="/login">Log in</router-link>
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
                        <b-icon class="file-icon" icon="upload"></b-icon>
                        <span class="file-label">Click to upload</span>
                    </span>
                    <span class="file-name" v-if="file">
                        {{ file.name }}
                    </span>
                </b-upload>
            </b-field>
            <b-field label="Discription" class="discription">
                <b-input maxlength="200" type="textarea"></b-input>
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
