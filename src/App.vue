<script setup>
import { Color, MeshBasicMaterial } from '@anov/3d-core'
import Scene from './Scene.vue'

const handleClick = (node) => {
  node.material = new MeshBasicMaterial({
    color: new Color('#ccc'),
  })
}

const handleMouseover = (node) => {
  node.material = new MeshBasicMaterial({
    color: new Color('#fff'),
  })
}

const handleMouseout = (node) => {
  node.material = new MeshBasicMaterial({
    color: new Color('red'),
  })
}
</script>

<template>
  <div class="root">
    <Scene>
      <AMesh :position="[0, 0, 0]" @click="handleClick" @mouseover="handleMouseover" @mouseout="handleMouseout">
        <ABoxGeometry :size="[1, 1, 1]" />
        <AMeshBasicMaterial color="red" />
      </AMesh>

      <AMesh :position="[-10, 10, 0]">
        <ABoxGeometry :size="[1, 1, 1]" />
        <AMeshBasicMaterial color="green" />
      </AMesh>

      <AMesh :position="[-10, -10, 0]">
        <ABoxGeometry :size="[1, 1, 1]" />
        <AMeshBasicMaterial color="yellow" />
      </AMesh>
    </Scene>
  </div>
</template>

<style scoped>
.root {
  width: 100vw;
  height: 100vh;
}
</style>
