<script setup>
import Scene from './Scene.vue'
</script>

<template>
  <div class="root">
    <Scene>
      <Mesh :position="[0, 0, 0]">
        <BoxGeometry :size="[1, 1, 1]" />
        <MeshBasicMaterial color="red" />
      </Mesh>

      <Mesh :position="[-10, 10, 0]">
        <BoxGeometry :size="[1, 1, 1]" />
        <MeshBasicMaterial color="green" />
      </Mesh>

      <Mesh :position="[-10, -10, 0]">
        <BoxGeometry :size="[1, 1, 1]" />
        <MeshBasicMaterial color="yellow" />
      </Mesh>
    </Scene>
  </div>
</template>

<style scoped>
.root {
  width: 100vw;
  height: 100vh;
}
</style>
