<template>
    <div>
        <b-navbar>
            <template slot="start">
                <b-navbar-item href="#">
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
            :center="{lat:10, lng:10}"
            :zoom="7"
            style="width: 1080px; height: 720px; margin: 20px auto"
            >
        </GmapMap>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped>
</style>
