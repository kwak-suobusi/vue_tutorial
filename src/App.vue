<template>
  <div class="container">
    <div v-for="dog in data" :key="dog">
      <div v-if="dog.name !== '말티즈'">
      <h5>{{ dog.name }}</h5>
      <p>{{ dog.desc }}</p>
    </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component
export default class APP extends Vue {
  data = [
    {
      name: '말티즈',
      desc: "귀여움"
    },
    {
      name: '비숑',
      desc: "겁나 귀엽다"
    },
    {
      name: '리트리버',
      desc: "착하다"
    },
    {
      name: '불독',
      desc: "무섭다"
    }
  ]
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

.container {
  background-color: lightgray;
  height: 500px;
  display: flex;
}

.container div {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  text-align: center;
}
</style>
