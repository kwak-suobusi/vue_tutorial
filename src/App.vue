<template>
  <div class="container">
    <div class="card">
      <div class="img-box">
        <img :src="worldFoodData[currentIndex].img" :alt="worldFoodData[currentIndex].name"/>
      </div>
      <div class="text-box">
        <span>{{worldFoodData[currentIndex].name}}</span>
      </div>
    </div>
    <button @click="loop">룰렛 돌리기! ></button>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {worldFoods} from "@/data/worldFoods";

@Component
export default class APP extends Vue {
  worldFoodData = worldFoods;
  currentIndex = 0;


  loop() {

    for ()
      setTimeout(() => {
        this.currentIndex++;
        // for (let i = this.currentIndex; i < this.worldFoodData.length; i++) {
        //     console.log(i);
        // }
      }, 1000)
      // this.currentIndex++;
      // if (this.currentIndex === this.worldFoodData.length - 1) {
      //   this.currentIndex = 0;
      // }


  }
}
</script>
<style>
body {
  margin: 0;
  padding: 0;
}

.card {
  border: 1px solid black;
  height: 300px;
  width: 400px;
  margin: auto;
}

.img-box {
  height: 250px;
}

.img-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.text-box {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
