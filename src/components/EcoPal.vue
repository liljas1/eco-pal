<template>
    <div>
        <b-navbar type="is-dark" fixed-top>
            <template slot="start">
                <b-navbar-item @click="prompt">
                    Upload a location
                </b-navbar-item>
                <b-navbar-item href="#">
                    Create a point
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
        </b-navbar>

        <GmapMap
            :center="coordinates"
            :zoom="7"
            style="width: 80%; height: 720px; margin: 0 auto"
            >
        </GmapMap>
    </div>
</template>

<script>
    export default {
        methods:{
            prompt() {
                this.$buefy.dialog.prompt({
                    message: 'Enter an adress:',
                    inputAttrs: {
                        placeholder: 'e.g. Vrbik 8, Zagreb, Croatia',
                        maxlength: 50
                    },
                    trapFocus: true,
                    onConfirm: (value) => this.$buefy.toast.open(`The location has been sent to the local utility service: ${value}`)
                })
            }
        },

        data (){
            return{
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
</style>
