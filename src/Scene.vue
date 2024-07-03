<script setup lang='ts'>
import { onMounted, defineSlots, ref } from 'vue';
import { SceneControl as Scene, Vector3, } from '@anov/3d-core'
import mountCustomRenderer from './mountCustomRenderer'

const slots = defineSlots()
const canvas = ref()

onMounted(() => {
    const scene = new Scene({
        orbitControls: {
            use: true,
        },
        defCameraOps: {
            position: new Vector3(10, 10, 10),
            far: 1000000,
        },
        rendererOps: {
            shadowMap: true,
            alpha: true,
        },
        reset: true,
        ambientLight: true,

    })

    scene.render(canvas.value)

    mountCustomRenderer(scene,slots)
})
</script>

<template>
    <div ref="canvas">
    </div>
</template>

<style scoped lang='scss'></style>