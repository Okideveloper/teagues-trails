<template>
  <div class="d-flex justify-content-center mt-4 w-100">
    <GmapMap
      :center="{lat: +this.$props.locationData.lat, lng: +this.$props.locationData.lng}"
      :zoom="10"
      class="map-size"
    >
      <gmap-info-window
        :position="infoWindowPos"
        :opened="infoWindowOpen"
        :options="infoOptions"
      >{{ infoWindowContent }}</gmap-info-window>
      <GmapMarker
        v-for="(mark, index) in markers"
        :key="index"
        :position="{lat: mark.location.trailLatitude, lng: mark.location.trailLongitude}"
        :clickable="true"
        @click="toggleInfoWindow(mark, index)"
      />
    </GmapMap>
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  props: ["locationData", "markers"],
  data() {
    return {
      infoWindowPos: null,
      infoWindowContent: "",
      infoWindowOpen: false,
      currentMidx: null,
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      }
    };
  },
  methods: {
    toggleInfoWindow(mark, index) {
      this.infoWindowPos = {
        lat: mark.location.trailLatitude,
        lng: mark.location.trailLongitude
      };
      this.infoWindowContent = mark.trailName;
      if (this.currentMidx == index) {
        this.infoWindowOpen = !this.infoWindowOpen;
      } else {
        this.infoWindowOpen = true;
        this.currentMidx = index;
      }
    }
  }
};
</script>

<style scoped>
.map-size {
  width: 70vw;
  height: 50vh;
}
</style>