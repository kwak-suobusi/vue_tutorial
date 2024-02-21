<template>
  <div class="container">
    <div v-for="food in worldFoodData" :key="food.name">
      <img :src="food.img" :alt="food.name"/>
      <h1>{{food.name}}</h1>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {worldFoods} from "@/data/worldFoods";

@Component
export default class APP extends Vue {
  worldFoodData = worldFoods;
}
</script>
<style>
body {
  margin: 0;
  padding: 0;
}
</style>
