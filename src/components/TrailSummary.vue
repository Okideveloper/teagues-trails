<template>
  <div>
    <div class="d-flex justify-content-center mb-5">
      <h1>Hikes Nearby</h1>
    </div>
    <div class="row">
      <div class="column">
        <b-card-group columns>
          <div v-for="trail in trailSummary" :key="trail.trailId">
            <b-card
              img-top
              img-fluid
              :header="trail.trailName"
              :sub-title="trail.trailSummary"
              :img-src="trail.trailImg"
              header-bg-variant="dark"
              header-text-variant="light"
            >
              <p class>Location: {{ trail.trailLocation }}</p>
              <p class>Length: {{ trail.trailLength }} miles</p>
              <p class>Ascent: {{ trail.trailAscent }} ft</p>
              <p class>Descent: {{ trail.trailDescent }} ft</p>
              <p class>High: {{ trail.trailHigh }} ft</p>
              <p class>Low: {{ trail.trailLow }} ft</p>
              <div slot="footer" class="text-center">
                <b-link :href="trail.trailInfo" target="_blank">Select</b-link>
              </div>
            </b-card>
          </div>
        </b-card-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TrailSummary",
  props: ["trailSummary"]
}
</script>
<style>
</style>