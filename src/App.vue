<script setup>
import Scene from './Scene.vue'
</script>

<template>
  <div class="root">
    <Scene>
      <Mesh :position="[15,1,0]" color="red"/>
      <Mesh :position="[-15,1,0]" color="green"/>
      <Mesh :position="[15,16,0]" color="yellow"/>
    </Scene>
  </div>
</template>

<style scoped>
.root {
  width: 100vw;
  height: 100vh;
}
</style>
